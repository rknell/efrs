const ScheduledResponses = require('../models/ScheduledResponse').model
const Responses = require('../models/Response').model
const errorHandler = require('../services/errorHandler')
const RRule = require('rrule').RRule
const moment = require('moment')

async function process (req, res) {
  try {
    const responses = await ScheduledResponses.find({})
    for (let response of responses) {
      const rrule = new RRule({
        ...response.rrule,
        dtstart: moment(response.startDateTime).subtract(5, 'months').toDate()
      })
      const scheduledRuns = rrule.between(moment(response.lastRun || response.startDateTime).toDate(), new Date())

      if (scheduledRuns.length) {
        const newResponseData = JSON.parse(JSON.stringify(response.response))
        delete newResponseData._id
        delete newResponseData.createdAt
        delete newResponseData.createdBy
        delete newResponseData.updatedAt
        delete newResponseData.dateStarted
        newResponseData.company = response.company
        newResponseData.isIncomplete = true

        // Create scheduled response
        const newResponse = new Responses(newResponseData)
        if (response.assignToUser) {
          newResponse.status.assignedToUser = response.assignToUser
        } else if (response.assignToGroup) {
          newResponse.status.assignedToGroup = response.assignToGroup
        } else {
          console.error('Scheduled response not assigned', response._id)
        }
        response.lastRun = new Date()
        await newResponse.save()
        await response.save()
      }
    }
    res.json({ success: true })
  } catch (e) {
    errorHandler(res)(e)
  }
}

module.exports = {
  routes: [
    {
      path: 'process',
      method: 'get',
      fn: process,
      middleware: []
    }
  ]
}
