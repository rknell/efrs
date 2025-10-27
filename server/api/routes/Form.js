'use strict'
const q = require('q')
const middleware = require('../middleware')
const errorHandler = require('../services/errorHandler')
const forms = require('../models/Form').model
const _ = require('lodash')

function getForms (req, res) {
  q.all([
    forms.find({
      $or: [
        { restrictedGroups: { $size: 0 } },
        { restrictedGroups: { $exists: false } }
      ],
      company: req.payload.company,
      isArchived: { $ne: true }
    }).lean(),
    forms.find({
      company: req.payload.company,
      restrictedGroups: { $in: req.payload.groups },
      isArchived: { $ne: true }
    }).lean()
  ])
    .spread((unrestricted, restricted) => {
      const output = _.concat(unrestricted, restricted)
      output.sort((a, b) => {
        if (a.name > b.name) {
          return 1
        } else {
          return -1
        }
      })
      res.json(output)
    })
    .catch(errorHandler(res))
}

async function archiveForm (req, res) {
  try {
    const form = await forms.findOne({ _id: req.params.id, company: req.payload.company })
    form.isArchived = true
    await form.save()
    res.json({ success: true })
  } catch (e) {
    errorHandler(res)()
  }
}

module.exports = {
  routes: [
    {
      path: 'find',
      method: 'get',
      fn: getForms,
      middleware: [middleware.isAuthenticated]
    }, {
      path: 'remove',
      method: 'get',
      fn: archiveForm,
      middleware: [middleware.isAuthenticated]
    }
  ]
}
