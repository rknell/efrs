/*
 This is a simple example of defining a model, simply define the schema and enter any middleware
 in the module.exports call
 */
'use strict'

const mongoose = require('mongoose')
const disabled = require('../middleware').disabled
const middleware = require('../middleware')
const simpleTimestamps = require('../services/mongoose-simpletimestamps').SimpleTimestamps
const Form = require('./Form').model
const emailResponse = require('../services/emailResponse')
const User = require('./User').model
const Company = require('./Company').model
const pushNotifications = require('../services/pushNotifications')

const schema = new mongoose.Schema({
  responses: {},
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  status: {
    assignedToUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    assignedToGroup: { type: mongoose.Schema.Types.ObjectId },
    name: String
  },
  formVersion: { type: Number },
  files: [{ type: String }],
  dateStarted: { type: String },
  version: Number,
  isIncomplete: { type: Boolean, default: false },
  timezone: { type: String, default: 'Australia/Brisbane' },
  csv: {
    formVersion: Number,
    data: String
  }
}, {
  usePushEach: true
})

// schema.index({ '$**': 'text' })
schema.plugin(simpleTimestamps)

schema.pre('save', function (next) {
  this.csv = {}
  next()
})

schema.post('save', doc => {
  if (!doc.skipHooks) {
    if (!this.isIncomplete) {
      Form.findOne({ _id: doc.formId })
        .then(form => {
          if (form.emailResponses) {
            emailResponse.send(doc, form.emailResponses, this.timezone)
          }

          if (form.emailToSupervisor) {
            emailResponse.emailToRelationship(doc, 'supervisor')
          }
        })
    }

    // eslint-disable-next-line no-inner-declarations
    function notifyUser (userId) {
      User.findOne({ _id: userId })
        .then(user => {
          if (user) {
            if (user.pushTokens.length) {
              user.pushTokens.forEach(token => {
                pushNotifications.sendPush(token, 'A new task has been assigned to you. Open eFRS for more information.', 'New Task')
              })
            }

            if (user.email) {
              emailResponse.send(doc, user.email, { subject: 'eFRS Form/task assigned to you for completion' })
            }
          }
        })
    }

    if (doc.status) {
      if (doc.status.assignedToUser) {
        notifyUser(doc.status.assignedToUser)
      }

      if (doc.status.assignedToGroup) {
        Company.findOne({ _id: doc.company })
          .then(company => {
            company.groups.forEach(group => {
              const groupId = group._id.toString()
              const assignedGroup = doc.status.assignedToGroup.toString()
              if (groupId === assignedGroup) {
                group.users.forEach(user => {
                  notifyUser(user)
                })
              }
            })
          })
      }
    }
  }
})

module.exports = {
  middleware: {
    find: [],
    create: [middleware.isAuthenticated],
    update: [middleware.isAuthenticated, middleware.hasPermission('canEditResponses')],
    remove: [disabled],
    findById: [disabled],
    search: [disabled]
  },
  model: mongoose.model('Response', schema),
  schema: schema
}
