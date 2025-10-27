var bCrypt = require('bcrypt')
var q = require('q')

// TODO: There is a potential problem here with async. Don't know how it was missed earlier
function hashPromise (data) {
  var deferred = q.defer()
  bCrypt.hash(data, 8, function (err, hash) {
    if (err) {
      deferred.reject(err)
    } else {
      deferred.resolve(hash)
    }
  })
  return deferred.promise
}

module.exports = {
  promise: hashPromise
}
