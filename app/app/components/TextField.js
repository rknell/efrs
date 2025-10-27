import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import TextFieldView from '../componentViews/TextFieldView'
import EditModeWrapper from './EditModeWrapper'
import FieldController from '../services/FieldController'
import GlobalStyle from '../services/GlobalStyle'

@observer
class TextField extends Component {
  constructor (props) {
    super(props)
    this.controller = new TextFieldController(props)
  }

  componentWillMount () {
    this.controller.initialise()
  }

  render () {
    return (
      <EditModeWrapper {...this.props} onPressEdit={() => {
        this.controller.viewSettings()
      }}>
        <TextFieldView
          globalStyle={GlobalStyle.style}
          settings={this.controller.settingsObject}
          value={this.props.data.values.default}
          onChange={(text) => {
            this.props.data.values.default = text
          }}
          editMode={this.props.editMode}
          readOnly={this.props.readOnly}
        />
      </EditModeWrapper>
    )
  }
}

class TextFieldController extends FieldController {
  settings = [
    {
      value: '',
      label: 'Label',
      fieldType: 'TextFieldView',
      extraProps: {}
    }, {
      value: '',
      label: 'Placeholder',
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
    }, {
      value: false,
      label: 'Show In Search',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: '',
      label: 'Advanced Settings',
      fieldType: 'HeaderFieldView',
      extraProps: {}
    }, {
      value: true,
      label: 'Auto Correct',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: false,
      label: 'Multi Line',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: false,
      label: 'Select Text on Focus',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: '',
      label: 'Max Length',
      fieldType: 'TextFieldView',
      extraProps: {}
    }, {
      value: 'default',
      label: 'Keyboard Type',
      fieldType: 'PickerView',
      extraProps: {
        options: [
          { label: 'Default', value: 'default' },
          { label: 'Numeric', value: 'numeric' },
          { label: 'Email Address', value: 'email-address' },
          { label: 'Phone Pad', value: 'phone-pad' }
        ]
      }
    }, {
      value: false,
      label: 'Barcode scan',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: 'sentences',
      label: 'Auto Capitalize',
      fieldType: 'PickerView',
      extraProps: {
        options: [
          { label: 'All Caps', value: 'characters' },
          { label: 'Each word', value: 'words' },
          { label: 'Sentences', value: 'sentences' },
          { label: 'None', value: 'none' }
        ]
      }
    }
  ];
}

export default TextField
