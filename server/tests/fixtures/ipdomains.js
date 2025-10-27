var ObjectId = require('mongodb').ObjectID
var ISODate = function (date) {
  return new Date(date)
}

module.exports = [{
  '_id': ObjectId('5a365793c85aad3ca0e449b0'),
  '__ttl': ISODate('2219-12-17T12:40:03.040Z'),
  'createdAt': ISODate('2017-12-17T11:40:03.040Z'),
  'updatedAt': ISODate('2017-12-17T11:40:03.040Z'),
  'domain': 'example.com.au',
  'userip': 'testip',
  '__v': 0
}]
