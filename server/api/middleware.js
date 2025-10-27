const jwt = require('express-jwt')

/* istanbul ignore next  */
if (!process.env.JWT_SECRET) console.warn('please set environment variable JWT_SECRET to something random.')

const jwtMiddleware = jwt({
  secret: process.env.JWT_SECRET || 'SETSECRET',
  userProperty: 'payload',
  getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'bearer') {
      return req.headers.authorization.split(' ')[1]
    } else if (req.query && req.query.apikey) {
      return req.query.apikey
    }
    return null
  }
})

const disabled = (req, res, next) => {
  res.status(404).json({ message: 'Route not found' })
}

const isAuthenticated = (req, res, next) => {
  jwtMiddleware(req, res, () => {
    if (req.payload) {
      next()
    } else {
      res.status(401).json({ message: 'You must be logged in to perform this action' })
    }
  })
}

const hasPermission = (name) => {
  return (req, res, next) => {
    jwtMiddleware(req, res, () => {
      if (req.payload && req.payload.permissions && req.payload.permissions[name]) {
        next()
      } else {
        res.status(403).json({ message: `You do not have permission to perform this action. Missing ${name}` })
      }
    })
  }
}

const hasAnyPermission = (arr) => {
  return (req, res, next) => {
    jwtMiddleware(req, res, () => {
      let alreadyMet = false
      arr.forEach(name => {
        if (req.payload && req.payload.permissions && req.payload.permissions[name] && !alreadyMet) {
          alreadyMet = true
          next()
        }
      })
      if (!alreadyMet) {
        res.status(403).json({ message: `You do not have permission to perform this action. Missing one of ${arr.join(', ')}` })
      }
    })
  }
}

module.exports = {
  jwt: jwtMiddleware,
  disabled,
  isAuthenticated,
  hasPermission,
  hasAnyPermission
}
