import DeviceInfo from 'react-native-device-info'
import stores from '../stores'

class Translate {
  constructor () {
    this.locale = DeviceInfo.getDeviceLocale().split('-')[0]
  }

  loadLanguage = async () => {
    try {
      await stores.translations.refresh()
      console.log('translations', stores.translations.data)
      this.language = stores.translations.data.find(translation => translation.language === this.locale)
      console.log(stores.translations)
    } catch (e) {
      console.log(e, stores)
    }
  }

  do = string => {
    if (!string) return string
    const cleanedString = string.replace(/[^0-9a-z]/gi, '')
    if (!this.language) {
      return string
    } else if (!this.language.translations[cleanedString]) {
      // Translation Missing
      stores.translations.report(string)
      return string
    } else {
      return this.language.translations[cleanedString]
    }
  }
}

export default new Translate()
