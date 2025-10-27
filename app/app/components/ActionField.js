import React, { Component } from 'react'
import { Button } from 'react-native'
import { observer } from 'mobx-react/native'
import { observe } from 'mobx'
import FieldController from '../services/FieldController'
import EditModeWrapper from '../components/EditModeWrapper'

export class ActionFieldController extends FieldController {
  settings = [{
    value: '',
    label: 'Label',
    fieldType: 'TextFieldView',
    extraProps: {}
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
    value: '',
    label: 'Change Status To',
    fieldType: 'TextFieldView',
    extraProps: {}
  }, {
    value: '',
    label: 'Assign To Group',
    fieldType: 'GroupPickerFieldView',
    extraProps: {
      single: true
    }
  }, {
    value: '',
    label: 'Assign To User',
    fieldType: 'UserPickerFieldView',
    extraProps: {
      single: true
    }
  }, {
    value: false,
    label: 'Unassign All',
    fieldType: 'QuickPickView',
    extraProps: {
      options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
    }
  }]

  doAction = () => {
    if (this.settingsObject['Change Status To']) this.props.formController.setStatus(this.settingsObject['Change Status To'])
    if (this.settingsObject['Assign To User']) this.props.formController.assignToUser(this.settingsObject['Assign To User'])
    if (this.settingsObject['Assign To Group']) this.props.formController.assignToGroup(this.settingsObject['Assign To Group'])
    if (this.settingsObject['Unassign All']) this.props.formController.unassignAll()
  }

  resetField (label) {
    this.props.data.settings.forEach(setting => {
      if (setting.label === label) {
        this.settings.forEach(settingInfo => {
          if (settingInfo.label === setting.label) {
            setting.value = settingInfo.value
          }
        })
      }
    })
  }

  resetOnChange (changedSetting, resetSetting) {
    this.props.data.settings.forEach(setting => {
      if (setting.label === changedSetting) {
        this.disposables.push(observe(setting, 'value', (changeObj) => {
          if (changeObj.newValue) {
            if (changeObj.newValue && changeObj.newValue.forEach) {
              // Array
              if (changeObj.newValue.length) this.resetField(resetSetting)
            } else if (changeObj.newValue) {
              this.resetField(resetSetting)
            }
          }
        }))
      }
    })
  }
}

@observer
class ActionField extends Component {
  constructor (props) {
    super(props)
    this.controller = new ActionFieldController(props)
  }

  componentWillMount () {
    this.controller.initialise()
    this.controller.resetOnChange('Assign To User', 'Assign To Group')
    this.controller.resetOnChange('Assign To User', 'Unassign All')
    this.controller.resetOnChange('Assign To Group', 'Assign To User')
    this.controller.resetOnChange('Assign To Group', 'Unassign All')
    this.controller.resetOnChange('Unassign All', 'Assign To User')
    this.controller.resetOnChange('Unassign All', 'Assign To Group')
  }

  componentWillUnmount () {
    this.controller.dispose()
  }

  render () {
    return (
      <EditModeWrapper {...this.props} onPressEdit={() => {
        this.controller.viewSettings()
      }}>
        <Button title={this.controller.settingsObject['Label']}
          disabled={this.props.editMode || this.controller.settingsObject['Read Only']}
          onPress={this.controller.doAction} />
      </EditModeWrapper>
    )
  }
}

export default ActionField
