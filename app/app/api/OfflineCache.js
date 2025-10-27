import { Alert, AsyncStorage } from 'react-native'
import call from './call'
import md5 from 'blueimp-md5'
import Translate from '../services/Translate'

class OfflineCache {
  syncingStore = false

  constructor () {
    setInterval(this.syncOfflineStore, 1000 * 5)
    this.syncOfflineStore = this.syncOfflineStore.bind(this)
    this.clearOfflineStore = this.clearOfflineStore.bind(this)
    this.clearOfflineCache = this.clearOfflineCache.bind(this)
    this.getCache = this.getCache.bind(this)
    this.setCache = this.setCache.bind(this)
    this.syncOfflineStore()
  }

  syncOfflineStore = async () => {
    if (!this.syncingStore) {
      this.syncingStore = true
      const allKeys = await AsyncStorage.getAllKeys()
      const actions = []

      allKeys.forEach(key => {
        if (key.substr(0, `@OfflineStore|`.length) === `@OfflineStore|`) {
          // Try syncing!
          const breakdown = key.split('|', 4)

          const endpoint = breakdown[1]
          const method = breakdown[2]

          actions.push(AsyncStorage.getItem(key)
            .then(data => {
              AsyncStorage.removeItem(key)
              return call(endpoint, method, JSON.parse(data).body, true, { hideBusy: true })
            }))
        }
      })

      Promise
        .all(actions)
        .finally(() => {
          this.syncingStore = false
        })
    }
  }
  clearOfflineStore = async () => {
    Alert.alert(
      Translate.do('Deleting Data'),
      Translate.do(`This will erase all data that hasn't been synced with the server`),
      [
        {
          text: Translate.do('Make no changes'),
          onPress: () => {
          },
          style: 'cancel'
        },
        {
          text: Translate.do('Clear unsynced responses'),
          onPress: () => {
            AsyncStorage.getAllKeys().then(allKeys => {
              allKeys.forEach(key => {
                if (key.substr(0, `@OfflineStore`.length) === `@OfflineStore`) {
                  // Try syncing!
                  return AsyncStorage.removeItem(key)
                }
              })
            })
          }
        }
      ],
      { cancelable: false }
    )
  }
  clearOfflineCache = async () => {
    Alert.alert(
      Translate.do('Deleting Data'),
      Translate.do('This will erase all offline data stored on the app.'),
      [
        {
          text: Translate.do('Make no changes'),
          onPress: () => {
          },
          style: 'cancel'
        },
        {
          text: Translate.do('Clear offline data'),
          onPress: () => {
            AsyncStorage.getAllKeys().then(allKeys => {
              allKeys.forEach(key => {
                if (key.substr(0, `@OfflineCache`.length) === `@OfflineCache`) {
                  // Try syncing!
                  return AsyncStorage.removeItem(key)
                }
              })
            })
          }
        }
      ],
      { cancelable: false }
    )
  }
  setCache = async (endpoint, method, body, response) => {
    await AsyncStorage.setItem(`@OfflineCache|${endpoint}|${method}|${JSON.stringify(body)}`, JSON.stringify(response))
  }
  getCache = async (endpoint, method, body) => {
    if (method === 'POST') {
      // Store it instead of returning something
      AsyncStorage.setItem(`@OfflineStore|${endpoint}|${method}|${md5(body)}`, JSON.stringify({ body: JSON.parse(body) }))
    } else if (method === 'GET') {
      const responseJSON = await AsyncStorage.getItem(`@OfflineCache|${endpoint}|${method}|${body}`)
      if (!responseJSON) {
        throw new Error('no cache')
      } else {
        return JSON.parse(responseJSON)
      }
    }
  }
}

export default new OfflineCache()
