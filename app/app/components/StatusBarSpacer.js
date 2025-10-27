import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'

class StatusBarSpacer extends Component {
  render () {
    if (Platform.OS === 'ios') {
      return (<View style={{ height: 22 }}><StatusBar /></View>)
    } else {
      return null
    }
  }
}

export default StatusBarSpacer
