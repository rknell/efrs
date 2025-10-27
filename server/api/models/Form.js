/*
 This is a simple example of defining a model, simply define the schema and enter any middleware
 in the module.exports call
 */
'use strict'

const mongoose = require('mongoose')
const disabled = require('../middleware').disabled
const simpleTimestamps = require('../services/mongoose-simpletimestamps').SimpleTimestamps
const middleware = require('../middleware')

var schema = new mongoose.Schema({
  name: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  dateStarted: Date,
  lastFieldId: { type: Number, default: 0 },
  restrictedGroups: [String],
  emailResponses: String,
  emailToSupervisor: { type: Boolean, default: false },
  headerImageURL: String,
  pages: [
    {
      name: String,
      viewGroups: [String],
      editGroups: [String],
      groups: [
        {
          name: String,
          fields: [{
            fieldId: String,
            fieldType: String,
            values: {},
            settings: [{
              value: mongoose.Schema.Types.Mixed,
              label: String,
              fieldType: String,
              extraProps: {}
            }],
            rules: [{
              operator: String,
              action: {
                setting: String,
                value: mongoose.Schema.Types.Mixed
              },
              conditions: [{
                value: mongoose.Schema.Types.Mixed,
                field: String,
                operator: String
              }]
            }],
            fields: [{
              fieldId: String,
              fieldType: String,
              values: {},
              settings: [{
                value: mongoose.Schema.Types.Mixed,
                label: String,
                fieldType: String,
                extraProps: {}
              }],
              rules: [{
                operator: String,
                action: String,
                conditions: [{
                  value: String,
                  field: String,
                  operator: String
                }]
              }]
            }]
          }]
        }
      ]
    }
  ],
  isArchived: { type: Boolean, default: false },
  version: Number
}, {
  usePushEach: true
})

schema.plugin(simpleTimestamps)

module.exports = {
  middleware: {
    find: [disabled],
    create: [middleware.isAuthenticated],
    update: [disabled],
    remove: [disabled],
    findById: [disabled],
    search: [disabled]
  },
  model: mongoose.model('Form', schema),
  schema: schema
}
