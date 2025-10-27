/*
 This is a simple example of defining a model, simply define the schema and enter any middleware
 in the module.exports call
 */
'use strict'

const mongoose = require('mongoose')
const disabled = require('../middleware').disabled
const simpleTimestamps = require('../services/mongoose-simpletimestamps').SimpleTimestamps
const middleware = require('../middleware')
const ResponseSchema = require('./Response').schema

const schema = new mongoose.Schema({
  response: { type: ResponseSchema },
  rrule: { type: mongoose.Schema.Types.Mixed },
  isLastDay: { type: Boolean },
  assignToUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignToGroup: { type: mongoose.Schema.Types.ObjectId },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  startDateTime: { type: Date },
  lastRun: { type: Date },
  daysToComplete: { type: Number }
}, {
  usePushEach: true
})

schema.plugin(simpleTimestamps)

module.exports = {
  middleware: {
    find: [middleware.isAuthenticated],
    create: [middleware.isAuthenticated, middleware.hasPermission('canScheduleResponses')],
    update: [disabled],
    remove: [middleware.isAuthenticated, middleware.hasPermission('canScheduleResponses')],
    findById: [disabled],
    search: [disabled]
  },
  model: mongoose.model('ScheduledResponse', schema),
  schema: schema
}
