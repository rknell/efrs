import OfflineDataStore, { OfflineDataItem } from '../../app/stores/OfflineDataStore'

class SimpleItem extends OfflineDataItem {}

class MockNetworkRequestHandler {
  call (request) {
    if (request.endpoint === '/testModel' && request.method === 'POST') {
      return Promise.resolve({ ...request.body, _id: request.body.name })
    } else {
      return Promise.resolve()
    }
  }
}

it('should delete an item', done => {
  const offlineDataStore = new OfflineDataStore('testModel', SimpleItem, new MockNetworkRequestHandler())

  const newItem1 = offlineDataStore.create({ name: 'newItem1' })
  const newItem2 = offlineDataStore.create({ name: 'newItem2' })
  const newItem3 = offlineDataStore.create({ name: 'newItem3' })

  newItem1.save()
    .then(() => newItem2.save())
    .then(() => newItem3.save())
    .then(() => newItem2.remove())
    .then(() => {
      const newItem1Exists = offlineDataStore.data.some(item => item.guid === newItem1.guid)
      const newItem2Exists = offlineDataStore.data.some(item => item.guid === newItem2.guid)
      const newItem3Exists = offlineDataStore.data.some(item => item.guid === newItem3.guid)
      console.log('Offline Data Store Error', newItem1Exists, newItem2Exists, newItem3Exists, offlineDataStore.data.map(item => ({
        'guid': item.guid,
        'name': item.name
      })), newItem1.guid, newItem2.guid, newItem3.guid)
      expect(newItem1Exists).toBe(true)
      expect(newItem2Exists).toBe(false)
      expect(newItem3Exists).toBe(true)
      done()
    })
    .catch(done)
})
