/*
 This is a simple example of defining a model, simply define the schema and enter any middleware
 in the module.exports call
 */
'use strict'

const mongoose = require('mongoose')
const disabled = require('../middleware').disabled
const simpleTimestamps = require('../services/mongoose-simpletimestamps').SimpleTimestamps
const middleware = require('../middleware')

const schema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true }
}, {
  usePushEach: true
})

schema.plugin(simpleTimestamps)

module.exports = {
  middleware: {
    find: [disabled],
    create: [middleware.isAuthenticated],
    update: [disabled],
    remove: [disabled],
    findById: [disabled],
    search: [disabled]
  },
  model: mongoose.model('Files', schema),
  schema: schema
}
