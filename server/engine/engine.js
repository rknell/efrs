// Load Dependencies
// -----------------
const express = require('./lib/express')
const mongoose = require('mongoose')
const loader = require('./lib/loader')
const mkdirp = require('mkdirp')
const path = require('path')

mongoose.set('debug', process.env.MONGOOSE_DEBUG)
/**
 * Initialise the engine.
 * ----------------------
 * Call this after setting the appropriate functions
 */
function init () {
  mongoose.connect(engine.config.dbUri, {
    useMongoClient: true
  })
  mongoose.Promise = require('q').Promise

  // Initialise the storage directory
  process.env.STORAGE_DIR = path.join(process.cwd(), process.env.STORAGE_DIR || './storage')
  mkdirp(process.env.STORAGE_DIR || './storage')

  return loader.loadApi()
    .then(function (router) {
      express.app.use(engine.config.apiPrefix, router)
      express.listen(engine.config.port)
    })
}

/**
 * The engine object.
 * ------------------
 * @type {{config: {port: (*|number), dbUri: *, apiPrefix: string}, version: string, express: (expressApp|exports|*), mongoose: (*|exports), init: init}}
 */
const engine = {
  config: {
    port: process.env.port || 8887,
    dbUri: process.env.DB_URI,
    apiPrefix: '/api'
  },
  version: '0.0.1',
  express: express,
  mongoose: mongoose,
  init: init
}

module.exports = engine
