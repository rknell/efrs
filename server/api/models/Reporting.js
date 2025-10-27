'use strict'

const mongoose = require('mongoose')
const middleware = require('../middleware')
const simpleTimestamps = require('../services/mongoose-simpletimestamps').SimpleTimestamps

const schema = new mongoose.Schema({
  name: { type: String, default: '' },
  items: [{
    title: { type: String, default: '' },
    reportType: { type: String, default: '' },
    form: { type: String, default: '' },
    filter: { type: String, default: '' },
    interval: { type: Number, default: 0 },
    field: { type: Number, default: 0 }
  }],
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, {
  usePushEach: true
})

schema.plugin(simpleTimestamps)

module.exports = {
  middleware: {
    find: [middleware.disabled],
    create: [middleware.disabled],
    update: [middleware.disabled],
    remove: [middleware.isAuthenticated],
    findById: [middleware.disabled],
    search: [middleware.disabled]
  },
  model: mongoose.model('Reporting', schema),
  schema: schema
}
