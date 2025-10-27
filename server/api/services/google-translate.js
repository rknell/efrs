// Imports the Google Cloud client library
const Translate = require('@google-cloud/translate')
const Translations = require('../models/Translations').model

class GoogleTranslate {
  constructor (projectId) {
    this.client = new Translate({
      projectId: projectId
    })
  }

  async translate (text, language) {
    const results = await this.client.translate(text, language)
    return results[0]
  }

  async newLanguage (language) {
    const english = await Translations.findOne({ language: 'en' })

    const data = {
      language,
      translations: {}
    }

    for (let key in english.translations) {
      data.translations[key] = await this.translate(english.translations[key], language)
    }

    const newTranslation = new Translations(data)
    return newTranslation.save()
  }
}

module.exports = new GoogleTranslate('efrs-c04a9')
