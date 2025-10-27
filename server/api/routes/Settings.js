function settings (req, res) {
  const output = {
    latestAppVersion: process.env.LATEST_APP_VERSION || 0,
    minimumAppVersion: process.env.MINIMUM_APP_VERSION || 0
  }
  res.json(output)
}

module.exports = {
  routes: [
    {
      path: '',
      method: 'get',
      fn: settings,
      middleware: []
    }
  ]
}
