import UserStore from '../../app/stores/UsersStore'
import { toJS } from 'mobx'

class MockNetworkRequestHandler {
  call (request) {
    if (request.endpoint === '/user' && request.method === 'POST') {
      return Promise.resolve({ firstName: 'test user' })
    } else {
      return Promise.resolve([{ firstName: 'test user' }])
    }
  }
}

it('should create a new user', done => {
  const mockNRH = new MockNetworkRequestHandler()
  const store = new UserStore(mockNRH)

  const newUser = store.create({ firstName: 'new user' })
  expect(store.data.length).toBe(0)
  newUser.save()
    .then(() => {
      expect(store.data.length).toBe(1)
      expect(store.data[0].firstName).toBe('test user')
      done()
    })
    .catch(done)
})

it('should refresh a user', done => {
  const mockNRH = new MockNetworkRequestHandler()
  const store = new UserStore(mockNRH)

  store.refresh()
    .then(() => {
      console.log(JSON.parse(JSON.stringify(store.data[0])))
      expect(toJS(store.data[0].firstName)).toEqual('test user')
      done()
    })
    .catch(done)
})

it('should remove a user', () => {
  const mockNRH = new MockNetworkRequestHandler()
  const store = new UserStore(mockNRH)

  const newUser = store.create({ firstName: 'new user' })

  newUser.remove()
  expect(store.data.length).toBe(0)
})
