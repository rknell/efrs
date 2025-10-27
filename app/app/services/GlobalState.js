import { observable, observe, spy } from 'mobx'
import { Alert, AsyncStorage, Linking } from 'react-native'
import PushNotifications from './PushNotifications'
import Translate from '../services/Translate'

class GlobalState {
  // apiPath = 'http://192.168.1.8:1676/api'
  apiPath = 'https://www.efrs.io/api'
  // apiPath = 'http://localhost:1676/api'

  @observable model = {
    userToken: null,
    user: null,
    userPermissions: {
      permissions: {},
      groups: []
    },
    canPop: false,
    forms: [],
    cachedCalls: {
      get: {},
      post: []
    },
    isBusy: 0,
    pushToken: null
  }

  current = () => {
    return {
      user: this.model.user ? this.model.user._id : 'no user',
      group: this.model.userPermissions.groups.join(',')
    }
  }

  navigation = {
    resetTo: () => {
      console.log('RESETTING NAVIGATION')
    },
    push: () => {
      console.log('PUSHING NAVIGATION')
    }
  }

  saveSetting (key, value) {
    return AsyncStorage.setItem(`@EFRS.AppSettings:${key}`, value)
  }

  getSetting (key) {
    return AsyncStorage.getItem(`@EFRS.AppSettings:${key}`)
  }

  constructor () {
    spy(event => {
      if (event.type === 'action' || event.type === 'update') {
        // console.log(event);
      }
    })

    this.getSetting('formsData').then(data => {
      if (data) this.model.forms = JSON.parse(data)
    })

    const PNObj = new PushNotifications(this._setPushToken)
    this.pushNotifications = PNObj.messaging

    observe(this.model, 'user', () => {
      try {
        if (this.model.user && this.bugsnag) {
          this.bugsnag.setUser(this.model.user._id, `${this.model.user.firstName} ${this.model.user.lastName}`, this.model.user.email)
        }
      } catch (e) {
        console.error('could not set user for bugsnag', e)
      }
    })
  }

  _setPushToken = (token) => {
    this.model.pushToken = token
  }

  openUrl (url) {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        Alert.alert(Translate.do('Error'), Translate.do('Can\'t open this url on this device. Try installing an app that can handle this link type and try again.'))
      } else {
        return Linking.openURL(url)
      }
    }).catch(err => console.error('An error occurred', err))
  }
}

export default new GlobalState()
