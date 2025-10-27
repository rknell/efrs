import React, { Component } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import IconFa from 'react-native-vector-icons/FontAwesome'
import IconIonicon from 'react-native-vector-icons/Ionicons'
import GlobalStyle from '../services/GlobalStyle'
import Translate from '../services/Translate'

export default class IconButton extends Component {
  getIcon = () => {
    if (this.props.name) {
      if (this.props.iconset === 'ionicons') {
        return <IconIonicon name={this.props.name} size={18} color={GlobalStyle.style.primaryColourText} />
      } else {
        return <IconFa name={this.props.name} size={18} color={GlobalStyle.style.primaryColourText} />
      }
    } else {
      return null
    }
  }

  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress} disabled={this.props.isDisabled}>
        <View style={[{
          padding: 6,
          minWidth: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 2,
          backgroundColor: this.props.isDisabled ? GlobalStyle.style.primaryColourDisabled : GlobalStyle.style.primaryColour,
          flexDirection: 'row'
        }, this.props.style]}>
          {this.getIcon()}
          {!!this.props.label && !this.props.isBusy &&
          <Text style={{ fontSize: 18, color: GlobalStyle.style.primaryColourText }}>&nbsp;{this.props.translate ? Translate.do(this.props.label) : this.props.label}</Text>
          }
          {!!this.props.isBusy && <ActivityIndicator />}
        </View>
      </TouchableOpacity>
    )
  }
}
