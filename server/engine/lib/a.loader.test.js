/* eslint-disable no-unused-expressions */
var rewire = require('rewire')
var expect = require('chai').expect
var loader = rewire('./loader')

describe('loader', function () {
  describe('__loadModels', function () {
    it('should load the models', function (done) {
      loader.__loadModels()
        .then(function (result) {
          expect(result).to.exist
          expect(result).to.be.an('array')
          expect(result[0].model).to.exist
          expect(result[0].middleware).to.exist
          done()
        })
        .catch(done)
    })
  })

  describe('loadApi', function () {
    it('should load the entire api', function (done) {
      loader.loadApi()
        .then(function (result) {
          expect(result).to.exist
          done()
        })
        .catch(done)
    })
  })

  describe('__loadRoutes', function () {
    it('should load the routes', function (done) {
      loader.__loadRoutes()
        .then(function (result) {
          expect(result).to.exist
          done()
        })
        .catch(done)
    })
  })
})
