import OfflineDataStore, { OfflineDataItem } from './OfflineDataStore'
import { observable } from 'mobx'

export default class ScheduledResponsesStore extends OfflineDataStore {
  constructor (networkRequestHandler) {
    super('ScheduledResponse', ScheduledResponse, networkRequestHandler)
  }
}

export class ScheduledResponse extends OfflineDataItem {
  @observable response = {
    formId: null
  }
  @observable rrule = {
    freq: null,
    byweekday: [],
    bymonthday: [],
    bysetpos: []
  }
  @observable assignToUser = null
  @observable assignToGroup = null
  @observable isLastDay = false
  @observable startDateTime = new Date()
  @observable daysToComplete = '1'

  isValid = () => {
    if (!this.rrule.freq) {
      return 'Please select a frequency'
    }
    if (!this.response.formId) {
      return 'Please select a form'
    }
    if (!this.assignToGroup && !this.assignToUser) {
      return 'Please select a user / group to assign to'
    }
    return true
  }
}
