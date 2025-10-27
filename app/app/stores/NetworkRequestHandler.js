import DeviceInfo from 'react-native-device-info'
import lzString from 'lz-string'
import moment from 'moment-timezone'

export default class NetworkRequestHandler {
  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Build': DeviceInfo.getBuildNumber(),
    'X-System-Version': DeviceInfo.getSystemVersion(),
    'X-System-Brand': DeviceInfo.getBrand(),
    'X-System-Model': DeviceInfo.getModel(),
    'X-Locale': DeviceInfo.getDeviceLocale(),
    'X-Timezone': moment.tz.guess()
  }

  constructor (apiPath, logNetwork, errorHandler) {
    this.logNetwork = logNetwork
    this.apiPath = apiPath
    this.errorHandler = errorHandler
  }

  setHeader (key, value) {
    this.headers[key] = value
  }

  clearHeader (key) {
    delete this.headers[key]
  }

  call = async (request = { method: 'GET', options: {} }) => {
    function logNetwork (step, data) {
      if (this.logNetwork) console.log(step, this.apiPath, request, this.headers, data)
    }

    // eslint-disable-next-line no-func-assign
    logNetwork = logNetwork.bind(this)

    logNetwork('CALLING')

    const payload = {
      method: request.method,
      headers: this.headers
    }

    if (request.body) {
      if (request.body._snapshot) request.body._snapshot = null
      const body = JSON.stringify(request.body)
      const compressed = lzString.compressToBase64(body)
      if (body.length > compressed.length) {
        payload.body = `{"body": "${compressed}"}`
        payload.headers = { ...payload.headers, 'X-Request-Encoding': 'lzstring' }
      } else {
        payload.body = body
      }
    }

    try {
      const response = await fetch(this.apiPath + request.endpoint, payload)

      const responseJSON = await response.json()

      if (response.ok) {
        logNetwork('SUCCESS', responseJSON)
        return responseJSON
      } else {
        logNetwork('ERROR', response)
        response.body = responseJSON
        return this.errorHandler(response)
      }
    } catch (error) {
      logNetwork('NETWORK ERROR', error)
      return this.errorHandler(error)
    }
  }
}
