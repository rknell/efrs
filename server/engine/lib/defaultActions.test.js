/* eslint-disable no-unused-expressions */
const expect = require('chai').expect
const defaultActions = require('./defaultActions')
const engine = require('../engine')
const app = engine.express.app
const request = require('supertest')
const tracer = require('tracer').colorConsole

let createdRecordId, model, schema

describe('defaultActions', function () {
  before(function () {
    schema = new engine.mongoose.Schema({
      name: String
    })
    model = engine.mongoose.model('Test', schema)

    createdRecordId = null
  })

  describe('create', function () {
    it('should create a new record', function (done) {
      defaultActions.create({ body: { name: 'Test' } }, {
        json: function (data) {
          createdRecordId = data._id
          expect(data).to.exist
          expect(data).to.not.equal(500)
          done()
        }
      }, model)
    })
  })

  describe('error handling', function () {
    it('should throw a 404', function (done) {
      request(app)
        .post('/kjadsfkjlasdfjk')
        .send('test')
        .end(function (err, res) {
          if (err) return done(err)
          expect(res.status).to.equal(404)
          done()
        })
    })

    it('should throw a 404 with html feedback', function (done) {
      request(app)
        .post('/kjadsfkjlasdfjk')
        .send({ name: 'Test' })
        .accept('html')
        .end(function (err, res) {
          if (err) return done(err)
          expect(res.status).to.equal(404)
          done()
        })
    })

    it('should throw a 500 error', function (done) {
      return request(app)
        .get('/api/err/500')
        .end(function (err, res) {
          if (err) return done(err)
          expect(res.status).to.equal(500)
          done()
        })
    })
  })

  describe('update', function () {
    it('should try an update a record', function (done) {
      defaultActions.update({ body: { _id: createdRecordId, name: 'New name' } }, {
        json: function (data) {
          expect(data).to.not.equal(500)
          done()
        }
      }, model)
    })
  })

  describe('findAll', function () {
    it('should run a find all query', function (done) {
      defaultActions.findAll({}, {
        json: function (data) {
          expect(data).to.exist
          expect(data).to.not.equal(500)
          done()
        }
      }, model)
    })
  })

  describe('findById', function () {
    it('should run a find by id query', function (done) {
      defaultActions.findById({ params: { id: createdRecordId } }, {
        json: function (data) {
          expect(data).to.not.equal(500)
          done()
        }
      }, model)
    })
  })

  describe('search', function () {
    var called = false
    it('should run a search', function () {
      defaultActions.search({}, {
        json: function (data) {
          tracer.log(data)
          expect(data).to.exist
          expect(data).to.not.equal(500)
          if (!called) {
            called = true
          }
        }
      }, model)
    })
  })

  describe('remove', function () {
    it('fails to remove a record', function (done) {
      defaultActions.remove({ params: { id: '123456789012345678901234' } }, {
        json: function (data) {
          expect(data).to.exist
          expect(data).to.equal(404)
          done()
        }
      }, model)
    })

    it('should run a find all query', function (done) {
      defaultActions.remove({ params: { id: createdRecordId } }, {
        json: function (data) {
          expect(data).to.exist
          expect(data).to.not.equal(500)
          done()
        }
      }, model)
    })
  })
})
