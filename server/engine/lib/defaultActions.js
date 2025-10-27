/* eslint-disable new-cap */
const ObjectId = require('mongoose').Types.ObjectId
const q = require('q')
const _ = require('lodash')
const tracer = require('tracer').colorConsole()
const Versions = require('../../api/models/Versions').model

/**
 * Default find all function
 * @param req
 * @param res
 * @param model
 */
function findAll (req, res, model) {
  var query = model.find({ ...req.body, company: req.payload.company })
  var queryCount = model.find(req.body).count()

  if (!req.query) req.query = {}

  if (req.query.select) {
    query.select(req.query.select)
  } else {
    query.select('-versions.data')
  }

  if (req.query.sort) {
    query.sort(req.query.sort)
  }

  if (req.query.page) {
    var pageLength = 25
    if (req.query.pageLength) {
      pageLength = req.query.pageLength
    }
    query.skip((Number(req.query.page) - 1) * pageLength)
    query.limit(req.query.pageLength)
  } else {
    query.limit(25)
  }

  q.all([query.exec(), queryCount])
    .spread(function (data, count) {
      res.json({
        count: count,
        data: data
      })
    })
    .catch(function (err) {
      res.status(500).json(err)
    })
}

/**
 * Default search function
 * @param req
 * @param res
 * @param model
 */
function search (req, res, model) {
  const query = model.find({ ...req.body, company: req.payload.company })
  const queryCount = model.find(req.body).count()

  if (!req.query) req.query = {}

  if (req.query.select) {
    query.select(req.query.select)
  }

  if (req.query.sort) {
    query.sort(req.query.sort)
  }

  if (req.query.page) {
    let pageLength = 25
    if (req.query.pageLength) {
      pageLength = req.query.pageLength
    }
    query.skip((Number(req.query.page) - 1) * pageLength)
    query.limit(req.query.pageLength)
  } else {
    query.limit(25)
  }

  q.all([query.exec(), queryCount])
    .spread(function (data, count) {
      res.json({
        count: count,
        data: data
      })
    })
    .catch(function (err) {
      tracer.error(err.stack)
      res.status(500).json(err)
    })
}

/**
 * Default findById function
 * @param req
 * @param res
 * @param model
 */
function findById (req, res, model) {
  var query = model.findOne({ _id: new ObjectId(req.params.id), company: req.payload.company })

  if (!req.query) req.query = {}

  if (req.query.select) {
    query.select(req.query.select)
  }

  if (req.query.sort) {
    query.sort(req.query.sort)
  }

  query.exec(function (err, doc) {
    if (!doc) {
      res.status(404).json({ message: 'Record not found' })
    } else if (err) {
      res.status(500).json(err)
    } else {
      res.json(doc)
    }
  })
}

/**
 * Default create function
 * @param req
 * @param res
 * @param model
 */
function create (req, res, model, options) {
  var data = req.body
  if (data._id && (!options || !options.passback)) {
    // Update
    update(req, res, model)
  } else {
    // Create

    if (!req.payload) req.payload = {}

    var newItem = new model(data)
    newItem.company = req.payload.company
    newItem.createdBy = req.payload._id
    newItem.version = 1
    newItem.timezone = req.headers['x-timezone']

    newItem.save()
      .then(function (doc) {
        res.json(doc)
        const newVersion = new Versions({
          recordId: doc._id,
          createdBy: req.payload._id,
          company: req.payload._id,
          record: doc,
          version: 1
        })
        return newVersion.save()
      })
      .catch(function (err) {
        tracer.error(err.stack)
        console.error(JSON.stringify(err, null, 2))

        if (err && err.name === 'ValidationError') {
          res.status(400).json(err)
        } else {
          res.status(500).json(err)
        }
      })
  }
}

/**
 * Default update function
 * @param req
 * @param res
 * @param model
 */
async function update (req, res, model) {
  try {
    const data = req.body
    delete data.__v // remove the mongoose version so you can send a second request down the line.

    if (!req.payload) req.payload = {}

    const id = new ObjectId(data._id)

    let doc = await model.findOne({ _id: id }).exec()
    if (!doc) {
      // Doc does not exist, pass it back to create
      // This is likely due to creating the id client side
      create(req, res, model, { passback: true })
      return
    }

    _.extend(doc, data)
    if (!doc.createdBy) doc.createdBy = req.payload._id
    doc.company = req.payload.company
    const versionNumber = await Versions.count({ recordId: doc._id }) + 1
    doc.version = versionNumber
    doc = await doc.save()
    const newVersion = new Versions({
      recordId: doc._id,
      createdBy: req.payload._id,
      company: req.payload._id,
      record: doc,
      version: versionNumber
    })
    await newVersion.save()

    res.json(doc)
  } catch (err) {
    tracer.error(err.stack)
    res.status(500).json(err)
  }
}

/**
 * Default delete/remove function
 * @param req
 * @param res
 * @param model
 */
function remove (req, res, model) {
  var id = new ObjectId(req.params.id)
  var query = { _id: id, company: req.payload.company }
  model.findOneAndRemove(query, function (err, doc) {
    if (err) {
      console.error(err)
      res.status(500).json({ message: 'An unknown server error occurred' })
    } else if (!doc) {
      res.status(404).json({ message: 'Delete failed, record not found' })
    } else {
      res.json(doc)
    }
  })
}

module.exports = {
  findAll: findAll,
  findById: findById,
  search: search,
  create: create,
  update: update,
  remove: remove
}
