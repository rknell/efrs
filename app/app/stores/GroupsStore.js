import OfflineDataStore, { OfflineDataItem } from './OfflineDataStore'
import { observable } from 'mobx'

export default class GroupStore extends OfflineDataStore {
  constructor (networkRequestHandler) {
    super('groups', GroupStoreItem, networkRequestHandler)
  }

  refresh () {
    this.isRefreshing = true
    return this.networkRequestHandler.call({ endpoint: `/user/listGroups` })
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

export class GroupStoreItem extends OfflineDataItem {
  @observable _id = null
  @observable guid = null
  @observable name = ''
  @observable users = []
  @observable permissions = {}
}
