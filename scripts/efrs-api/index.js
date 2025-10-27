const Users = require('./Users')
const request = require('request-promise')

class API {
  constructor (username, password, domain) {
    this.username = username
    this.password = password
    this.domain = domain

    this.users = new Users(this)
  }

  authenticate () {
    if (!this.username || !this.password || !this.domain) {
      return Promise.reject(new Error('Missing credentials. Provide username, password and domain to the API constructor.'))
    }

    return request({
      uri: 'http://localhost:1676/api/user/login',
      method: 'POST',
      body: {
        username: this.username,
        domain: this.domain,
        password: this.password
      },
      json: true
    })
      .then(result => {
        this.token = result.token
      })
  }
}

module.exports = API
