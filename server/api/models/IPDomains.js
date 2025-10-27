'use strict'

const mongoose = require('mongoose')
const ttl = require('mongoose-ttl')
const middleware = require('../middleware')
const simpleTimestamps = require('../services/mongoose-simpletimestamps').SimpleTimestamps

const schema = new mongoose.Schema({
  userip: { type: String, index: true },
  domain: String
}, {
  usePushEach: true
})

schema.plugin(simpleTimestamps)
schema.plugin(ttl, { ttl: '1hr' })

module.exports = {
  middleware: {
    find: [middleware.disabled],
    create: [middleware.disabled],
    update: [middleware.disabled],
    remove: [middleware.disabled],
    findById: [middleware.disabled],
    search: []
  },
  model: mongoose.model('IPDomains', schema),
  schema: schema
}
