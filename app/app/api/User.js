// eslint-disable-next-line no-unused-vars
import React from 'react'
import call from './call'
import GlobalState from '../services/GlobalState'
import { AsyncStorage } from 'react-native'
import { extendObservable } from 'mobx'
import jwtDecode from 'jwt-decode'
import stores from '../stores'

class UserApi {
  _setToken (token) {
    stores.networkRequestHandler.setHeader('Authorization', `bearer ${token}`)
    GlobalState.model.userToken = token
    const userpermissions = jwtDecode(token)
    if (userpermissions.permissions) {
      GlobalState.model.userPermissions = userpermissions
    } else {
      GlobalState.model.userPermissions = {}
    }
    AsyncStorage.setItem('@PASettings:authToken', token)
  }

  create (form) {
    return call('/user', 'POST', form)
  }

  delete (userId) {
    return call(`/user/${userId}`, 'DELETE')
  }

  login (credentials) {
    return call('/user/login', 'POST', credentials, true)
      .then(result => {
        if (result) {
          this._setToken(result.token)
          // Signed up, now need to get user
          stores.refreshAll()
          return this.getUser()
        } else {
          throw new Error('Failed to get login result. Please try again')
        }
      })
  }

  getUser () {
    return call('/user/current', 'GET', null, true)
      .then(user => {
        this._setToken(user.token)
        GlobalState.model.user = user
      })
  }

  setPush (push) {
    return call(`/user/setPush/${push}`)
  }

  update () {
    if (!GlobalState.model.user.password) delete GlobalState.model.user.password

    return call('/user/update', 'PUT', GlobalState.model.user)
      .then(user => {
        extendObservable(GlobalState.model, { user: user })
      })
  }

  resetPassword (username) {
    return AsyncStorage.getItem(`@login:domain`)
      .then(domain => {
        return call(`/user/invite/${domain}/${username}`)
      })
      .then(user => {
        extendObservable(GlobalState.model, { user: user })
      })
  }

  listUsers () {
    return call(`/user/listUsers`)
  }

  listGroups () {
    return call(`/user/listGroups`)
  }

  assumedDomain () {
    return call(`/user/assumedDomain`)
  }
}

export default new UserApi()
