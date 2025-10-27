const Users = require('../models/User').model
const q = require('q')
const tracer = require('tracer').colorConsole()

function search (newItem, appId) {
  let lng = newItem.coords[0]
  let lat = newItem.coords[1]

  var query = {
    coords: {
      $geoWithin: {
        $centerSphere: [[lng, lat], 200 / 3963.2]
      }
    },
    userType: 'receiver',
    appId: appId
  }

  if (newItem.position) {
    query.receiverPositions = newItem.position
  }

  return Users.find(query)
    .select('receiverDistance coords pushTokens')
    .exec()
    .then(function (body) {
      var matchingList = []

      body.forEach(function (result) {
        var distance = calcDistance(Number(lat), Number(lng), result.coords[1], result.coords[0])
        if (distance <= result.receiverDistance) {
          result.distance = distance
          matchingList.push(result)
        }
      })

      return q(matchingList)
    })
    .catch(function (err) {
      tracer.error(err.stack)
    })
}

function calcDistance (lat1, lon1, lat2, lon2) {
  var R = 6371 // km
  var dLat = toRad(lat2 - lat1)
  var dLon = toRad(lon2 - lon1)
  lat1 = toRad(lat1)
  lat2 = toRad(lat2)

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRad (Value) {
  return Value * Math.PI / 180
}

module.exports = {
  run: search,
  calcDistance: calcDistance
}
