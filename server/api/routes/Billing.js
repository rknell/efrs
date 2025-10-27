const Company = require('../models/Company').model
const Response = require('../models/Response').model
const File = require('../models/Files').model
const Form = require('../models/Form').model
const errorHandler = require('../services/errorHandler')
const Statement = require('../models/Statement').model
const moment = require('moment-timezone')
const stripePrivateKey = process.env.STRIPE_PRIVATE_KEY
if (!stripePrivateKey) {
  console.warn('STRIPE_PRIVATE_KEY is not set. Stripe operations will be disabled until it is configured.')
}
const stripe = stripePrivateKey ? require('stripe')(stripePrivateKey) : null
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY
const emailSvc = require('../services/email')

function getPrice (docs) {
  return (Math.ceil((0.5 * Math.pow(docs, -0.1243027)) * 100)) / 100
}

async function report (req, res) {
  try {
    res.json(await _report(req.params.year, req.params.month))
  } catch (e) {
    errorHandler(res)(e)
  }
}

async function _report (year, month) {
  const companies = await Company.find({}).select('name').lean()

  const startOfMonth = moment(`${year}-${month}-01`).tz('Australia/Brisbane').startOf('month')
  const endOfMonth = moment(`${year}-${month}-01`).tz('Australia/Brisbane').endOf('month')

  for (let company of companies) {
    const filter = {
      company: company._id,
      createdAt: {
        $lt: endOfMonth.toDate(),
        $gte: startOfMonth.toDate()
      }
    }

    company.forms = {}
    company.files = await File.count(filter)
    const responses = await Response.count(filter)
    const formIds = await Response.distinct('formId', filter)
    for (let formId of formIds) {
      const formCount = await Response.count({ ...filter, formId })
      const formName = await Form.findOne({ _id: formId }).select('name')
      if (formName) {
        company.forms[formName.name] = formCount
      } else {
        if (!company.forms['deleted form']) company.forms['deleted form'] = 0
        company.forms['deleted form'] += formCount
      }
    }

    const responseCount = responses
    const totalItems = responseCount + company.files
    const price = getPrice(totalItems)

    company.responses = responseCount
    company.docPrice = price
    company.totalCost = (Math.ceil((price * totalItems) * 100)) / 100
  }

  return companies.reduce((result, company) => {
    if (company.responses > 0) {
      result.push(company)
    }
    return result
  }, [])
}

async function _generateStatements (year, month, company) {
  if (!month) month = moment().subtract(1, 'month').format('MM')
  if (!year) year = moment().subtract(1, 'month').format('YYYY')
  let report = await _report(year, month)

  if (company) {
    report = report.filter(reportCompany => reportCompany._id.toString() === company.toString())
  }

  for (let reportCompany of report) {
    const existing = await Statement.findOne({ company: reportCompany._id, month, year })
    if (!existing) {
      const company = await Company.findOne({ _id: reportCompany._id })

      if (company.plan === 'monthly') {
        const lines = [...company.outstandingLines]
        company.outstandingLines.length = 0

        for (let formName in reportCompany.forms) {
          lines.push({
            description: formName,
            qty: reportCompany.forms[formName],
            amount: reportCompany.forms[formName] * reportCompany.docPrice
          })
        }

        if (reportCompany.files > 0) {
          lines.push({
            description: 'Photos',
            qty: reportCompany.files,
            amount: reportCompany.files * reportCompany.docPrice
          })
        }

        if (company.credits > 0) {
          let creditsApplied = 0
          if (reportCompany.responses + reportCompany.files > company.credits) {
            creditsApplied = company.credits
          } else {
            creditsApplied = reportCompany.responses + reportCompany.files
          }

          company.credits -= creditsApplied

          lines.push({
            description: `Pre-purchased credits.\n(Credits remaining ${company.credits})`,
            qty: creditsApplied,
            amount: creditsApplied * reportCompany.docPrice * -1
          })
        }

        let balance = lines.reduce((result, line) => {
          result += line.amount
          return result
        }, 0)

        const tax = Number((balance * (company.billing.tax / 100)).toFixed(2))
        balance = balance + tax
        const outstanding = balance.toFixed(2)

        const newStatement = new Statement({
          year,
          month,
          balance,
          outstanding,
          tax,
          company,
          lines
        })

        await newStatement.save()
        await company.save()

        await _doEmailStatement(newStatement)
      }
    }
  }
}

async function generateMonthlyStatements (req, res) {
  try {
    await _generateStatements(req.params.year, req.params.month, req.params.company)
    res.json({ success: true })
  } catch (e) {
    console.error(e)
    errorHandler(res)(e)
  }
}

async function viewStatement (req, res) {
  try {
    const statement = await Statement.findOne({
      _id: req.params.statement,
      company: req.params.company
    }).populate('company').lean()
    console.log('rendering statement', JSON.stringify(statement, null, 2))
    if (statement) {
      const publicKey = stripePublicKey
      if (!publicKey) {
        throw new Error('STRIPE_PUBLIC_KEY is not configured')
      }

      res.render('Statement.pug', {
        statement: statement,
        stripeKey: publicKey
      })
    } else {
      res.status(404).send({ message: 'Statement not found' })
    }
  } catch (e) {
    errorHandler(res)(e)
  }
}

async function _doEmailStatement (statement) {
  let type = 'Statement'
  if (statement.outstanding > 0) {
    type = 'Invoice'
  }

  return emailSvc.sendTemplate(
    'statementAvailable',
    { statement },
    `eFRS ${type}`,
    'sales@efrs.io',
    'eFRS admin',
    statement.company.billing.billingEmail + ',sales@efrs.io'
  )
}

async function emailStatement (req, res) {
  try {
    if (!stripe) {
      throw new Error('Stripe is not configured. Set STRIPE_PRIVATE_KEY to enable payments.')
    }

    const statement = await Statement
      .findOne({ _id: req.params.statement })
      .populate('company')

    const emailResult = await _doEmailStatement(statement)

    res.json(emailResult)
  } catch (e) {
    console.error(e)
    res.status(500).json(e)
  }
}

async function payInvoice (req, res) {
  const statement = await Statement.findOne({
    _id: req.params.statement,
    company: req.params.company
  }).populate('company')

  try {
    if (!stripe) {
      throw new Error('Stripe is not configured. Set STRIPE_PRIVATE_KEY to enable payments.')
    }

    const amount = Math.round(statement.outstanding * 1.1 * 100)
    const charge = await new Promise((resolve, reject) => {
      stripe.charges.create({
        amount: amount,
        currency: 'aud',
        source: req.body.stripeToken, // obtained with Stripe.js
        description: `eFRS invoice ${statement.id}`
      }, function (err, charge) {
        if (err) reject(err)
        else resolve(charge)
      })
    })

    statement.logs.push(charge)
    statement.outstanding = 0
    await statement.save()
    await viewStatement(req, res)
  } catch (e) {
    console.error('Payment error', e)
    statement.logs.push(e)
    res.json({ message: 'Payment error', error: e })
    await statement.save()
  }
}

async function contact (req, res) {
  let body = ''
  Object.keys(req.body).forEach(item => {
    body += `${item}: ${req.body[item]}\n`
  })
  emailSvc.send(body, 'eFRS web enquiry', req.body.email, req.body.name, 'sales@efrs.io')
  res.json({ success: true })
}

module.exports = {
  routes: [
    {
      path: 'report/:year/:month',
      method: 'get',
      fn: report,
      middleware: []
    }, {
      path: 'statement/:company/:statement/view',
      method: 'get',
      fn: viewStatement,
      middleware: []
    }, {
      path: 'generatemonthlystatements',
      method: 'get',
      fn: generateMonthlyStatements,
      middleware: []
    }, {
      path: 'generatestatement/:year/:month/:company',
      method: 'get',
      fn: generateMonthlyStatements,
      middleware: []
    }, {
      path: 'generatestatement/:year/:month',
      method: 'get',
      fn: generateMonthlyStatements,
      middleware: []
    }, {
      path: 'statement/:company/:statement/pay',
      method: 'post',
      fn: payInvoice,
      middleware: []
    }, {
      path: 'statement/:statement/email',
      method: 'get',
      fn: emailStatement,
      middleware: []
    }, {
      path: 'contact',
      method: 'post',
      fn: contact,
      middleware: []
    }
  ]
}
