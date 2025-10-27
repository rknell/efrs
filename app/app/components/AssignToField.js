import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import EditModeWrapper from './EditModeWrapper'
import FieldController from '../services/FieldController'
import GlobalStyle from '../services/GlobalStyle'
import UserPickerFieldView from '../componentViews/UserPickerFieldView'
import GroupPickerFieldView from '../componentViews/GroupPickerFieldView'

@observer
class AssignToField extends Component {
  constructor (props) {
    super(props)
    this.controller = new AssignToFieldController(props)
  }

  componentWillMount () {
    this.controller.initialise()
  }

  setValue = (value) => {
    if (this.controller.settingsObject['Picker Type'] === 'user') {
      this.props.formController.assignToUser(value)
    } else {
      this.props.formController.assignToGroup(value)
    }
    this.props.data.values.default = value
  }

  render () {
    return (
      <EditModeWrapper {...this.props} onPressEdit={() => {
        this.controller.viewSettings()
      }}>
        {this.controller.settingsObject['Picker Type'] === 'user'
          ? <UserPickerFieldView
            globalStyle={GlobalStyle.style}
            single
            onChange={this.setValue}
            value={this.props.data.values.default}
            settings={this.controller.settingsObject}
          />
          : <GroupPickerFieldView
            globalStyle={GlobalStyle.style}
            single
            onChange={this.setValue}
            value={this.props.data.values.default}
            settings={this.controller.settingsObject}
          />
        }
      </EditModeWrapper>
    )
  }
}

class AssignToFieldController extends FieldController {
  settings = [
    {
      value: 'Assign to',
      label: 'Label',
      fieldType: 'TextFieldView',
      extraProps: {}
    }, {
      value: 'user',
      label: 'Picker Type',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'User', value: 'user' }, { label: 'Group', value: 'group' }]
      }
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

export default AssignToField
