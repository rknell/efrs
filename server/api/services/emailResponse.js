/* eslint-disable no-unused-expressions */
const url2pdf = require('url2pdf')
const libForm = require('../../../app/app/lib/form')
const renderHTML = require('../services/renderHTML')
const emailSvc = require('./email')
const q = require('q')
const Form = require('../models/Form').model
const User = require('../models/User').model

function send (response, email, options = {}, timezone = 'Australia/Brisbane') {
  let formId = response.formId
  if (response.formId && response.formId._id) {
    formId = response.formId
  }

  console.log('Emailing response', email)
  return q.all([
    url2pdf.renderPdf(`http://localhost:1676/api/response/view/${response._id}`, {
      saveDir: process.env.STORAGE_DIR
    }),
    Form.findOne({ _id: formId }),
    User.findOne({ _id: response.createdBy })
  ])
    .spread(async function (output, form, user) {
      response.createdBy = user
      libForm.hydrateValues(form, response)
      const emails = email.split(',')
      const html = await renderHTML.go(form, timezone)
      emails.forEach(email => {
        return emailSvc.send(html, options.subject || `${form.name} response`, 'admin@efrs.io', 'eFRS admin', email, {
          attachments: [output]
        })
      })
    })
    .catch(e => {
      console.error(e)
      throw e
    })
}

function emailToUserId (response, userId, timezone) {
  return User.findOne({ _id: userId })
    .then(user => {
      if (user) {
        return send(response, user.email, timezone)
      } else {
        throw new Error('Unable to email user, does not exist.')
      }
    })
}

function emailToRelationship (response, relationshipName, timezone) {
  return User.findOne({ _id: response.createdBy })
    .then(user => {
      if (!user) throw new Error('Created by user not found, they may have been deleted')
      const relationship = user.relationships.find(relationship => relationship.name === relationshipName)
      if (!relationship) throw new Error(`Relationship not found (${relationshipName})`)
      return emailToUserId(response, relationship.user, timezone)
    })
}

module.exports = {
  emailToUserId, send, emailToRelationship
}
