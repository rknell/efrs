import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { observer } from 'mobx-react/native'
import GlobalStyle from '../services/GlobalStyle'

@observer
class BusyIndicator extends Component {
  render () {
    if (this.props.isBusy) {
      return (
        <View style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
          <View style={{
            width: 100,
            height: 100,
            backgroundColor: GlobalStyle.style.primaryColour,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ActivityIndicator size='large' color={GlobalStyle.style.primaryColourText} />
          </View>
        </View>
      )
    } else {
      return null
    }
  }
}

export default BusyIndicator
