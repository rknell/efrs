import React, { Component } from 'react'
import { View, TextInput, Platform } from 'react-native'
import IconFA from 'react-native-vector-icons/FontAwesome'
import GlobalStyle from '../services/GlobalStyle'

export default class SearchTextInput extends Component {
  render () {
    return (
      <View style={{ padding: 16, backgroundColor: GlobalStyle.style.primaryColour }}>
        <View style={{ backgroundColor: 'white', borderRadius: 10, overflow: 'hidden', minHeight: 40, flexDirection: 'row' }}>
          <IconFA style={{ position: 'absolute', left: 12, top: 8, color: 'rgba(0,0,0,0.3)' }} name='search' size={20} />
          <TextInput
            placeholder='Search'
            autoCapitalize='none'
            underlineColorAndroid='transparent'
            autoCorrect={false}
            style={{ marginLeft: 40, flex: 1, fontSize: 16, height: Platform.OS === 'android' ? 40 : undefined }}
            onChangeText={this.props.onChange}
            value={this.props.value} />
        </View>
      </View>
    )
  }
}
