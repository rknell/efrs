const Response = require('../models/Response').model
const moment = require('moment-timezone')
const errorHandler = require('../services/errorHandler')
const middleware = require('../middleware')
const Reporting = require('../models/Reporting').model
const _ = require('lodash')

function _getPeriod (interval, createdAt) {
  const days = moment.duration(moment().diff(moment(createdAt))).asDays()
  return Math.ceil(days / interval)
}

function getData (req) {
  const company = req.payload.company
  const formId = req.params.form
  const interval = Number(req.params.interval)
  const field = req.params.field

  let filter = {}
  if (req.params.filter) {
    const parsedFilter = JSON.parse(req.params.filter)
    Object.keys(parsedFilter).forEach(responseKey => {
      filter[`responses.${responseKey}.values.default`] = { $regex: parsedFilter[responseKey].values.default, $options: '/im' }
    })
  }

  return Response.find({
    ...filter, company, formId, createdAt: { $gte: moment().subtract(Number(interval) * 10, 'days') }
  })
    .select(`responses.${field}`)
    .select('createdAt')
}

function sum (req, res) {
  getData(req)
    .then(result => {
      const output = result.reduce((result, item) => {
        if (item.responses[Number(req.params.field)]) {
          const value = item.responses[Number(req.params.field)].values.default
          if (value && Number(value)) {
            const period = _getPeriod(Number(req.params.interval), item.createdAt)
            if (!result[period]) result[period] = { value: 0, responses: [] }
            result[period].value += Number(value)
            result[period].responses.push(item._id)
          }
        }
        return result
      }, {})
      res.json(output)
    })
    .catch(errorHandler(res))
}

function mean (req, res) {
  getData(req)
    .then(result => {
      const periodCount = {}
      const output = result.reduce((result, item) => {
        if (item.responses[Number(req.params.field)]) {
          const value = item.responses[Number(req.params.field)].values.default
          if (value && Number(value)) {
            const period = _getPeriod(Number(req.params.interval), item.createdAt)
            if (!result[period]) {
              result[period] = { value: 0, responses: [] }
              periodCount[period] = 0
            }

            result[period].value = (Number(value) + (result[period].value * periodCount[period])) / (periodCount[period] + 1)
            result[period].responses.push(item._id)
            periodCount[period]++
          }
        }
        return result
      }, {})
      res.json(output)
    })
    .catch(errorHandler(res))
}

function count (req, res) {
  getData(req)
    .then(result => {
      const periodCount = {}
      const output = result.reduce((result, item) => {
        if (item.responses[Number(req.params.field)]) {
          const values = item.responses[Number(req.params.field)].values.default.split(', ')
          values.forEach(value => {
            const period = _getPeriod(Number(req.params.interval), item.createdAt)
            if (!result[period]) {
              result[period] = {}
              periodCount[period] = 0
            }

            if (!result[period][value]) {
              result[period][value] = { value: 1, responses: [item._id] }
            } else {
              result[period][value].value++
              result[period][value].responses.push(item._id)
            }
          })
        }

        return result
      }, {})
      res.json(output)
    })
    .catch(errorHandler(res))
}

function filter (req, res) {
  getData(req)
    .then(result => {
      const periodCount = {}
      const output = result.reduce((result, item) => {
        const period = _getPeriod(Number(req.params.interval), item.createdAt)
        if (!result[period]) {
          result[period] = { value: 1, responses: [item._id] }
          periodCount[period] = 1
        } else {
          result[period].value++
          result[period].responses.push(item._id)
        }
        return result
      }, {})
      res.json(output)
    })
    .catch(errorHandler(res))
}

function create (req, res) {
  if (req.body._id) {
    Reporting.findOne({ _id: req.body._id })
      .then(report => {
        _.assign(report, req.body)
        report.company = req.payload.company
        return report.save()
      })
      .then(report => {
        res.json(report)
      })
      .catch(errorHandler(res))
  } else {
    const newReport = new Reporting({
      ...req.body,
      company: req.payload.company,
      users: [req.payload._id]
    })
    newReport.save()
      .then(report => {
        res.json(report)
      })
      .catch(errorHandler(res))
  }
}

function list (req, res) {
  Reporting.find({ users: req.payload._id, company: req.payload.company })
    .then(result => {
      res.json(result)
    })
    .catch(errorHandler(res))
}

module.exports = {
  routes: [
    {
      path: 'sum/:interval/:form/:field/:filter',
      method: 'get',
      fn: sum,
      middleware: [middleware.isAuthenticated]
    }, {
      path: 'mean/:interval/:form/:field/:filter',
      method: 'get',
      fn: mean,
      middleware: [middleware.isAuthenticated]
    }, {
      path: 'count/:interval/:form/:field/:filter',
      method: 'get',
      fn: count,
      middleware: [middleware.isAuthenticated]
    }, {
      path: 'filter/:interval/:form/:filter',
      method: 'get',
      fn: filter,
      middleware: [middleware.isAuthenticated]
    }, {
      path: 'create',
      method: 'post',
      fn: create,
      middleware: [middleware.isAuthenticated]
    }, {
      path: 'find',
      method: 'get',
      fn: list,
      middleware: [middleware.isAuthenticated]
    }
  ],
  sum,
  mean,
  count,
  filter
}
