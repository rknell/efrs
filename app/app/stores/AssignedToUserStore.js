import OfflineDataStore from './OfflineDataStore'
import { ResponseStoreItem } from './ResponseStore'

export default class AssignedToUserStore extends OfflineDataStore {
  constructor (networkRequestHandler) {
    super('assignedToUser', ResponseStoreItem, networkRequestHandler)
  }

  refresh () {
    this.isRefreshing = true
    return this.networkRequestHandler.call({ endpoint: `/response/assignedToMe` })
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
