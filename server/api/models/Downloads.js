'use strict'

const mongoose = require('mongoose')
const ttl = require('mongoose-ttl')
const middleware = require('../middleware')
const simpleTimestamps = require('../services/mongoose-simpletimestamps').SimpleTimestamps

const schema = new mongoose.Schema({
  body: String,
  payload: String,
  params: String
}, {
  usePushEach: true
})

schema.plugin(simpleTimestamps)
schema.plugin(ttl, { ttl: '3h' })

module.exports = {
  middleware: {
    find: [middleware.disabled],
    create: [middleware.disabled],
    update: [middleware.disabled],
    remove: [middleware.disabled],
    findById: [middleware.disabled],
    search: []
  },
  model: mongoose.model('Downloads', schema),
  schema: schema
}
