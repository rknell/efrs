/* eslint-disable import/first */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

if (!__DEV__) {
  console.log = () => {}
}

import { Client, Configuration } from 'bugsnag-react-native'
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import Navigation from './app/Navigation'
import codePush from 'react-native-code-push'

const bugsnagConfig = new Configuration()
bugsnagConfig.automaticallyCollectBreadcrumbs = true
bugsnagConfig.notifyReleaseStages = ['beta', 'production']
bugsnagConfig.handlePromiseRejections = false
// eslint-disable-next-line no-unused-vars
const bugsnag = new Client(bugsnagConfig)

// Exported so it can be tested
export default class checkformsObj extends Component {
  render () {
    return (
      <Navigation bugsnag={bugsnag} />
    )
  }
}

const checkforms = codePush({ checkFrequency: 1 })(checkformsObj) // Checkfrequency 1 = on app resume

/* istanbul ignore next */
AppRegistry.registerComponent('checkforms', () => checkforms)
