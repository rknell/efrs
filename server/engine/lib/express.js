/* eslint-disable no-global-assign */
/**
 * This is just essentially the output you get when you generate an express app using the CLI tool
 *
 * It has been modified a little to work with the system - most notably breaking down the workflow into two functions
 * so other routes can be injected.
 */

// Express Dependencies
// --------------------
const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const compression = require('compression')
const tracer = require('tracer').colorConsole()
const lzString = require('lz-string')
const http = require('http')
require('rainbow-console')

// Initialise express
// ------------------
const app = express()
// io = require('socket.io')(http)
host = null

// Setup default middleware
// ------------------------

app.use((req, res, next) => {
  host = req.protocol + '://' + req.get('host')
  next()
})
app.use(compression({ threshold: 500 }))
app.use('/', express.static(path.join(__dirname, '..', '..', 'public')))
app.use(logger('dev'))

app.use((req, res, next) => {
  req.host = req.protocol + '://' + req.get('host')
  next()
})

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  // let compressedLength, uncompressedLength
  if (req.headers['x-request-encoding'] === 'lzstring' && req.body.body) {
    // compressedLength = req.body.body.length
    req.body = JSON.parse(lzString.decompressFromBase64(req.body.body))
    // uncompressedLength = JSON.stringify(req.body).length
    // console.log('Compression saving', ((1 - (compressedLength / uncompressedLength)) * 100).toFixed(0), '%')
  }
  next()
})
app.use(cookieParser())
app.use(helmet())
app.use(cors({
  credentials: true
}))

// var multer = require('multer')
//
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     var output = path.join(process.env.STORAGE_DIR, 'uploadedFiles')
//     mkdirp(output)
//     cb(null, output)
//   },
//   filename: function (req, file, cb) {
//     crypto.pseudoRandomBytes(16, function (err, raw) {
//       if (err) cb(err)
//       cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype))
//     })
//   }
// })
// var upload = multer({ storage: storage })
// app.use(upload.any())

// Expose moment for use in jade templates
app.locals.moment = require('moment')

app.use((req, res, next) => {
  if (req.headers['x-build'] && Number(req.headers['x-build']) < 1030000) {
    res.status(400).json({ message: 'App is out of date, please update to continue' })
  } else {
    next()
  }
})

/**
 * This function is called after the rest of the loader functions have been initialised
 * It is very important to ensure that all express routes have been loaded before calling this function
 * @param port
 * @param dontListen - Used for testing with supertest
 */
function listen (port, dontListen, production) {
  // Setup the view engine
  // ---------------------
  var viewPath = path.join(__dirname, '..', '..', 'views')
  app.set('views', viewPath)
  app.set('view engine', 'pug')

  // Setup the path to the static files
  // ----------------------------------
  app.use('/public', express.static(path.join(__dirname, '..', '..', 'public')))
  // app.use("/app", express.static(path.join(__dirname, "..", "..", "app", "www")));

  // Fallover to a 404 if no other routes are matched
  // ------------------------------------------------
  app.use(function (req, res, next) {
    var err = {
      status: 404,
      message: '404 - Route Not Found'
    }
    next(err)
  })

  // Error Handlers
  // --------------
  // Development error handler.
  // Will print a stacktrace
  app.use(function (err, req, res, next) {
    if (!err.status) {
      err.status = 500
    }

    if (!err.message) {
      err.message = null
    }

    tracer.error(err, req.originalUrl, err.stack)

    if (err.name === 'UnauthorizedError') {
      res.status(401)
      res.json({ 'message': err.name + ': ' + err.message })
    } else {
      res.status(err.status)
      var errOutput = {
        message: err.message,
        stack: err.stack
      }
      res.json(errOutput)
    }
  })

  const httpServer = http.createServer(app)
  httpServer.listen(process.env.PORT || port, () => console.log('HTTP server running on port ' + (process.env.PORT || port)))
}

var expressApp = {
  app: app,
  listen: listen
}

module.exports = expressApp
