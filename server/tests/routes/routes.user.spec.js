/* eslint-disable no-unused-expressions */
'use strict'
const user = require('../../api/routes/User')
const expect = require('chai').expect
const http = require('../mocks/http')
const jwt = require('express-jwt')
const jsonwebtoken = require('jsonwebtoken')
const jwtDecode = require('../../../app/node_modules/jwt-decode')

const jwtMiddleware = jwt({
  secret: 'SETSECRET',
  userProperty: 'payload'
})

const testData = {}

describe('routes.user', () => {
  it('should login', (done) => {
    const req = http.req({
      username: 'user1@example.com',
      password: 'testpass',
      domain: 'example.com'
    })
    const res = http.res()

    res.when('status').then(done)
    res.when('json')
      .then((res) => {
        expect(res.token).to.exist
        testData.user1Token = res.token
        done()
      })
      .catch(done)

    user.login(req, res)
  })

  it('should fail login', (done) => {
    const req = http.req({
      username: 'missing@example.com',
      password: 'testpass'
    }, null, null, { domain: 'example.com' })
    const res = http.res()

    res.when('status').then((status) => {
      expect(status).to.equal(404)
      done()
    }).catch(done)

    user.login(req, res)
  })

  it('should create a user', done => {
    const req = http.req({
      firstName: 'Test 2',
      lastName: 'Last Name',
      email: 'user20@example.com',
      username: 'AE01423',
      domain: 'example.com',
      groups: ['59d3740d159de9000470d97d']
    }, null, null, { domain: 'example.com', company: '58d8d82843aa85c1c660596d' })

    const res = http.res()

    res.when('status').then(done)
    res.when('json')
      .then(res => {
        testData.test2 = res
        expect(res.firstName).to.equal('Test 2')
        expect(res.password).to.not.equal('abcd1234')
        expect(res.groups.length).to.be.above(0)
        expect(res.groups[0].name).to.not.exist
        done()
      })
      .catch(done)

    user.create(req, res)
  })

  it('should create a user and add it to the group', done => {
    const req = http.req({
      firstName: 'Test 2',
      lastName: 'Last Name',
      email: 'user21@example.com',
      username: 'AE01425',
      domain: 'example.com',
      groups: ['58d8d82843aa85c1c660596e']
    }, null, null, { domain: 'example.com', company: '58d8d82843aa85c1c660596d' })

    const res = http.res()

    res.when('status').then(done)
    res.when('json').then(res => {
      expect(res.firstName).to.equal('Test 2')
      expect(res.password).to.not.equal('abcd1234')
      expect(res.groups).to.exist
      expect(res.groups[0].name).to.not.exist
      done()
    }).catch(done)

    user.create(req, res)
  })

  it('should create a user and fail to add it to the group (no group)', done => {
    const req = http.req({
      firstName: 'Test 2',
      lastName: 'Last Name',
      email: 'user22@example.com',
      username: 'AE01426',
      domain: 'example.com',
      groups: ['58d8d82843aa85f1c660596e']
    }, null, null, { domain: 'example.com', company: '58d8d82843aa85c1c660596d' })

    const res = http.res()

    res.when('status').then(done)
    res.when('json').then(res => {
      expect(res.firstName).to.equal('Test 2')
      expect(res.password).to.not.equal('abcd1234')
      expect(res.groups).to.exist
      expect(res.groups.length).to.equal(0)
      done()
    }).catch(done)

    user.create(req, res)
  })

  it('should update a user', done => {
    const req = http.req({
      firstName: 'Test 2',
      lastName: 'Last Name2',
      _id: testData.test2._id
    }, null, null, {
      company: '58d8d82843aa85c1c660596d'
    })

    const res = http.res()

    res.when('status').then(done)
    res.when('json').then(res => {
      expect(res.firstName).to.equal('Test 2')
      expect(res._id).to.equal(testData.test2._id)
      expect(res.lastName).to.equal('Last Name2')
      expect(res.email).to.exist
      done()
    }).catch(done)

    user.update(req, res)
  })

  it('should update a user with a password', done => {
    const req = http.req({
      passworrd: 'abcd123',
      _id: testData.test2._id,
      groups: ['59d3740d159de9000470d97d']
    }, null, null, {
      company: '58d8d82843aa85c1c660596d'
    })

    const res = http.res()

    res.when('status').then(done)
    res.when('json').then(res => {
      expect(res.firstName).to.equal('Test 2')
      expect(res._id).to.equal(testData.test2._id)
      expect(res.lastName).to.equal('Last Name2')
      expect(res.email).to.exist
      expect(res.password).to.not.exist
      expect(res.groups).to.exist
      done()
    }).catch(done)

    user.update(req, res)
  })

  it('should get the current user given a token', done => {
    console.log(jsonwebtoken.verify(testData.user1Token, 'SETSECRET'))
    const req = http.req(undefined, undefined, testData.user1Token)
    const res = http.res()

    res.when('status').then(done).catch(done)

    res.when('json').then(res => {
      console.log(JSON.stringify(res, null, 2))
      expect(res.username).to.exist
      expect(res.email).to.exist
      expect(res.password).to.not.exist
      expect(res.company).to.exist
      expect(res.company.groups).to.exist
      expect(res.company.groups[0].users).to.not.exist
      expect(res.company.effectivePermissions.canDeleteForms).to.equal(true)
      expect(res.token).to.exist
      expect(jwtDecode(res.token).permissions).to.exist
      done()
    })
      .catch(done)

    jwtMiddleware(req, undefined, () => {
      try {
        user.current(req, res)
      } catch (err) {
        done(err)
      }
    })
  })

  it('should list users', done => {
    const req = http.req(undefined, undefined, testData.user1Token)
    const res = http.res()

    res.when('status').then(done)
    res.when('json').then(res => {
      expect(res[0]).to.exist
      expect(res[0].username).to.exist
      expect(res[0].password).to.not.exist
      expect(res[0].groups).to.exist
      expect(res[0].groups.length).to.equal(2)
      done()
    }).catch(done)

    jwtMiddleware(req, undefined, () => {
      user.listUsers(req, res)
    })
  })

  it('should not error out when listing users', done => {
    const req = http.req(undefined, undefined, testData.user1Token)
    const res = http.res()

    res.when('status').then(status => {
      expect(status).to.equal(401)
      done()
    }).catch(done)

    user.listUsers(req, res)
  })

  it('should list groups', done => {
    const req = http.req(undefined, undefined, testData.user1Token)
    const res = http.res()

    res.when('status').then(done)
    res.when('json').then(res => {
      expect(res[0]).to.exist
      expect(res[0].name).to.exist
      expect(res[0].permissions).to.exist
      expect(res[0].users).to.exist
      expect(res[0].users[0]).to.exist
      expect(res[0].users[0].username).to.exist
      expect(res[0].users[0]._id).to.exist
      done()
    }).catch(done)

    jwtMiddleware(req, undefined, () => {
      user.listGroups(req, res)
    })
  })

  it('should fail to send an invitation, company does not exist', done => {
    const req = http.req(undefined, {
      domain: 'example.com',
      username: 'user21@example.com',
      password: 'test123'
    })
    const res = http.res()

    res.when('status').then(status => {
      expect(status).to.equal(400)
      done()
    }).catch(done)

    user.sendInvitation(req, res)
  })

  it('should send an invitation', done => {
    const req = http.req(undefined, { domain: 'example.org', username: 'user21@example.com' })
    const res = http.res()

    res.when('status').then(done)
    res.when('json').then(res => {
      console.log(res)
      expect(res.error).to.not.exist
      done()
    }).catch(done)

    user.sendInvitation(req, res)
  })

  it('should generate a random password', () => {
    const pass1 = user._generatePassword()
    const pass2 = user._generatePassword()
    const pass3 = user._generatePassword()
    const pass4 = user._generatePassword()

    expect(pass1).to.exist
    expect(pass1.length).to.equal(6)
    expect(pass2.length).to.equal(6)
    expect(pass2).to.not.equal(pass1)
    expect(pass3).to.not.equal(pass2)
    expect(pass4).to.not.equal(pass3)
  })

  it('should detect your domain', done => {
    const req = {
      headers: { 'x-forwarded-for': 'testip' }
    }
    const res = http.res()

    res.when('status').then(done)
    res.when('json').then(res => {
      console.log(res)
      expect(res.error).to.not.exist
      done()
    }).catch(done)

    user.assumedDomain(req, res)
  })

  it('should fail to detect your domain', done => {
    const req = {
      headers: { 'x-forwarded-for': 'noip' }
    }
    const res = http.res()

    res.when('json').then(result => {
      expect(result.message).to.exist
      done()
    })
      .catch(done)

    user.assumedDomain(req, res)
  })
})
