import { Alert } from 'react-native'
import GlobalState from '../services/GlobalState'
import OfflineCache from './OfflineCache'
import Home from '../pages/Home'
import React from 'react'
import DeviceInfo from 'react-native-device-info'
import Translate from '../services/Translate'

const logNetwork = false

export default function call (endpoint, method = 'GET', body, ignoreError, options) {
  return new Promise((resolve, reject) => {
    if (!options || !options.hideBusy) setTimeout(() => GlobalState.model.isBusy++)

    if (body) {
      body = JSON.stringify(body)
    }

    let response

    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Push-Token': GlobalState.model.pushToken,
      'X-Build': DeviceInfo.getBuildNumber(),
      'X-System-Version': DeviceInfo.getSystemVersion(),
      'X-System-Brand': DeviceInfo.getBrand(),
      'X-System-Model': DeviceInfo.getModel()
    }

    if (GlobalState.model.userToken) {
      headers['Authorization'] = 'bearer ' + GlobalState.model.userToken
    }
    if (logNetwork) console.log('Calling!', GlobalState.apiPath + endpoint, method, body, headers)
    fetch(GlobalState.apiPath + endpoint, {
      method,
      headers: headers,
      body: body
    })
      .then((_response) => {
        response = _response
        return response.json()
      })
      .then((responseJson) => {
        if (response.ok) {
          if (logNetwork) console.log('SUCCESS', endpoint, method, responseJson)
          OfflineCache.setCache(endpoint, method, body, responseJson)
          resolve(responseJson)
        } else {
          if (logNetwork) console.log('ERROR!', endpoint, method, response)
          response.body = responseJson

          if (response.status === 401) {
            GlobalState.navigation.resetTo({ view: <Home /> })
          } else {
            // Using a timeout because mobx has a problem with sync with the system alert.
            if (!ignoreError) {
              setTimeout(() => {
                if (response.body.message) {
                  Alert.alert(Translate.do('Error'), response.body.message)
                } else {
                  Alert.alert(Translate.do('Error'), Translate.do('An unknown server error occurred'))
                }
              }, 1)
            }
          }
          reject(response)
        }
      })
      .catch((error) => {
        if (logNetwork) console.log('NETWORK ERROR', endpoint, method, body, error)
        OfflineCache.getCache(endpoint, method, body)
          .then(resolve)
          .catch((err) => {
            Alert.alert(Translate.do('Error'), Translate.do('An unknown network error occurred'))
            reject(err)
          })
      })
      .finally(() => {
        if (!options || !options.hideBusy) setTimeout(() => GlobalState.model.isBusy--)
      })
  })
}
