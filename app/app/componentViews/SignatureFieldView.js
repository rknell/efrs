import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react/native'
import FieldBase from './FieldBase'
import GlobalState from '../services/GlobalState'
import SignaturePad from 'react-native-signature-pad'
import NavBar from '../components/NavBar'

@observer
class SignatureFieldView extends Component {
  render () {
    return (
      <FieldBase globalStyle={this.props.globalStyle}
        hidden={this.props.editMode ? false : this.props.settings['Hidden']} label={this.props.settings.Label}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity disabled={this.props.settings['Read Only'] || this.props.readOnly}
            style={{ flex: 1, justifyContent: 'center' }} onPress={() => {
              GlobalState.navigation.push({ view: <SignaturePadView {...this.props} /> })
            }}>
            {this.props.value
              ? <Image source={{ uri: this.props.value }} resizeMode='contain' style={{ height: 40, width: 150 }} />
              : <Text style={{ color: this.props.globalStyle ? this.props.globalStyle.primaryColour : 'dodgerblue' }}>Enter
                Signature</Text>
            }
          </TouchableOpacity>
        </View>
      </FieldBase>
    )
  }
}

class SignaturePadView extends Component {
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: this.props.globalStyle ? this.props.globalStyle.neutralColour : 'white' }}>
        <NavBar title='Signature' />
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
          <View style={{ height: 180 }}>
            <SignaturePad
              onChange={(data) => {
                this.props.onChange(data.base64DataUrl)
              }}
              style={{ flex: 1, backgroundColor: 'white' }} />
          </View>
        </View>
      </View>
    )
  }
}

export default SignatureFieldView
