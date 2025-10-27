import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { observer } from 'mobx-react/native'
import EditModeWrapper from './EditModeWrapper'
import FieldController from '../services/FieldController'
import FieldBase from '../componentViews/FieldBase'
import GlobalStyle from '../services/GlobalStyle'

@observer
class CalculatedField extends Component {
  constructor (props) {
    super(props)
    this.controller = new CalculatedFieldController(props)
    this.onPressEdit = this.onPressEdit.bind(this)
  }

  componentWillMount () {
    this.controller.initialise()
  }

  onPressEdit () {
    this.controller.viewSettings()
  }

  render () {
    if (this.props.isSearching) {
      return null
    } else {
      return (<EditModeWrapper {...this.props} onPressEdit={this.onPressEdit}>
        <FieldBase hidden={this.props.editMode ? false : this.controller.settingsObject['Hidden']}
          globalStyle={GlobalStyle.style} label={this.controller.settingsObject.Label}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text
              style={{ fontSize: 16 }}>{this.props.data.values.default !== 'undefined' ? this.props.data.values.default : ''}</Text>
          </View>
        </FieldBase>
      </EditModeWrapper>)
    }
  }
}

class CalculatedFieldController extends FieldController {
  settings = [
    {
      value: '',
      label: 'Label',
      fieldType: 'TextFieldView',
      extraProps: {}
    }, {
      value: '',
      label: 'Calculation',
      fieldType: 'TextFieldView',
      extraProps: {
        settings: { 'Multi Line': true, 'Auto Capitalize': 'none' }
      }
    }, {
      value: false,
      label: 'Hidden',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: false,
      label: 'Report When Hidden',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }
  ]
}
export default CalculatedField
