const Files = require('../models/Files').model
const Response = require('../models/Response').model
const errorHandler = require('../services/errorHandler')
const middleware = require('../middleware')
const AWS = require('aws-sdk')
const s3 = new AWS.S3()
const multer = require('multer')
const upload = multer({ dest: 'storage/' })
const fs = require('fs')

const BUCKET = process.env.BUCKET || 'efrs-resources'

async function saveFile (req, res) {
  const data = Buffer.from(req.body.data, 'base64')
  try {
    let newFile = new Files({ createdBy: req.payload._id, company: req.payload.company })
    newFile = await newFile.save()

    const key = `${req.payload.company}-${req.payload._id}-${newFile._id}.${req.body.extension || 'jpg'}`

    const result = await new Promise((resolve, reject) => {
      s3.putObject({
        ACL: 'public-read',
        Bucket: BUCKET,
        Key: key,
        Body: data,
        ContentType: 'image/jpeg'
      }, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
    const url = `https://efrs-resources.s3.amazonaws.com/${key}`
    res.json({ url })
    console.log(result, url)
  } catch (e) {
    errorHandler(res)(e)
  }
}

async function saveFileV2 (req, res) {
  console.log(req.file, req.headers)

  const formId = req.headers['form-id']
  const localUrl = req.headers['local-url']

  let newFile = new Files({ createdBy: req.payload._id, company: req.payload.company })
  newFile = await newFile.save()

  let mimeType = 'image/jpeg'
  let extension = 'jpg'

  if (req.file.mimetype === 'video/quicktime') {
    mimeType = 'video/quicktime'
    extension = 'mov'
  }

  const key = `${req.payload.company}-${req.payload._id}-${newFile._id}.${extension}`

  try {
    const result = await new Promise((resolve, reject) => {
      var bodyStream = fs.createReadStream(req.file.path)
      s3.putObject({
        ACL: 'public-read',
        Bucket: BUCKET,
        Key: key,
        Body: bodyStream,
        ContentType: mimeType
      }, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
    const url = `https://efrs-resources.s3.amazonaws.com/${key}`

    const response = await Response.findOne({ _id: formId })
    if (response) {
      Object.keys(response.responses).forEach(key => {
        let values = response.responses[key].values
        if (values && values.default && values.default.forEach) {
          values.default.forEach((value, index) => {
            if (value === localUrl) {
              response.responses[key].values.default[index] = url
              response.markModified('responses')
            }
          })
        }
      })
    }

    const fileIndex = response.files.findIndex(item => item === localUrl)
    if (fileIndex > -1) {
      response.files[fileIndex] = url
      response.markModified('files')
    }

    await response.save()

    console.log(response._id.toString())

    res.json({ url })
    console.log(result, url)
  } catch (e) {
    errorHandler(res)(e)
  }
}

module.exports = {
  routes: [
    {
      path: 'create',
      method: 'post',
      fn: saveFile,
      middleware: [middleware.isAuthenticated]
    }, {
      path: 'v2/upload',
      method: 'post',
      fn: saveFileV2,
      middleware: [middleware.isAuthenticated, upload.single('photo')]
    }
  ]
}
