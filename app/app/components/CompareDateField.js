import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { observer } from 'mobx-react/native'
import EditModeWrapper from './EditModeWrapper'
import FieldController from '../services/FieldController'
import FieldBase from '../componentViews/FieldBase'
import GlobalStyle from '../services/GlobalStyle'

@observer
class CompareDateField extends Component {
  constructor (props) {
    super(props)
    this.controller = new CompareDateController(props)
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

class CompareDateController extends FieldController {
  settings = [
    {
      value: '',
      label: 'Label',
      fieldType: 'TextFieldView',
      extraProps: {}
    }, {
      value: [],
      label: 'First Field',
      fieldType: 'FormFieldPickerView',
      extraProps: {
        single: true
      }
    }, {
      value: [],
      label: 'Second Field',
      fieldType: 'FormFieldPickerView',
      extraProps: {
        single: true
      }
    }, {
      value: 'diffMin',
      label: 'Operation',
      fieldType: 'PickerView',
      extraProps: {
        options: [
          { label: 'Difference - Minutes', value: 'diffMin' },
          { label: 'Difference - Hours', value: 'diffHour' },
          { label: 'Difference - Hours & Minutes', value: 'diffHourMin' },
          { label: 'Difference - Days', value: 'diffDay' },
          { label: 'Difference - Days & Hours', value: 'diffDayHour' },
          { label: 'Difference - Months', value: 'diffMonth' },
          { label: 'Difference - Months & Days', value: 'diffMonthDay' },
          { label: 'Difference - Years', value: 'diffYear' },
          { label: 'Difference - Years & Months', value: 'diffYearMonth' },
          { label: 'Is First After Second', value: 'isAfter' },
          { label: 'Is First Before Second', value: 'isBefore' }
        ]
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

export default CompareDateField
