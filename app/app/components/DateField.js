import React, { Component } from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react/native'
import { computed } from 'mobx'
import EditModeWrapper from './EditModeWrapper'
import moment from 'moment'
import DateFieldView from '../componentViews/DateFieldView'
import FieldController from '../services/FieldController'
import GlobalStyle from '../services/GlobalStyle'

@observer
class DateField extends Component {
  constructor (props) {
    super(props)
    this.controller = new DateFieldController(props)
  }

  componentWillMount () {
    this.controller.initialise()
    if (!this.props.data.values.default && this.props.editMode !== true) {
      if (this.controller.settingsObject['Default Date Offset (Days)']) {
        this.props.data.values.default = moment().add(this.controller.settingsObject['Default Date Offset (Days)'].value, 'days').toDate()
      } else if (this.controller.settingsObject['Default to Today'] && this.props.isSearching !== true) {
        this.props.data.values.default = new Date()
      }
    }
  }

  render () {
    if (this.props.isSearching) return null
    return (
      <View>
        <EditModeWrapper
          {...this.props}
          onPressEdit={() => {
            this.controller.viewSettings()
          }}>
          <DateFieldView
            globalStyle={GlobalStyle.style}
            maxDate={this.controller.maxDate}
            minDate={this.controller.minDate}
            onChange={(date) => {
              this.props.data.values.default = date
            }}
            value={this.props.data.values.default}
            settings={this.controller.settingsObject}
            editMode={this.props.editMode}
            readOnly={this.props.readOnly}
          />
        </EditModeWrapper>
      </View>
    )
  }
}

class DateFieldController extends FieldController {
  constructor (props) {
    super(props)
    this.props = props
  }

  @computed
  get maxDate () {
    if (this.settingsObject['Max Days Future'] !== '') {
      return moment().add(Number(this.settingsObject['Max Days Future']), 'days').toDate()
    } else {
      return null
    }
  }

  @computed
  get minDate () {
    if (this.settingsObject['Max Days Past'] !== '') {
      return moment().subtract(Number(this.settingsObject['Max Days Past']), 'days').toDate()
    } else {
      return null
    }
  }

  settings = [{
    value: 'Date',
    label: 'Label',
    fieldType: 'TextFieldView',
    extraProps: {}
  }, {
    value: false,
    label: 'Show In Search',
    fieldType: 'QuickPickView',
    extraProps: {
      options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
    }
  }, {
    value: '',
    label: 'Max Days Future',
    fieldType: 'TextFieldView'
  }, {
    value: '',
    label: 'Max Days Past',
    fieldType: 'TextFieldView'
  }, {
    value: '',
    label: 'Default Date Offset (Days)',
    fieldType: 'TextFieldView'
  }, {
    value: false,
    label: 'Default to Today',
    fieldType: 'QuickPickView',
    extraProps: {
      options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
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
  }, {
    value: 'date',
    label: 'Data Type',
    fieldType: 'QuickPickView',
    extraProps: {
      options: [{ label: 'Date', value: 'date' }, { label: 'Time', value: 'time' }, { label: 'Date & Time', value: 'datetime' }]
    }
  }, {
    value: 'calendar',
    label: 'Initial Picker',
    fieldType: 'QuickPickView',
    extraProps: {
      options: [{ label: 'Year', value: 'year' }, { label: 'Calendar', value: 'calendar' }]
    }
  }, {
    value: false,
    label: 'Set Now Button',
    fieldType: 'QuickPickView',
    extraProps: {
      options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
    }
  }]
}

export default DateField
