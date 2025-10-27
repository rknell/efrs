const Translations = require('../models/Translations').model
const errorHandler = require('../services/errorHandler')
const googleTranslate = require('../services/google-translate')

// const reports = {}

async function report (req, res) {
  try {
    const locale = req.headers['x-locale'].split('-')[0]
    const string = req.body.string
    const cleanedString = string.replace(/[^0-9a-z]/gi, '')
    console.log(locale, string, cleanedString)
    const language = await Translations.findOne({ language: locale })
    if (!language.translations[cleanedString]) {
      let translation = string
      if (locale !== 'en') translation = await googleTranslate.translate(string, locale)
      language.translations[cleanedString] = translation
      language.markModified('translations')
      res.json({
        key: cleanedString,
        translation: translation
      })
      await language.save()
    } else {
      res.json({
        key: cleanedString,
        translation: language.translations[cleanedString]
      })
    }
  } catch (e) {
    errorHandler(res)(e)
  }
}

async function find (req, res) {
  const language = req.headers['x-locale'].split('-')[0]
  try {
    const result = await Translations.findOne({ language })
    if (!result) {
      if (language === 'en') {
        const newLang = new Translations({
          language: 'en',
          translations: {
            test: 'test'
          }
        })
        await newLang.save()
        res.json(newLang)
      } else {
        const newLang = await googleTranslate.newLanguage(language)
        res.json(newLang)
      }
    } else {
      res.json(result)
    }
  } catch (e) {
    errorHandler(res)(e)
  }
}

module.exports = {
  routes: [
    {
      path: 'report',
      method: 'post',
      fn: report,
      middleware: []
    }, {
      path: 'find',
      method: 'get',
      fn: find,
      middleware: []
    }
  ]
}
