'use strict'

const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const middleware = require('../middleware')
const pushNotifications = require('../services/pushNotifications')
const simpleTimestamps = require('../services/mongoose-simpletimestamps').SimpleTimestamps

var schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: { type: String, required: true },
  password: { type: String, select: false, required: true },
  isTempPassword: { type: Boolean },
  isSetup: { type: Boolean, default: false },
  email: String,
  pushTokens: [String],
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  domain: { type: String, required: true },
  relationships: [{
    name: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }],
  version: Number,
  language: { type: String, default: 'en' }
}, {
  usePushEach: true
})

schema.plugin(simpleTimestamps)
schema.index({ domain: 1, username: 1 }, { unique: true })

schema.methods.generateJwt = function () {
  var expiry = new Date()
  expiry.setDate(expiry.getDate() + 730)

  console.log(expiry)

  var sigPayload = {
    _id: this._id,
    exp: parseInt(expiry.getTime() / 1000),
    permissions: this.company.effectivePermissions,
    groups: this.company.groupIds,
    company: this.company._id,
    domain: this.company.domain
  }

  return jwt.sign(sigPayload, process.env.JWT_SECRET || 'SETSECRET')
}

schema.methods.sendPush = function (message, title, badge) {
  return pushNotifications.sendPush(null, this.pushTokens, message, title, badge)
}

module.exports = {
  middleware: {
    find: [middleware.disabled],
    create: [middleware.disabled],
    update: [middleware.disabled],
    remove: [middleware.isAuthenticated, middleware.hasPermission('canRemoveUsers')],
    findById: [middleware.disabled],
    search: [middleware.disabled]
  },
  model: mongoose.model('User', schema),
  schema: schema
}
