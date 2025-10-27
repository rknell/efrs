/*
 This is a simple example of defining a model, simply define the schema and enter any middleware
 in the module.exports call
 */
'use strict'

const mongoose = require('mongoose')
const disabled = require('../middleware').disabled
const simpleTimestamps = require('../services/mongoose-simpletimestamps').SimpleTimestamps

const schema = new mongoose.Schema({
  recordId: { type: mongoose.Schema.Types.ObjectId, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  record: { type: mongoose.Schema.Types.Mixed, required: true },
  version: Number
}, {
  usePushEach: true
})

schema.plugin(simpleTimestamps)

module.exports = {
  middleware: {
    find: [disabled],
    create: [disabled],
    update: [disabled],
    remove: [disabled],
    findById: [disabled],
    search: [disabled]
  },
  model: mongoose.model('Versions', schema),
  schema: schema
}
