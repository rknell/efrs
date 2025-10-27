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
    const actions = []
    usersToImport = result.split('\n')

    usersToImport.forEach(user => {
      const fields = user.split(',')
      const group = currentUser.company.groups.find(group => group.name === fields[0])
      const userData = {
        firstName: fields[1],
        lastName: fields[2],
        username: fields[3],
        email: fields[3],
        groups: [group ? group._id : undefined]
      }
      actions.push(request({
        uri: 'http://localhost:1676/api/user',
        method: 'POST',
        body: userData,
        json: true,
        headers: {
          'Authorization': `bearer ${token}`
        }
      }))
    })

    return Promise.all(actions)
  })
  .catch(err => {
    console.error(err)
  })
