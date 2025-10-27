var Pin = require('pinjs')
var q = require('q')

var pin = Pin.setup({
  key: process.env.PIN_APIKEY,
  production: process.env.NODE_ENV === 'production'
})

function refund (paymentToken) {
  var deferred = q.defer()

  pin.refundCharge(paymentToken, null, function (err, result) {
    if (err) {
      deferred.reject(err)
    } else {
      deferred.resolve(result)
    }
  })

  return deferred.promise
}

function captureChargePromise (paymentToken) {
  var deferrd = q.defer()

  pin.captureCharge(paymentToken, function (err, res) {
    if (err) {
      deferrd.reject(err)
    } else {
      deferrd.resolve(res)
    }
  })

  return deferrd.promise
}

module.exports = {
  api: pin,
  promise: {
    refundCharge: refund,
    captureCharge: captureChargePromise
  }
}
