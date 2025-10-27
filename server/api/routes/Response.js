const Response = require('../models/Response').model
const Form = require('../models/Form').model
const Download = require('../models/Downloads').model
const errorHandler = require('../services/errorHandler')
const libForm = require('../../../app/app/lib/form')
const middleware = require('../middleware')
const url2pdf = require('url2pdf')
const emailSvc = require('../services/email')
const emailResponse = require('../services/emailResponse')
const q = require('q')
const ServerError = require('../classes/ServerError')
const renderHTML = require('../../api/services/renderHTML')
const base64 = require('base-64')

function getHost (req) {
  if (req.get('host') === 'www.efrs.io') {
    return 'https://www.efrs.io'
  } else {
    return req.protocol + '://' + req.get('host')
  }
}

function view (req, res) {
  let form
  Response.findOne({ _id: req.params.id })
    .populate('formId')
    .populate('createdBy')
    .lean()
    .then(response => {
      if (!response) return res.json({ message: 'Response not found' })
      form = response.formId
      libForm.hydrateValues(form, response)
      return renderHTML.go(form, req.headers['x-timezone'])
    })
    .then(output => {
      res.send(output)
    })
    .catch(errorHandler(res))
}

function viewpdf (req, res) {
  url2pdf.renderPdf(`http://localhost:1676/api/response/view/${req.params.id}`, {
    saveDir: process.env.STORAGE_DIR
  })
    .then(function (output) {
      res.sendFile(output)
    })
}

async function viewCSV (req, res) {
  const response = await Response.findOne({ _id: req.params.id })
    .populate('formId')
    .populate('createdBy')
    .catch(errorHandler(res))
  if (!response) {
    throw new ServerError('Response not found', 400)
  }
  const formJSON = JSON.stringify(response.formId)
  let output = await libForm.getCSVHeaders(formJSON)
  output = await libForm.toCSV(formJSON, [response], req.headers['x-timezone'])
  res.set({ 'Content-Type': 'text/csv' })
  res.set({ 'Content-Disposition': `attachment; filename=${response.formId.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}${req.params.id}.csv` })
  res.send(output)
}

function emailCSV (req, res) {
  Response.findOne({ _id: req.params.id })
    .populate('formId')
    .then(response => {
      if (!response) {
        throw new ServerError('Response not found', 400)
      }
      return emailSvc.send(
        `To access the CSV file please click here:
      ${getHost(req)}/api/response/viewCSV/${req.params.id}
      `, `CSV Download - ${response.formId.name}`, 'admin@efrs.io', 'eFRS Admin', req.params.email)
    })
    .then(() => {
      res.json({ message: 'Sent successfully' })
    })
    .catch(errorHandler(res))
}

function download (req, res) {
  url2pdf.renderPdf(`http://localhost:1676/api/response/view/${req.params.id}`, {
    saveDir: process.env.STORAGE_DIR
  })
    .then(function (output) {
      console.log(output)
      res.download(output)
    })
}

function email (req, res) {
  Response.findOne({ _id: req.params.id })
    .populate('formId')
    .then((response) => {
      if (!response) {
        throw new ServerError('Response not found', 400)
      }
      emailResponse.send(response, req.params.email, req.headers['x-timezone'])
    })
    .then(() => {
      res.json({ message: 'Sent successfully' })
    })
    .catch(errorHandler(res))
}

function list (req, res) {
  populateFormResponse(Response.find({ company: req.payload.company }), res)
}

function listByForm (req, res) {
  populateFormResponse(Response.find({ company: req.payload.company, formId: req.params.formId }), res)
}

function quickSearch (req, res) {
  populateFormResponse(Response.find({
    $text: { $search: req.params.query },
    company: req.payload.company,
    formId: req.params.formId
  }), res)
}

function _advancedSearchBuildQuery (responses, formId, payload, createdBy) {
  if (!responses || !formId) {
    throw new ServerError('Invalid request', 400)
  }
  const query = { formId, company: payload.company }
  if (createdBy) {
    query.createdBy = createdBy
  }
  if (!payload.permissions.canViewResponses && payload.permissions.canViewMyResponses) {
    query.createdBy = payload._id
  }
  Object.keys(responses).forEach(responseKey => {
    query[`responses.${responseKey}`] = responses[responseKey]
  })

  return query
}

function advancedSearch (req, res) {
  let query = _advancedSearchBuildQuery(req.body.responses, req.body.formId, req.payload, req.body.createdBy)
  populateFormResponse(Response.find(query), res, req.params.page)
}

async function advancedSearchToCSV (req, res) {
  try {
    if (req.body.email) {
      let newDownload = new Download({
        body: JSON.stringify(req.body), params: JSON.stringify(req.params), payload: JSON.stringify(req.payload)
      })

      await newDownload.save()

      await emailSvc.send(`Please follow the link to download your CSV. The link will expire in 3 hours.
      ${getHost(req) + '/api/response/downloadCSV/' + newDownload._id}
      `, 'eFRS CSV export', 'admin@efrs.io', 'eFRS Admin', req.body.email)
      res.json({ success: true, message: 'Email queued' })
    } else {
      const form = await Form.findOne({ _id: req.body.formId }).lean()
      const query = _advancedSearchBuildQuery(req.body.responses, req.body.formId, req.payload, req.body.createdBy)

      streamCSV(form, query, req.params.id, res, req)
    }
  } catch (e) {
    errorHandler(res)(e)
  }
}

async function downloadCSV (req, res) {
  try {
    const dlRequest = await Download.findOne({ _id: req.params.token }).lean()
    if (!dlRequest) {
      res.status(400).json({ message: 'Download request not found or expired. Send another request from the app.' })
    } else {
      const parsed = {
        body: JSON.parse(dlRequest.body),
        payload: JSON.parse(dlRequest.payload)
      }
      const form = await Form.findOne({ _id: parsed.body.formId }).lean()
      const query = _advancedSearchBuildQuery(parsed.body.responses, parsed.body.formId, parsed.payload, parsed.body.createdBy)
      streamCSV(form, query, parsed.payload.id, res, req)
    }
  } catch (e) {
    console.error(e)
    errorHandler(res)(e)
  }
}

async function streamCSV (form, query, userId, res, req) {
  try {
    const formJSON = JSON.stringify(form)

    res.set({ 'Content-Type': 'text/csv' })
    res.set({ 'Content-Disposition': `attachment; filename=${form.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}${userId}.csv` })

    res.write(await libForm.getCSVHeaders(formJSON))

    await Response.find(query)
      .sort('-updatedAt')
      .populate('createdBy', 'firstName lastName username email')
      .limit(5000)
      .cursor()
      .eachAsync(async (doc) => {
        if (!process.env.REGENERATE_CSV && doc.csv && doc.csv.data && doc.csv.formVersion === form.version) {
          res.write(doc.csv.data, 'utf8')
        } else {
          const output = await libForm.toCSV(formJSON, [doc], req.headers['x-timezone'])
          doc.skipHooks = true
          doc.csv.formVersion = form.version
          doc.csv.data = output
          await doc.save()
          res.write(output, 'utf8')
        }
      })

    res.end()
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'an unexpected error occurred' })
  }
}

async function advancedSearchToUrl (req, res) {
  const query = _advancedSearchBuildQuery(JSON.parse(base64.decode(req.query.responses)), req.query.formId, req.payload, req.query.createdBy)
  const form = await Form.find({ _id: req.query.formId })

  streamCSV(form, query, req.payload.id, res, req)
}

function processSearchResponse (results) {
  const deferred = q.defer()

  results.forEach(result => {
    if (!result.formId) {
      results.splice(results.indexOf(result), 1)
    } else {
      libForm.hydrateValues(result.formId, result)
      result.formId.pages.forEach(page => {
        page.groups[0].fields.forEach(field => {
          const fieldSettings = libForm.fieldSettings(field)
          if (!result.responses) result.responses = {}
          if (result.responses[field.fieldId]) {
            result.responses[field.fieldId].label = fieldSettings['Label']
            result.responses[field.fieldId].showInSearch = fieldSettings['Show In Search']
          }
        })
      })
      result.formId = {
        _id: result.formId._id,
        name: result.formId.name
      }
    }
  })

  deferred.resolve(results)

  return deferred.promise
}

function assignedToMe (req, res) {
  populateFormResponse(Response.find({ 'status.assignedToUser': req.payload._id }), res)
}

function assignedToGroup (req, res) {
  populateFormResponse(Response.find({ 'status.assignedToGroup': { $in: req.payload.groups } }), res)
}

function populateFormResponse (query, res, page = 1) {
  const pageSize = Number(process.env.PAGE_SIZE) || 30
  query.sort('-updatedAt')
    .populate('formId')
    .populate('createdBy', 'firstName lastName username email')
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .lean()
    .then(processSearchResponse)
    .then(responses => {
      res.json(responses)
    })
    .catch(errorHandler(res))
}

module.exports = {
  routes: [
    {
      path: 'view/:id',
      method: 'get',
      fn: view,
      middleware: []
    },
    {
      path: 'assignedToMe',
      method: 'get',
      fn: assignedToMe,
      middleware: [middleware.isAuthenticated]
    },
    {
      path: 'assignedToGroup',
      method: 'get',
      fn: assignedToGroup,
      middleware: [middleware.isAuthenticated]
    },
    {
      path: 'viewpdf/:id',
      method: 'get',
      fn: viewpdf,
      middleware: []
    },
    {
      path: 'viewCSV/:id',
      method: 'get',
      fn: viewCSV,
      middleware: []
    },
    {
      path: 'download/:id',
      method: 'get',
      fn: download,
      middleware: []
    },
    {
      path: 'email/:id/:email',
      method: 'get',
      fn: email,
      middleware: []
    },
    {
      path: 'emailCSV/:id/:email',
      method: 'get',
      fn: emailCSV,
      middleware: []
    },
    {
      path: 'find',
      method: 'get',
      fn: list,
      middleware: [
        middleware.isAuthenticated,
        middleware.hasPermission('canViewResponses')
      ]
    },
    {
      path: 'byForm/:formId',
      method: 'get',
      fn: listByForm,
      middleware: [
        middleware.isAuthenticated,
        middleware.hasPermission('canViewResponses')
      ]
    },
    {
      path: 'quickSearch/:query/:formId',
      method: 'get',
      fn: quickSearch,
      middleware: [
        middleware.isAuthenticated,
        middleware.hasAnyPermission(['canViewResponses'])
      ]
    },
    {
      path: 'advancedSearch',
      method: 'post',
      fn: advancedSearch,
      middleware: [
        middleware.isAuthenticated,
        middleware.hasAnyPermission(['canViewResponses', 'canViewMyResponses'])
      ]
    },
    {
      path: 'advancedSearch/:page',
      method: 'post',
      fn: advancedSearch,
      middleware: [
        middleware.isAuthenticated,
        middleware.hasAnyPermission(['canViewResponses', 'canViewMyResponses'])
      ]
    },
    {
      path: 'advancedSearchToCSV',
      method: 'post',
      fn: advancedSearchToCSV,
      middleware: [
        middleware.isAuthenticated,
        middleware.hasAnyPermission(['canViewResponses', 'canViewMyResponses']),
        middleware.hasPermission('canExportResponses')
      ]
    },
    {
      path: 'downloadCSV/:token',
      method: 'get',
      fn: downloadCSV,
      middleware: []
    },
    {
      path: 'advancedSearchToUrl',
      method: 'get',
      fn: advancedSearchToUrl,
      middleware: [
        middleware.isAuthenticated,
        middleware.hasAnyPermission(['canViewResponses', 'canViewMyResponses']),
        middleware.hasPermission('canExportResponses')
      ]
    }
  ],
  view,
  viewCSV
}
