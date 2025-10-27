import React, { Component } from 'react'
import { Platform, TextInput, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react/native'
import FieldBase from './FieldBase'
import Modal from 'react-native-modal'
import Camera from 'react-native-camera'
import { observable } from 'mobx'
import IconButton from '../components/IconButton'
import IconFA from 'react-native-vector-icons/FontAwesome'
import Translate from '../services/Translate'

@observer
class TextFieldView extends Component {
  @observable model = {
    barcodeModalVisible: false
  }

  constructor (props) {
    super(props)
    this.state = {
      height: undefined
    }
    this.onChange = this.onChange.bind(this)
  }

  isEditable () {
    if (this.props.readOnly) {
      return false
    } else if (this.props.settings && this.props.settings['Read Only']) {
      return false
    } else {
      return true
    }
  }

  _getKeyboardType (keyboardType) {
    if (Platform.OS === 'ios' && (!keyboardType || keyboardType === 'default')) {
      return 'ascii-capable'
    } else {
      return keyboardType
    }
  }

  onChange (value) {
    if (typeof value === 'string') {
      this.props.onChange(value)
    }
  }

  onBarCodeRead = (value) => {
    this.props.onChange(value.data)
    this.model.barcodeModalVisible = false
  }

  showModal = () => {
    this.model.barcodeModalVisible = true
  }

  render () {
    const settings = this.props.settings || {}
    return (
      <FieldBase globalStyle={this.props.globalStyle}
        hidden={this.props.editMode ? false : settings['Hidden']}
        label={this.props.label || settings['Label'] || 'Untitled'}
        height={this.state.height + 35}
        translate={this.props.translate}
        noBorder={this.props.noBorder}
      >
        <View style={{
          flex: 1,
          borderColor: this.props.globalStyle ? this.props.globalStyle.neutralColourHighlight : 'rgba(103, 106, 108, 0.1)',
          borderWidth: 1,
          padding: 3,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <TextInput
            autoCorrect={settings['Auto Correct']}
            placeholder={this.props.translate ? Translate.do(settings['Placeholder']) : settings['Placeholder']}
            keyboardType={this._getKeyboardType(settings['Keyboard Type'])}
            autoCapitalize={settings['Auto Capitalize']}
            maxLength={settings['Max Length'] ? Number(settings['Max Length']) : undefined}
            multiline={settings['Multi Line']}
            selectTextOnFocus={settings['Select Text on Focus']}
            clearButtonMode='while-editing'
            underlineColorAndroid='transparent'
            editable={this.isEditable()}
            autoGrow
            onContentSizeChange={(evt) => {
              const height = evt.nativeEvent.contentSize.height
              if (height > 0) {
                this.setState({
                  ...this.state,
                  height: evt.nativeEvent.contentSize.height
                })
              }
            }}
            style={[{
              flex: 1,
              fontSize: 16,
              height: (settings['Multi Line'] && this.state.height < 120) ? 120 : this.state.height,
              color: this.props.globalStyle ? this.props.globalStyle.neutralColourText : 'black',
              alignSelf: 'stretch',
              padding: 0,
              textAlignVertical: 'top'
            }]}
            selectionColor={this.props.globalStyle ? this.props.globalStyle.primaryColour : 'black'}
            onChangeText={this.onChange}
            {...this.props}
          />

          {settings['Barcode scan'] && <TouchableOpacity onPress={this.showModal}>
            <IconFA name='barcode' size={20} />
          </TouchableOpacity>}

        </View>

        {this.model.barcodeModalVisible && <Modal visible={this.model.barcodeModalVisible}>
          <Camera ref={cam => (this.cameraRef = cam)}
            style={{ flex: 1 }}
            onBarCodeRead={this.onBarCodeRead}>
            <View style={{ justifyContent: 'center', flex: 1 }}><View style={{ height: 5, backgroundColor: 'red' }} /></View>
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}><IconButton name='times' label='Cancel'
              onPress={() => { this.model.barcodeModalVisible = false }} /></View>
          </Camera>

        </Modal>}
      </FieldBase>

    )
  }
}

export default TextFieldView
