import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import EditModeWrapper from './EditModeWrapper'
import FieldController from '../services/FieldController'
import GlobalStyle from '../services/GlobalStyle'
import GroupPickerFieldView from '../componentViews/GroupPickerFieldView'

@observer
class GroupPickerField extends Component {
  constructor (props) {
    super(props)
    this.controller = new GroupPickerController(props)
  }

  componentWillMount () {
    this.controller.initialise()
  }

  render () {
    return (
      <EditModeWrapper {...this.props} onPressEdit={() => {
        this.controller.viewSettings()
      }}>
        <GroupPickerFieldView
          globalStyle={GlobalStyle.style}
          settings={this.controller.settingsObject}
          value={this.props.data.values.default}
          onChange={(text) => {
            this.props.data.values.default = text
          }}
          single={this.controller.settingsObject['Picker Type'] === 'single'}
          editMode={this.props.editMode}
          readOnly={this.props.readOnly}
        />
      </EditModeWrapper>
    )
  }
}

class GroupPickerController extends FieldController {
  settings = [{
    value: 'Group',
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
  }, {
    value: 'multiple',
    label: 'Picker Type',
    fieldType: 'QuickPickView',
    extraProps: {
      options: [{ label: 'Single Group', value: 'single' }, { label: 'Multiple Groups', value: 'multiple' }]
    }
  }, {
    value: false,
    label: 'Show In Search',
    fieldType: 'QuickPickView',
    extraProps: {
      options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
    }
  }]
}

export default GroupPickerField
