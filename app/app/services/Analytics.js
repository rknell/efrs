import firebase from 'react-native-firebase'

const LOCAL_LOG = true

class Analytics {
  constructor () {
    this._analytics = firebase.analytics()
    this._analytics.setAnalyticsCollectionEnabled(true)
  }

  _localLog (type, data) {
    if (LOCAL_LOG) {
      console.log(`ANALYTICS:${type}`, data)
    }
  }

  logScreen (name) {
    this._localLog('LOG SCREEN', name)
    this._analytics.setCurrentScreen(name, name)
  }

  logEvent (name, params) {
    this._localLog('LOG EVENT', name)
    this._analytics.logEvent(name, params)
  }

  setUserId (id) {
    this._localLog('SET USER ID', id)
    this._analytics.setUserId(id)
  }
}

export default new Analytics()
