import OfflineDataStore, { OfflineDataItem } from './OfflineDataStore'
import { observable } from 'mobx'
import Translate from '../services/Translate'

export default class FormStore extends OfflineDataStore {
  constructor (networkRequestHandler) {
    super('form', FormStoreItem, networkRequestHandler)
  }
}

export class FormStoreItem extends OfflineDataItem {
  @observable name = ''
  @observable company = ''
  @observable createdBy = null
  @observable dateStarted = new Date()
  @observable restrictedGroups = []
  @observable headerImageUrl = ''
  @observable emailResponses = ''
  @observable emailToSupervisor = false
  @observable lastFieldId = 0
  @observable pages = [
    {
      name: Translate.do('Page') + ' 1',
      groups: observable([
        {
          fields: observable([])
        }
      ])
    }
  ]

  @observable currentVersion = 1

  clone = () => {
    const data = JSON.parse(JSON.stringify(this))
    delete data.createdBy
    delete data.createdAt
    delete data.updatedAt
    delete data._id
    data.name = this.name + ' (copy)'
    return this.store().create(data)
  }
}
