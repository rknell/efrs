const fs = require('fs')
const request = require('request-promise')
const Promise = require('bluebird')

const readFile = Promise.promisify(fs.readFile)

let token, currentUser, usersToImport

const {
  EFRS_ADMIN_USERNAME,
  EFRS_ADMIN_PASSWORD,
  EFRS_ADMIN_DOMAIN
} = process.env

if (!EFRS_ADMIN_USERNAME || !EFRS_ADMIN_PASSWORD || !EFRS_ADMIN_DOMAIN) {
  throw new Error('Missing credentials. Set EFRS_ADMIN_USERNAME, EFRS_ADMIN_PASSWORD and EFRS_ADMIN_DOMAIN environment variables.')
}

request({
  uri: 'http://localhost:1676/api/user/login',
  method: 'POST',
  body: {
    username: EFRS_ADMIN_USERNAME,
    domain: EFRS_ADMIN_DOMAIN,
    password: EFRS_ADMIN_PASSWORD
  },
  json: true
})
  .then(result => {
    token = result.token
    return request({
      uri: 'http://localhost:1676/api/user/current',
      headers: {
        'Authorization': `bearer ${token}`
      },
      json: true
    })
  })
  .then(_currentUser => {
    currentUser = _currentUser
    return request({
      uri: 'http://localhost:1676/api/user/listGroups',
      headers: {
        'Authorization': `bearer ${token}`
      },
      json: true
    })
  })
  .then(groups => {
    currentUser.company.groups = groups
    return Promise.resolve()
  })
  .then(() => readFile('importdata.csv', 'utf8'))
  .then(result => {
    usersToImport = result.split('\n')

    return request({
      uri: 'http://localhost:1676/api/user',
      headers: {
        'Authorization': `bearer ${token}`
      },
      json: true
    })
  })
  .then(users => {
    return Promise.map(usersToImport, userToImport => {
      const fields = userToImport.split(',')
      const username = fields[3]
      const dbUser = users.find(user => user.username.toLowerCase() === username.toLowerCase())
      if (dbUser) {
        const group = currentUser.company.groups.find(group => group.name === fields[0])
        if (!group) {
          console.warn('group not found', fields[0])
        } else {
          dbUser.groups = [group._id]
        }
        const supervisor = dbUser.relationships.find(relationship => relationship.name === 'supervisor')
        if (supervisor) {
          const supervisorUser = users.find(user => user._id === supervisor.user)
          if (supervisorUser.username !== fields[3]) {
            supervisor.user = users.find(user => user.username.toLowerCase() === fields[4].toLowerCase())._id
            return saveUser(dbUser)
          }
        } else {
          const newSupervisor = users.find(user => user.username.toLowerCase() === fields[4].toLowerCase())

          if (newSupervisor) {
            dbUser.relationships.push({
              name: 'supervisor',
              user: newSupervisor._id
            })
          } else {
            console.warn('User\'s supervisor not found', userToImport)
          }
          return saveUser(dbUser)
        }
      } else {
        console.warn('db user not found', userToImport)
        return Promise.resolve(null)
      }
    }, { concurrency: 1 })
  })
  .catch(err => {
    console.error(err)
  })

function saveUser (user) {
  return request({
    uri: 'http://localhost:1676/api/user',
    method: 'POST',
    headers: {
      'Authorization': `bearer ${token}`
    },
    json: true,
    body: user
  })
}
