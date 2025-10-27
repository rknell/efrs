/* eslint-disable no-unused-expressions */
const Response = require('../../api/routes/Response')
const ResponseModel = require('../../api/models/Response').model
const http = require('../mocks/http')
// const fs = require('fs')
const expect = require('chai').expect

describe('routes.response', () => {
  it('should render a report to HTML', done => {
    const req = http.req(null, { id: '58dadc750e7d220f58bb2036' })
    const res = http.res()

    res.when('send')
      .then(res => {
        // fs.writeFile('formrender.html', res)
        done()
      })
      .catch(done)

    Response.view(req, res)
  })

  it('should view a csv', done => {
    const req = http.req(null, { id: '58dadc750e7d220f58bb2036' })
    const res = http.res()

    res.when('send')
      .then(output => {
        expect(output.indexOf('user3@example.com')).to.be.above(-1)
        done()
      }).catch(done)

    Response.viewCSV(req, res)
  })

  it('should save a document and not save the CSV', async () => {
    var newResponse = new ResponseModel({
      formId: '5a43053c76ed160004c56579',
      csv: {
        data: 'test'
      }
    })

    newResponse = await newResponse.save()
    const dbLoadedResponse = await ResponseModel.findOne({ _id: newResponse._id })
    expect(dbLoadedResponse.csv.data).to.not.exist
  })
})
