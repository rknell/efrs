// Load Dependencies
// -----------------

const engine = require('./engine/engine')

// Configure the engine
// --------------------
engine.config = {
  port: process.env.PORT || 1676,
  dbUri: process.env.DB_URI,
  apiPrefix: '/api'
}

engine.init()

engine.express.app.use('/download/:domain/:platform', (req, res) => {
  const IPDomains = require('./api/models/IPDomains').model

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  const domain = req.params.domain

  const newIPDomain = new IPDomains({ userip: ip, domain })
  newIPDomain.save()

  if (req.params.platform === 'ios') {
    res.redirect('https://itunes.apple.com/us/app/efrs-enterprise-field-reporting-system/id1226260785?ls=1&mt=8')
  } else if (req.params.platform === 'android') {
    res.redirect('https://play.google.com/store/apps/details?id=io.efrs&hl=en&source=efrs.io')
  } else {
    res.redirect('https://www.efrs.io')
  }
})
