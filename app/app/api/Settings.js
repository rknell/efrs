import call from './call'

class SettingsApi {
  get () {
    return call('/settings', 'GET', undefined, undefined, { hideBusy: true })
  }
}

export default new SettingsApi()
