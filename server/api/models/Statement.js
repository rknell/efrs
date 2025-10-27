/*
 This is a simple example of defining a model, simply define the schema and enter any middleware
 in the module.exports call
 */
'use strict'

const mongoose = require('mongoose')
const disabled = require('../middleware').disabled
const simpleTimestamps = require('../services/mongoose-simpletimestamps').SimpleTimestamps

const schema = new mongoose.Schema({
  invoiceNo: String,
  month: String,
  year: String,
  lines: [{
    qty: Number,
    description: String,
    amount: Number
  }],
  tax: Number,
  balance: Number,
  taxRate: Number,
  outstanding: Number,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  logs: [{ type: mongoose.Schema.Types.Mixed }]
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
  model: mongoose.model('Statement', schema),
  schema: schema
}
