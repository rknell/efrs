import { observable } from 'mobx'
import shortid from 'shortid'
import { AsyncStorage } from 'react-native'

export default class OfflineDataStore {
  @observable data = []
  @observable isRefreshing = false

  constructor (modelPath, itemClass, networkRequestHandler) {
    this.networkRequestHandler = networkRequestHandler
    this.modelPath = modelPath
    this._itemClass = itemClass
    this._storageKey = `@offlineDataStore-${this.modelPath}`
    this._rehydrate()
    this.refresh = this.refresh.bind(this) // Override does not work with shortcut this binding syntax
  }

  create = (data) => {
    return new this._itemClass(data, this)
  }

  syncAllDirty = async () => {
    const itemsToSync = this.data.filter(item => item.isDirty)
    if (itemsToSync.length) {
      for (let item of itemsToSync) {
        await item.sync()
      }
    }
  }

  // By default, load all data from the model, should be overridden to maintain a subset
  // Cant use dynamic function due to overriding
  async refresh () {
    this.isRefreshing = true
    this.isBusy = true
    try {
      await this.syncAllDirty()
      const data = await this.networkRequestHandler.call({ endpoint: `/${this.modelPath}` })
      if (data) {
        if (!data.data) {
          await this.repopulateData(data)
        } else {
          await this.repopulateData(data.data)
        }
        await this.saveOffline()
      }
    } catch (e) {
    }
    this.isBusy = false
    this.isRefreshing = false
  }

  saveOffline = async () => {
    return AsyncStorage.setItem(this._storageKey, JSON.stringify(this.data))
  }

  _rehydrate = async () => {
    try {
      const data = await AsyncStorage.getItem(this._storageKey)
      if (data) {
        this.repopulateData(JSON.parse(data))
      }
    } catch (e) {
      console.error('error rehydrating', e)
    }
  }

  clearCached = async () => {
    await AsyncStorage.removeItem(this._storageKey)
    this.data.length = 0
  }

  repopulateData = async (data) => {
    const itemsToSync = this.data.filter(item => item.isDirty)
    try {
      if (itemsToSync.length) {
        for (let item of itemsToSync) {
          await item.save()
        }
      }
      this.data.length = 0 // clear the data array
      if (data.forEach) {
        // its a multi item
        data.forEach(item => {
          this.data.push(new this._itemClass(item, this))
        })
      } else {
        // single item
        this.data.push(new this._itemClass(data, this))
      }
    } catch (e) {
      console.error(e)
    }
  }

  _save = async item => {
    if (!item) throw new Error("Can't save. No item")
    const dataItem = this.data.find(dataItem => item.guid === dataItem.guid)
    if (!dataItem) {
      this.data.push(item)
    }
    item.isSaving = true
    item.isBusy = true

    try {
      const data = await this.networkRequestHandler.call({ endpoint: `/${this.modelPath}`, method: 'POST', body: item })
      item._repopulate(data)
      item.isSaving = false
      item.isDirty = false
    } catch (err) {
      if (err && err.status && err.status >= 400 && err.status < 500) {
        item.isDirty = false
      } else {
        item.isDirty = true
      }
      throw err
    } finally {
      item.isBusy = false
      await this.saveOffline()
      console.log('saving offline', this.data)
    }
  }

  _remove = async (item) => {
    item.isDeleting = true
    item.isBusy = true
    try {
      await this.networkRequestHandler.call({ endpoint: `/${this.modelPath}/${item._id}`, method: 'DELETE' })
      const dataIndex = this.data.findIndex(dataItem => dataItem.guid === item.guid)
      this.data.splice(dataIndex, 1)
    } catch (e) {
      if (e && e.status && e.status >= 400 && e.status < 500) {
        // Invalid request, don't save for offline sync
        item.isDirty = false
      } else {
        item.isDirty = true
      }
    }
    item.isBusy = false
    this.saveOffline()
  }
}

export class OfflineDataItem {
  constructor (data, store) {
    this.store = () => store // Save the store in a function so it cleans up when stringifying
    this._repopulate(data)
  }

  save = () => {
    return this.store()._save(this)
  }

  remove = () => {
    return this.store()._remove(this)
  }

  snapshot = () => {
    this._snapshot = JSON.stringify(this)
  }

  restoreSnapshot = () => {
    if (this._snapshot) {
      this._repopulate(JSON.parse(this._snapshot))
    }
  }

  matchesSnapshot = () => {
    const noSnapshot = JSON.parse(JSON.stringify(this))
    delete noSnapshot._snapshot
    const matches = JSON.stringify(noSnapshot) === this._snapshot
    return matches
  }

  _repopulate = (data) => {
    for (const key in data) {
      this[key] = data[key]
    }
    if (this._id && this.guid !== this._id) {
      this.guid = this._id
    } else if (!this.guid) {
      this.guid = shortid.generate()
    }
    this.key = this.guid
    if (this.repopulate) this.repopulate(data)
  }

  sync = async () => {
    if (this.isDeleting) {
      await this.remove()
    } else if (this.isSaving) {
      await this.save()
    } else {
      console.warn("Cant sync, don't know what to do?")
    }
  }

  @observable selected
  @observable isDeleting = false
  @observable isSaving = false
  @observable isBusy = false
  @observable isDirty = false
  @observable guid
  @observable key = this.guid
}
