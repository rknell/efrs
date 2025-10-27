import FireBase from 'react-native-firebase'

/**
 * DO NOT REMOVE THIS REFERENCE!!! TESTS WILL FAIL. APP WILL FALL APART. WORLD WILL END.
 */
import Stores from '../stores'

export default class PushNotifications {
  constructor (tokenCallback) {
    this.tokenCallback = tokenCallback
    this.messaging = FireBase.messaging()
    this.stores = Stores

    switch ('android') {
      case 'android':
        this.setupAndroid()
        break
      case 'ios':
        this.setupIOS()
        break
    }
  }

  setupIOS () {
    this.messaging.requestPermissions().then(result => {
      if (result.status !== 'unknown') {
        this.messaging.getToken().then(this._handleToken)
        this.messaging.onMessage(this._handleMessage)
      }
    })
  }

  setupAndroid () {
    this.messaging.getToken().then(this._handleToken)
    this.messaging.onMessage(this._handleMessage)
  }

  _handleToken = (token) => {
    if (this.tokenCallback) this.tokenCallback(token)
  }

  _handleMessage = (message) => {
    console.log(JSON.stringify(message))
  }
}
