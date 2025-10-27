const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const async = require('async')
const q = require('q')
const url2pdf = require('url2pdf')
const Promise = require('bluebird')

const connectPromise = Promise.promisify(MongoClient.connect)

const testDBHost = 'mongodb://localhost'
const dbName = 'eFRStest'

process.env.DB_URI = `${testDBHost}/${dbName}`

/**
 * Mock out url2pdf
 */
url2pdf.renderPdf = () => {
  return Promise.resolve('')
}

before(function (done) {
  const engine = require('../../engine/engine')
  this.timeout(20000)

  connectPromise(testDBHost)
    .then(client => {
      const db = client.db(dbName)
      return new Promise((resolve, reject) => {
        db.dropDatabase(() => {
          resolve()
        })
      })
    })
    .then(() => {
      return Promise.all([
        loadFixtures(require('../fixtures/users'), 'users', ['company']),
        loadFixtures(require('../fixtures/companies'), 'companies'),
        loadFixtures(require('../fixtures/forms.js'), 'forms'),
        loadFixtures(require('../fixtures/responses.js'), 'responses'),
        loadFixtures(require('../fixtures/ipdomains.js'), 'ipdomains')
      ])
    })
    .then(function () {
      engine.config = {
        port: 3491,
        dbUri: process.env.DB_URI,
        apiPrefix: '/api'
      }
      engine.init().then(function () {
        done()
      })
        .catch(done)
    })
    .catch(done)
})

function loadFixtures (data, collectionName, objectIds) {
  const deferred = q.defer()
  MongoClient.connect(testDBHost, function (err, client) {
    if (err) return deferred.reject(err)
    const db = client.db(dbName)
    db.collection(collectionName).remove({}, function (err, noRemoved) {
      if (err) {
        deferred.reject(err)
      } else {
        async.each(data, function (item, cb) {
          item._id = new ObjectID(item._id)

          if (objectIds) {
            objectIds.forEach(objId => {
              item[objId] = ObjectID(item[objId])
            })
          }

          db.collection(collectionName).insert(item, function (err, result) {
            cb(err)
          })
        }, function (err) {
          client.close()
          if (err) {
            deferred.reject(err)
          } else {
            deferred.resolve()
          }
        })
      }
    })
  })
  return deferred.promise
}
