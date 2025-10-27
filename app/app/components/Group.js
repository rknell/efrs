import React, { Component } from 'react'
import { View } from 'react-native'

export default class Group extends Component {
  render () {
    return (
      <View style={{ overflow: 'hidden', borderRadius: 10, borderColor: 'rgba(0,0,0,0.1)' }}>
        {this.props.children}
      </View>
    )
  }
}
