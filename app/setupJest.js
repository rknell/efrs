/* eslint-disable no-global-assign,import/first */
import fetchMock from 'fetch-mock'
import GlobalState from './app/services/GlobalState'

const Enzyme = require('enzyme')
const EnzymeAdapter = require('enzyme-adapter-react-16')

GlobalState.navigation.push = () => {
}

Response = {}
Headers = {}
Request = {}
jest.mock('mobx-react/native', () => require('mobx-react/custom'))
jest.mock('NativeAnimatedHelper')
jest.mock('react-native-search-bar')
jest.mock('react-native-device-info', () => {
  return {
    getBuildNumber: () => '1',
    getSystemVersion: () => '1',
    getBrand: () => '1',
    getModel: () => '1',
    getDeviceLocale: () => 'en-US'
  }
})
jest.mock('bugsnag-react-native')
// jest.mock('react-native-fetch-blob', () => {
//   return {
//     DocumentDir: () => {},
//     polyfill: () => {}
//   }
// })
jest.mock('react-native-scrollable-tab-view')

// fetchMock.get('*', {hello: 'world'})
// fetchMock.post('*', {hello: 'world'})

fetchMock.mock({
  name: 'testerror',
  method: 'get',
  response: (url, opts) => {
    console.log(url, opts)
    return {
      status: 400,
      body: { isError: true }
    }
  },
  matcher: 'api/testerror'
})

fetchMock.mock('api/test', { hello: 'world' })

fetchMock.post('https://www.efrs.io/api/response', { hello: 'world' })
fetchMock.post('https://www.efrs.io/api/company/group', { hello: 'world' })
fetchMock.delete('https://www.efrs.io/api/company/group/test', { hello: 'world' })

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })
