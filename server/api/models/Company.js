'use strict'

const mongoose = require('mongoose')
const middleware = require('../middleware')
const simpleTimestamps = require('../services/mongoose-simpletimestamps').SimpleTimestamps

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  domain: { type: String, required: true, unique: true },
  adminEmail: { type: String, select: false, required: true },
  plan: { type: String, required: true },
  groups: [{
    name: String,
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    permissions: {
      canAddUsers: { type: Boolean, default: false },
      canCreateGroups: { type: Boolean, default: false },
      canDeleteGroups: { type: Boolean, default: false },
      canRemoveUsers: { type: Boolean, default: false },
      canEditUsers: { type: Boolean, default: false },
      canViewUsers: { type: Boolean, default: false },
      canEditPlan: { type: Boolean, default: false },
      canViewPlan: { type: Boolean, default: false },
      canEditCompany: { type: Boolean, default: false },
      canViewResponses: { type: Boolean, default: false },
      canViewMyResponses: { type: Boolean, default: true },
      canCreateResponses: { type: Boolean, default: true },
      canRemoveResponses: { type: Boolean, default: false },
      canScheduleResponses: { type: Boolean, default: false },
      canEditResponses: { type: Boolean, default: false },
      canExportResponses: { type: Boolean, default: false },
      canCreateForms: { type: Boolean, default: false },
      canEditForms: { type: Boolean, default: false },
      canDeleteForms: { type: Boolean, default: false },
      canCreateReports: { type: Boolean, default: false }
    }
  }],
  styles: {
    primaryColour: String,
    secondaryColour: String,
    neutralColour: String,
    fullLogo: mongoose.Schema.Types.Mixed,
    secondaryLogo: mongoose.Schema.Types.Mixed,
    errorColour: String
  },
  credits: Number,
  outstandingLines: [{
    qty: Number,
    description: String,
    amount: Number
  }],
  billing: {
    billingName: String,
    billingEmail: String,
    billTo: String,
    shipTo: String,
    tax: { type: Number, default: 10 },
    purchaseOrder: String,
    notes: String
  },
  defaultLanguage: { type: String, default: 'en' },
  version: Number,
  timezone: { type: String, default: 'Australia/Brisbane' }
}, {
  usePushEach: true
})

schema.plugin(simpleTimestamps)

module.exports = {
  middleware: {
    find: [middleware.disabled],
    create: [middleware.disabled],
    update: [middleware.disabled],
    remove: [middleware.disabled],
    findById: [middleware.disabled],
    search: [middleware.disabled]
  },
  model: mongoose.model('Company', schema),
  schema: schema
}
