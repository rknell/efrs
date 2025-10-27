const events = require('events')
const q = require('q')

const httpMockReq = function (body, params, authToken, payload, headers) {
  return {
    body,
    params,
    headers: {
      ...headers,
      authorization: 'bearer ' + authToken
    },
    payload
  }
}

const httpMockRes = function () {
  const eventEmitter = new events.EventEmitter()
  const output = {
    _statusVal: 0,
    status: function (val) {
      output._statusVal = val
      eventEmitter.emit('status', val)
      return output
    },
    _jsonVal: {},
    json: function (data) {
      // This way all objects will be serialsed as if they are being passed back to the client.
      if (data) {
        data = JSON.parse(JSON.stringify(data))
      }

      eventEmitter.emit('json', data)
      output._jsonVal = data
      return output
    },
    send: function (data) {
      eventEmitter.emit('send', data)
      return data
    },
    set: function (data) {
      eventEmitter.emit('set')
      return output
    },
    end: function (data) {
      eventEmitter.emit('data')
      return data
    },
    listener: function () {
      return eventEmitter
    },
    when: function (event) {
      const deferred = q.defer()

      eventEmitter.on(event, function (result) {
        deferred.resolve(result)
      })

      return deferred.promise
    },
    redirect: (url) => {
      eventEmitter.emit('redirect', url)
      return url
    }
  }

  return output
}

module.exports = {
  req: httpMockReq,
  res: httpMockRes
}
