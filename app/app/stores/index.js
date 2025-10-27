import React from 'react'
import NetworkRequestHandler from './NetworkRequestHandler'
import GlobalState from '../services/GlobalState'
import { Alert, AsyncStorage } from 'react-native'
import Home from '../pages/Home'
import Domain from '../pages/Domain'
import UsersStore from './UsersStore'
import GroupsStore from './GroupsStore'
import ReportStore from './ReportStore'
import ResponseStore from './ResponseStore'
import FormStore from './FormStore'
import AssignedToGroupStore from './AssignedToGroupStore'
import AssignedToUserStore from './AssignedToUserStore'
import { computed } from 'mobx'
import TranslationStore from './TranslationStore'
import Translate from '../services/Translate'
import ScheduledResponsesStore from './ScheduledResponses'

class Stores {
  API_PATH = 'https://www.efrs.io/api'
  // API_PATH = 'http://192.168.1.8:1676/api'
  // API_PATH = 'http://localhost:1676/api'

  constructor () {
    this.errorHandler = this.errorHandler.bind(this)
    this.networkRequestHandler = new NetworkRequestHandler(this.API_PATH, false, this.errorHandler)

    this.groups = new GroupsStore(this.networkRequestHandler)
    this.reports = new ReportStore(this.networkRequestHandler)
    this.responses = new ResponseStore(this.networkRequestHandler, this)
    this.forms = new FormStore(this.networkRequestHandler)
    this.assignedToGroup = new AssignedToGroupStore(this.networkRequestHandler)
    this.assignedToUser = new AssignedToUserStore(this.networkRequestHandler)
    this.users = new UsersStore(this.networkRequestHandler)
    this.translations = new TranslationStore(this.networkRequestHandler)
    this.scheduledResponses = new ScheduledResponsesStore(this.networkRequestHandler)

    this.stores = [
      this.groups, this.reports, this.responses, this.forms, this.assignedToGroup, this.assignedToUser, this.users, this.scheduledResponses
    ]
    this.initialise()
  }

  initialise = async () => {
    const userToken = await this.loadNetworkCredentials()

    if (userToken) {
      this.refreshAll()
    }
  }

  refreshAll () {
    if (this.networkRequestHandler.headers['Authorization']) {
      this.stores.forEach(store => store.refresh())
    }
  }

  clearAll = async () => {
    for (let store of this.stores) {
      await store.clearCached()
    }
  }

  async errorHandler (error = {}) {
    if (error.status === 401) {
      const domain = await AsyncStorage.getItem(`@login:domain`)
      if (domain) {
        // User has logged in before, go to home
        GlobalState.navigation.resetTo({ view: <Home /> })
      } else {
        GlobalState.navigation.resetTo({ view: <Domain /> })
      }
    } else if (error.body) {
      // Using a timeout because mobx has a problem with sync with the system alert.
      if (error.body.message) {
        Alert.alert(Translate.do('Error'), Translate.do(error.body.message))
      } else {
        Alert.alert(Translate.do('Error'), Translate.do('An unknown server error occurred'))
      }
      throw (error)
    } else {
      throw (error)
    }
  }

  loadNetworkCredentials = async () => {
    const userToken = await AsyncStorage.getItem('@PASettings:authToken')

    if (userToken) {
      this.networkRequestHandler.setHeader('Authorization', `bearer ${userToken}`)
    }
    return userToken
  }

  @computed get outbox () {
    return [
      ...this.forms.data.filter(item => item.isDirty),
      ...this.responses.data.filter(item => item.isDirty)
    ]
  }

  outboxSync = async () => {
    for (let item of this.outbox) {
      await item.sync()
    }
  }
}

export default new Stores()
