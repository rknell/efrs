const Reporting = require('../../api/routes/Reporting')
const expect = require('chai').expect
const http = require('../mocks/http')

// Was working on 25/2/18, need to fix date / data

describe('routes-reporting', () => {
  it.skip('should generate a sum report', done => {
    const req = http.req(null, {
      interval: '30',
      form: '58eb001e9d37660794787af6',
      field: '21'
    }, null, { company: '58ed9f07466ae5000404fcf3' })

    const res = http.res()

    res.when('json').then(result => {
      expect(result[9].value).to.equal(14)
      expect(result[9].responses.length).to.be.above(1)
      done()
    }).catch(done)

    Reporting.sum(req, res)
  })

  it.skip('should generate a mean report', done => {
    const req = http.req(null, {
      interval: '30',
      form: '58eb001e9d37660794787af6',
      field: '21'
    }, null, { company: '58ed9f07466ae5000404fcf3' })

    const res = http.res()

    res.when('json').then(result => {
      expect(result[9].value).to.equal(1.75)
      expect(result[9].responses.length).to.be.above(1)
      done()
    }).catch(done)

    Reporting.mean(req, res)
  })

  it.skip('should generate a count report', done => {
    const req = http.req(null, {
      interval: '30',
      form: '58eb001e9d37660794787af6',
      field: '99'
    }, null, { company: '58ed9f07466ae5000404fcf3' })

    const res = http.res()

    res.when('status').then(done)

    res.when('json').then(result => {
      expect(result[9].Abnormal.value).to.equal(3)
      expect(result[9].Normal.value).to.equal(3)
      done()
    }).catch(done)

    Reporting.count(req, res)
  })

  it.skip('should count the number of submissions meeting a certain criteria (no filter)', done => {
    const req = http.req(null, {
      interval: '30',
      form: '58eb001e9d37660794787af6'
    }, null, { company: '58ed9f07466ae5000404fcf3' })

    const res = http.res()

    res.when('status').then(done)

    res.when('json').then(result => {
      expect(result[9].value).to.equal(8)
      expect(result[9].responses.length).to.equal(8)
      done()
    }).catch(done)

    Reporting.filter(req, res)
  })

  it.skip('should count the number of submissions meeting a certain criteria (with filter)', done => {
    const req = http.req(null, {
      interval: '30',
      form: '58eb001e9d37660794787af6',
      filter: `{"responses.5.values.default":"Female"}`
    }, null, { company: '58ed9f07466ae5000404fcf3' })

    const res = http.res()

    res.when('status').then(done)

    res.when('json').then(result => {
      expect(result[9].value).to.equal(6)
      expect(result[9].responses.length).to.equal(6)
      done()
    }).catch(done)

    Reporting.filter(req, res)
  })
})
