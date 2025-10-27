'use strict'
const User = require('../models/User').model
const Company = require('../models/Company').model
const IPDomains = require('../models/IPDomains').model
const bCrypt = require('bcrypt')
const _ = require('lodash')
const middleware = require('../middleware')
const errorHandler = require('../services/errorHandler')
const emailSvc = require('../services/email')
const ObjectId = require('mongodb').ObjectID
const ServerError = require('../classes/ServerError')

const newIPDomain = new IPDomains()
newIPDomain.ip = 'testcreate'
newIPDomain.domain = 'example.com.au'
newIPDomain.save()

function login (req, res) {
  if (process.env.DEBUG_USER) console.log(JSON.stringify(req.body.username), JSON.stringify(req.body.password))

  User
    .findOne({ username: req.body.username, domain: req.body.domain })
    .select('+password')
    .populate('company')
    .exec()
    .then(function (doc) {
      if (doc) {
        bCrypt.compare(req.body.password, doc.password, function (err, match) {
          if (err) {
            res.status(500).json(err)
          } else if (match) {
            try {
              populatePermissions(doc)
              res.json({
                'token': doc.generateJwt()
              })
            } catch (e) {
              console.log('Invalid user', JSON.stringify(req.body.username))
              res.status(400).json({ message: 'Invalid user' })
            }
          } else {
            console.log('Invalid password', JSON.stringify(req.body.username))
            res.status(400).json({ message: 'Invalid Password. The user was found, but the password is incorrect. Check the password and try again.', type: 'INVALID_PASSWORD' })
          }
        })

        savePush(doc, req.headers['push-token'])
        doc.save()
      } else {
        res.status(404).json({ message: 'User not found.\n Check the username.\n This is NOT an error with the password.', type: 'USER_NOT_FOUND' })
      }
    })
    .catch(errorHandler(res))
}

function create (req, res) {
  const data = req.body

  data.domain = req.payload.domain
  let outputPayload
  if (data._id) {
    // Update
    update(req, res)
  } else {
    _create(data, req.payload.company)
      .then(result => {
        outputPayload = JSON.parse(JSON.stringify(result))
        return _getUserGroups(outputPayload._id, outputPayload.company)
      })
      .then(groups => {
        outputPayload.groups = groups
        res.json(outputPayload)
      })
      .catch(err => {
        if (err.message.indexOf('E11000') > -1) {
          res.status(400).json({ message: 'Duplicate account information. You may already have an account.' })
        } else {
          errorHandler(res)(err)
        }
      })
  }
}

function _create (userData, companyId) {
  let user

  const newItem = new User(userData)
  newItem.username = newItem.username.toLowerCase()
  newItem.password = 'temppass' // temporary as we will generate a random one in the next step
  newItem.company = companyId
  return newItem.save()
    .then(_user => {
      user = _user
      if (!user.email) throw new ServerError('Email is required to send temp password', 400)
      return resetPasswordAndNotify(userData.domain, user.username)
    })
    .then(() => {
      if (userData.groups) {
        return _setUserGroups(user._id, companyId, userData.groups)
          .then(() => Promise.resolve(user))
      } else {
        return Promise.resolve(user)
      }
    })
}

function _setUserGroups (userId, companyId, groups) {
  return Company.findOne({ _id: companyId })
    .then(company => {
      if (company) {
        // Remove the user from every group
        company.groups.forEach(group => {
          const userIndex = group.users.findIndex(groupUser => groupUser.toString() === userId.toString())
          if (userIndex > -1) {
            group.users.splice(userIndex, 1)
          }
        })

        // Add the user back into each group
        groups.forEach(userGroup => {
          const group = company.groups.find(group => group._id.toString() === userGroup.toString())
          if (group) group.users.push(userId)
        })
        return company.save().then(() => Promise.resolve()) // Resolving empty to keep the api consistent
      } else {
        throw new Error('Company does not exist')
      }
    })
}

function _getUserGroups (userId, companyId) {
  return Company.findOne({ _id: companyId })
    .then(company => {
      return company.groups.filter(group => {
        const userIndex = group.users.findIndex(groupUser => groupUser.toString() === userId.toString())
        return userIndex > -1
      }).map(group => group._id)
    })
}

// TODO: There is a potential problem here with async. Don't know how it was missed earlier
function hashPromise (data) {
  return new Promise((resolve, reject) => {
    bCrypt.hash(data, 8, function (err, hash) {
      if (err) {
        reject(err)
      } else {
        resolve(hash)
      }
    })
  })
}

function update (req, res) {
  const data = req.body
  let user, responseBody

  User.findOne({ _id: data._id, company: req.payload.company })
    .select('-password')
    .exec()
    .then(function (doc) {
      delete data._id
      delete data.__v
      if (!data.password) delete data.password
      data.company = req.payload.company // Reset company with payload to stop users changing and gaining access to another organisation
      data.domain = req.payload.domain
      _.merge(doc, data)
      if (doc.email) {
        doc.email = doc.email.toLowerCase()
      }
      doc.username = doc.username.toLowerCase()
      savePush(doc, req.headers['push-token'])
      return doc.save()
    })
    .then(function (doc) {
      if (data.password) {
        return hashPromise(data.password)
          .then(function (hash) {
            doc.password = hash
            return doc.save()
          })
      } else {
        return Promise.resolve(doc)
      }
    })
    .then(_user => {
      user = _user
      if (data.groups) {
        return _setUserGroups(user._id, req.payload.company, data.groups)
          .then(() => _getUserGroups(user._id, req.payload.company))
      } else {
        return _getUserGroups(user._id, req.payload.company)
      }
    })
    .then(groups => {
      responseBody = JSON.parse(JSON.stringify(user))
      delete responseBody.password
      responseBody.groups = groups
      res.json(responseBody)
    })
    .catch(errorHandler(res))
}

function current (req, res) {
  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      'message': 'Not logged in'
    })
  } else {
    // Otherwise continue
    User.findOne({ _id: ObjectId(req.payload._id) })
      .select('-password')
      .populate('company')
      .then(function (doc) {
        if (!doc) {
          res.status(401).json({ message: 'Unable to find account. It may be disabled or deleted' })
        } else {
          const copiedDoc = JSON.parse(JSON.stringify(doc))
          populatePermissions(doc)
          populatePermissions(copiedDoc)
          copiedDoc.token = doc.generateJwt()
          res.json(copiedDoc)
          savePush(doc, req.headers['push-token'])
          doc.save().then(function () {
            console.log('Saved push')
          }).catch(err => {
            console.error('Error saving push', err)
          })
        }
      })
      .catch(errorHandler(res))
  }
}

function populatePermissions (doc) {
  if (doc && doc.company) {
    const userGroups = []
    const effectivePermissions = {}
    doc.company.groups.forEach(group => {
      group.users.forEach((user, index) => {
        if (user.toString() === doc._id.toString()) {
          userGroups.push(group)
        }
      })
      delete group.users
    })
    userGroups.forEach(group => {
      Object.keys(group.permissions).forEach(key => {
        if (group.permissions[key]) {
          effectivePermissions[key] = true
        }
      })
    })
    doc.company.groups = userGroups
    doc.company.groupIds = userGroups.map(item => item._id)
    doc.company.effectivePermissions = effectivePermissions
  } else {
    console.warn('No doc specified for populate')
    console.trace()
  }
}

function savePush (doc, pushToken) {
  const existingPushToken = doc.pushTokens.find(token => token === pushToken)

  if (!existingPushToken && !!pushToken) {
    doc.pushTokens.push(pushToken)
  }
}

function listGroups (req, res) {
  Company.findOne({ _id: req.payload.company })
    .populate('groups.users', '-groups.users.company')
    .then(company => {
      res.json(company.groups)
    })
    .catch(errorHandler(res))
}

function listUsers (req, res) {
  if (!req.payload) {
    return res.status(401).json({ message: 'Not authenticated' })
  } else {
    Promise.all([
      User.find({ company: req.payload.company }).lean(),
      Company.findOne({ _id: req.payload.company }).lean()
    ])
      .then(result => {
        const users = result[0]
        const company = result[1]
        users.forEach(user => {
          user.groups = []
          company.groups.forEach(group => {
            const groupuser = group.users.find(groupUser => user._id.toString() === groupUser.toString())
            if (groupuser) user.groups.push(group._id)
          })
        })
        res.json(users)
      })
      .catch(errorHandler(res))
  }
}

function _generatePassword () {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
  const length = 6
  let output = ''
  for (let i = 0; i < length; i++) {
    output += chars[_randomIntFromInterval(0, chars.length - 1)]
  }
  return output
}

function _randomIntFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function resetPasswordAndNotify (domain, username) {
  let company, hash
  const password = _generatePassword()

  return Promise.all([
    Company.findOne({ domain }),
    hashPromise(password)
  ])
    .then(result => {
      company = result[0]
      hash = result[1]
      if (!company) {
        throw new ServerError('Company does not exist', 400)
      } else {
        return User.findOne({ username, company: company._id })
      }
    })
    .then(user => {
      if (!user) throw new ServerError('User does not exist', 400)
      user.password = hash
      user.isTempPassword = true
      return user.save()
    })
    .then(user => {
      return emailSvc.sendTemplate('invitation', {
        company,
        credentials: {
          username: user.username,
          password: password
        }
      }, 'eFRS app install invitation', 'sales@efrs.io', 'eFRS admin', user.email)
    })
}

function sendInvitation (req, res) {
  const domain = req.params.domain
  const username = req.params.username

  resetPasswordAndNotify(domain, username)
    .then(() => {
      res.json({ success: true })
    })
    .catch(errorHandler(res))
}

function assumedDomain (req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  const query = { userip: ip }
  IPDomains.findOne(query)
    .sort({ createdAt: -1 })
    .then(result => {
      if (result) {
        res.json({ domain: result.domain })
      } else {
        res.json({ message: 'Unable to complete auto setup. Please check your invitation email for your domain' })
      }
    })
    .catch(errorHandler(res))
}

module.exports = {
  routes: [
    {
      path: 'login',
      method: 'post',
      fn: login,
      middleware: []
    },
    {
      path: 'create',
      method: 'post',
      fn: create,
      middleware: [middleware.isAuthenticated]
    },
    {
      path: 'update',
      method: 'put',
      fn: update,
      middleware: [middleware.isAuthenticated]
    },
    {
      path: 'current',
      method: 'get',
      fn: current,
      middleware: [middleware.isAuthenticated]
    },
    {
      path: 'listUsers',
      method: 'get',
      fn: listUsers,
      middleware: [middleware.isAuthenticated]
    }, {
      path: 'find', // alias for listUsers
      method: 'get',
      fn: listUsers,
      middleware: [middleware.isAuthenticated]
    },
    {
      path: 'listGroups',
      method: 'get',
      fn: listGroups,
      middleware: [middleware.isAuthenticated]
    },
    {
      path: 'invite/:domain/:username',
      method: 'get',
      fn: sendInvitation,
      middleware: []
    }, {
      path: 'assumedDomain',
      method: 'get',
      fn: assumedDomain,
      middleware: []
    }
  ],
  create,
  login,
  current,
  update,
  listUsers,
  listGroups,
  sendInvitation,
  _generatePassword,
  assumedDomain,
  resetPasswordAndNotify
}
