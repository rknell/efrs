import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { observer } from 'mobx-react/native'
import EditModeWrapper from './EditModeWrapper'
import FieldController from '../services/FieldController'
import FieldBase from '../componentViews/FieldBase'
import GlobalStyle from '../services/GlobalStyle'

@observer
class ScoreCalculatorField extends Component {
  constructor (props) {
    super(props)
    this.controller = new ScoreCalculatorFieldController(props)
  }

  componentWillMount () {
    this.controller.initialise()
  }

  render () {
    return (
      <EditModeWrapper {...this.props} onPressEdit={() => {
        this.controller.viewSettings()
      }}>
        <FieldBase hidden={this.props.editMode ? false : this.controller.settingsObject['Hidden']}
          globalStyle={GlobalStyle.style} label={this.controller.settingsObject.Label}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16 }}>
              {this.props.data.values.default !== 'undefined' ? this.props.data.values.default : ''}
            </Text>
          </View>
        </FieldBase>
      </EditModeWrapper>
    )
  }
}

class ScoreCalculatorFieldController extends FieldController {
  settings = [
    {
      value: 'Score',
      label: 'Label',
      fieldType: 'TextFieldView',
      extraProps: {}
    }, {
      value: false,
      label: 'Calculation Type',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Mean', value: 'mean' }, { label: 'Sum', value: 'sum' }]
      }
    }, {
      value: [],
      label: 'Fields used in calculation',
      fieldType: 'FormFieldPickerView',
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
    }
  ]
}

export default ScoreCalculatorField
