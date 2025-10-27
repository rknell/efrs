import { AsyncStorage } from 'react-native'
import Stores from '../../app/stores'
import GlobalState from '../../app/services/GlobalState'

it('should handle an POCO error correctly', done => {
  Stores.errorHandler('test')
    .catch(() => {
      done()
    })
})

it('should handle an error message correctly', done => {
  Stores.errorHandler({ body: { message: 'error message' } })
    .catch(() => {
      done()
    })
})

it('should handle an empty body error correctly', done => {
  Stores.errorHandler({ body: {} })
    .catch(() => {
      done()
    })
})

it('should handle a 401 error when you have logged in', done => {
  GlobalState.navigation.resetTo = (path) => {
    expect(path.view.type.name).toBe('HomeView')
  }

  AsyncStorage.getItem = async (key) => {
    if (key === '@login:domain') {
      return 'domain'
    } else {
      return null
    }
  }

  Stores.errorHandler({ status: 401 })
    .then(() => { done() })
    .catch(done)
})

it('should handle a 401 error when have not setup a domain', done => {
  GlobalState.navigation.resetTo = (path) => {
    expect(path.view.type.name).toBe('DomainView')
  }

  AsyncStorage.getItem = (key) => {
    return Promise.resolve()
  }

  Stores.errorHandler({ status: 401 })
    .then(() => { done() })
    .catch(done)
})

it('should have the production api path set', () => {
  expect(Stores.API_PATH).toBe('https://www.efrs.io/api')
})
