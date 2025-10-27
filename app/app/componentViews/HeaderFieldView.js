import React, { Component } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react/native'
import IconFA from 'react-native-vector-icons/FontAwesome'
import Translate from '../services/Translate'

@observer
class HeaderFieldView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      height: null
    }
  }

  render () {
    let settings = this.props.settings
    if (!settings) {
      settings = {}
    }

    if (settings['Hidden'] && !this.props.editMode) {
      return null
    } else {
      return (
        <View style={{
          overflow: 'hidden',
          backgroundColor: this.props.globalStyle ? this.props.globalStyle.neutralColourOffset : '#f3f3f4',
          borderBottomColor: this.props.globalStyle ? this.props.globalStyle.neutralColourHighlight : '#d6d6d7',
          borderBottomWidth: 1,
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: this.props.globalStyle ? this.props.globalStyle.neutralColourText : 'rgb(103, 106, 108)'
          }}>{Translate.do(settings['Label'] || this.props.label || '').trim()}</Text>
          {!!this.props.refresh && !this.props.isRefreshing &&
          <TouchableOpacity style={{ padding: 5, paddingLeft: 15, paddingRight: 15 }}>
            <IconFA name='refresh' onPress={this.props.refresh} />
          </TouchableOpacity>}

          {!!this.props.isRefreshing &&
          <View style={{ padding: 5, paddingLeft: 15, paddingRight: 15 }}>
            <ActivityIndicator />
          </View>
          }

        </View>
      )
    }
  }
}

export default HeaderFieldView
