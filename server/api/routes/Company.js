'use strict'
const middleware = require('../middleware')
const errorHandler = require('../services/errorHandler')
const company = require('../services/company')
const Company = require('../models/Company').model
const ServerError = require('../classes/ServerError')

function create (req, res) {
  company
    .create(req.body)
    .then((result) => res.json(result))
    .catch(errorHandler(res))
}

function saveGroup (req, res) {
  Company.findOne({ _id: req.payload.company })
    .then(company => {
      let foundGroup = false
      if (req.body._id) {
        company.groups.forEach((group, index) => {
          if (group._id.toString() === req.body._id.toString()) {
            foundGroup = true
            company.groups[index] = req.body
          }
        })
      }
      if (!foundGroup) {
        company.groups.push(req.body)
      }
      company.save()
    })
    .then(company => {
      res.json({ success: true })
    }).catch(errorHandler(res))
}

function deleteGroup (req, res) {
  Company.findOne({ _id: req.payload.company })
    .then(company => {
      let foundGroup = false
      company.groups.forEach((group, index) => {
        if (group._id.toString() === req.params.id.toString()) {
          company.groups.splice(index, 1)
          foundGroup = true
        }
      })
      if (foundGroup) {
        return company.save()
      } else {
        throw new ServerError('Invalid group id', 400)
      }
    })
    .then(company => {
      res.json({ success: true })
    }).catch(errorHandler(res))
}

function getStyles (req, res) {
  Company.findOne({ domain: req.params.domain })
    .then(company => {
      if (!company) {
        throw new ServerError('Company not found. Please check the spelling and try again.', 400)
      }
      res.json(company.styles || {})
    })
    .catch(errorHandler(res))
}

function fullLogo (req, res) {
  Company.findOne({ domain: req.params.domain })
    .select('styles.fullLogo')
    .then(company => {
      if (company && company.styles && company.styles.fullLogo) {
        const imgB64 = company.styles.fullLogo.uri
        const img = Buffer.from(imgB64.substr(imgB64.indexOf(',')), 'base64')
        return res.set({
          'Content-Type': 'image/png',
          'Content-Length': img.length
        }).status(200).end(img)
      } else {
        res.redirect('https://www.efrs.io/images/logo-sml.png')
      }
    })
    .catch(errorHandler(res))
}

module.exports = {
  routes: [
    {
      path: 'create',
      method: 'post',
      fn: create,
      middleware: []
    },
    {
      path: 'group',
      method: 'post',
      fn: saveGroup,
      middleware: [
        middleware.isAuthenticated,
        middleware.hasPermission('canCreateGroups')
      ]
    },
    {
      path: 'group/:id',
      method: 'delete',
      fn: deleteGroup,
      middleware: [
        middleware.isAuthenticated,
        middleware.hasPermission('canDeleteGroups')
      ]
    }, {
      path: 'styles/:domain',
      method: 'get',
      fn: getStyles,
      middleware: []
    }, {
      path: ':domain/fullLogo.png',
      method: 'get',
      fn: fullLogo,
      middleware: []
    }
  ],
  fullLogo
}
