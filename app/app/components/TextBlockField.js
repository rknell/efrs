import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { observer } from 'mobx-react/native'
import EditModeWrapper from './EditModeWrapper'
import FieldController from '../services/FieldController'
import GlobalStyle from '../services/GlobalStyle'

@observer class TextBlockField extends Component {
  constructor (props) {
    super(props)
    this.controller = new TextBlockFieldController(props)
  }

  componentWillMount () {
    this.controller.initialise()
  }

  render () {
    if (this.props.editMode || !this.controller.settingsObject['Hidden']) {
      return (
        <EditModeWrapper {...this.props} onPressEdit={() => {
          this.controller.viewSettings()
        }}>
          <View style={{ padding: 20, borderWidth: 2, borderColor: this.controller.settingsObject['Border Colour'] }}>
            <Text style={{
              color: this.controller.settingsObject['Text Colour'] || GlobalStyle.style.neutralColourText,
              textAlign: this.controller.settingsObject['Alignment'],
              fontWeight: this.controller.settingsObject['Bold'],
              fontStyle: this.controller.settingsObject['Italic'],
              fontSize: Number(this.controller.settingsObject['Size'])
            }}>
              {this.props.data.values.default || this.controller.settingsObject['Content']}
            </Text>
          </View>
        </EditModeWrapper>
      )
    } else {
      return null
    }
  }
}

class TextBlockFieldController extends FieldController {
  settings = [
    {
      value: '',
      label: 'Content',
      fieldType: 'TextFieldView',
      extraProps: {
        multiline: true
      }
    }, {
      value: false,
      label: 'Hidden',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: 'left',
      label: 'Alignment',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [
          { label: 'Left', value: 'left' },
          { label: 'Right', value: 'right' },
          { label: 'Center', value: 'center' }
        ]
      }
    }, {
      value: 'normal',
      label: 'Italic',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: 'italic' }, { label: 'No', value: 'normal' }]
      }
    }, {
      value: 'normal',
      label: 'Bold',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: 'bold' }, { label: 'No', value: 'normal' }]
      }
    }, {
      value: '12',
      label: 'Size',
      fieldType: 'TextFieldView',
      extraProps: {}
    }, {
      value: 'transparent',
      label: 'Border Colour',
      fieldType: 'ColourPickerView',
      extraProps: {}
    }, {
      value: 'rgb(0,0,0)',
      label: 'Text Colour',
      fieldType: 'ColourPickerView',
      extraProps: {}
    }
  ]
}

export default TextBlockField
