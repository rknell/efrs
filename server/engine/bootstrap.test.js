// express = require('./lib/express');
// mongoose = require('mongoose');
// loader = require('./lib/loader');
// expect = require('chai').expect;
// request = require('supertest');
// testenv = {
//   development: true
// };
// app = express.app;

var engine = require('./engine')

before(function (done) {
  this.timeout(10000)

  engine.init()
    .then(function () {
      engine.mongoose.connection.db.dropDatabase()
      done()
    })
    .catch(done)
})

describe('testing before', function () {
  it('should just pass', function (done) {
    done()
  })
})
