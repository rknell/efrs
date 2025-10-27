import React, { Component } from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react/native'
import EditModeWrapper from './EditModeWrapper'
import FieldController from '../services/FieldController'
import SignatureFieldView from '../componentViews/SignatureFieldView'
import GlobalStyle from '../services/GlobalStyle'

@observer
class SignatureField extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.controller = new QuickPickController(props)
  }

  componentWillMount () {
    this.controller.initialise()
  }

  onChange (value) {
    this.props.data.values.default = value
  }

  render () {
    return (
      <View>
        <EditModeWrapper {...this.props} onPressEdit={() => {
          this.controller.viewSettings()
        }}>
          <SignatureFieldView
            globalStyle={GlobalStyle.style}
            value={this.props.data.values.default}
            onChange={this.onChange}
            settings={this.controller.settingsObject}
            editMode={this.props.editMode}
            readOnly={this.props.readOnly}
          />
        </EditModeWrapper>
      </View>
    )
  }
}

class QuickPickController extends FieldController {
  settings = [
    {
      value: 'Signature',
      label: 'Label',
      fieldType: 'TextFieldView',
      extraProps: {}
    }, {
      value: false,
      label: 'Required',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: false,
      label: 'Read Only',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
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
  ];
}

export default SignatureField
