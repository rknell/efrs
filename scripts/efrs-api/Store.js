class Store {
  call (uri, method = 'GET', data, options = {}) {
    if (options.requiresAuth) {}
  }
}

module.exports = Store
