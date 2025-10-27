import OfflineDataStore, { OfflineDataItem } from './OfflineDataStore'
import { observable } from 'mobx'
import shortid from 'shortid'

export default class ReportStore extends OfflineDataStore {
  constructor (networkRequestHandler) {
    super('reporting', Report, networkRequestHandler)
  }
}

export class Report extends OfflineDataItem {
  @observable name = ''
  @observable items = []

  repopulate (data) {
    if (data) {
      data.items.length = 0
      data.items.forEach(item => {
        this.items.push(new ReportItem(item))
      })
    }
  }

  addItem () {
    this.items.push(new ReportItem())
    return this.items[this.items.length - 1]
  }
}

class ReportItem {
  @observable title = ''
  @observable reportType = ''
  @observable form = ''
  @observable filter = ''
  @observable interval = ''
  @observable field = ''

  constructor (data = {}) {
    Object.keys(data).forEach(item => {
      this[item] = data[item]
    })
    if (!data._id) {
      this.guid = shortid.generate()
    } else {
      this.guid = data._id
    }
  }
}
