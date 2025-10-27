/* eslint-disable no-unused-expressions */
const Company = require('../../api/routes/Company')
const expect = require('chai').expect
const http = require('../mocks/http')

describe('company', () => {
  it('should serve the company logo', done => {
    const req = http.req(undefined, { domain: 'example.org' })
    const res = http.res()

    res.when('status').then(status => {
      expect(status).to.equal(200)
      done()
    }).catch(done)

    Company.fullLogo(req, res)
  })

  it('should serve the default logo for a company that doesnt exist', done => {
    const req = http.req(undefined, { domain: 'missing.example' })
    const res = http.res()

    res.when('redirect').then(url => {
      expect(url).to.exist
      done()
    }).catch(done)

    Company.fullLogo(req, res)
  })

  it('should serve the default logo when a logo doesnt exist', done => {
    const req = http.req(undefined, { domain: 'example.com' })
    const res = http.res()

    res.when('redirect').then(url => {
      expect(url).to.exist
      done()
    }).catch(done)

    Company.fullLogo(req, res)
  })
})
