import OfflineDataStore, { OfflineDataItem } from './OfflineDataStore'
import { observable } from 'mobx'

export default class UsersStore extends OfflineDataStore {
  constructor (networkRequestHandler) {
    super('user', UserStoreItem, networkRequestHandler)
  }

  refresh () {
    this.isRefreshing = true
    return this.networkRequestHandler.call({ endpoint: `/${this.modelPath}/listUsers` })
      .then(data => {
        if (data) {
          this.repopulateData(data)
          this.saveOffline()
        }
      })
      .finally(() => {
        this.isRefreshing = false
      })
  }
}

export class UserStoreItem extends OfflineDataItem {
  @observable firstName = ''
  @observable lastName = ''
  @observable username = ''
  @observable email = ''
  @observable isTempPassword = null
  @observable isSetup = null
  @observable groups = []
  @observable relationships = []

  repopulate () {
    this.displayLabel = `${this.lastName}, ${this.firstName} (${this.email})`
  }
}
