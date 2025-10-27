class Messaging {
  requestPermissions = () => Promise.resolve()
  getToken = () => Promise.resolve('TESTTOKEN')
  onMessage = () => {}
}

class Analytics {
  setAnalyticsCollectionEnabled = () => {}
  setCurrentScreen = () => {}
}

class FirebaseMock {
  messaging = () => new Messaging()
  analytics = () => new Analytics()
}

export default new FirebaseMock()
