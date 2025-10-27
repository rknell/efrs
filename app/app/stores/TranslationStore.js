import OfflineDataStore, { OfflineDataItem } from './OfflineDataStore'
import { observable } from 'mobx'

export default class TranslationStore extends OfflineDataStore {
  constructor (networkRequestHandler) {
    super('translations', Translation, networkRequestHandler)
  }

  async report (string) {
    // const result = this.networkRequestHandler.call({endpoint: `/translations/report`, method: 'POST', body: {string}})
    // this.data[0].translations[result.key] = result.translation
    // this.saveOffline()
  }
}

export class Translation extends OfflineDataItem {
  @observable language = ''
  @observable translations = {}
}
