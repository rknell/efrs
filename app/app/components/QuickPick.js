import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { computed, extendObservable } from 'mobx'
import QuickPickView from '../componentViews/QuickPickView'
import EditModeWrapper from './EditModeWrapper'
import FieldController from '../services/FieldController'
import MultiPickerView from '../componentViews/MultiPickerView'
import GlobalState from '../services/GlobalState'
import GlobalStyle from '../services/GlobalStyle'
import Translate from '../services/Translate'

@observer
class QuickPick extends Component {
  constructor (props) {
    super(props)
    this.controller = new QuickPickController(props)
    this.onChange = this.onChange.bind(this)
    this.onChangeAndPop = this.onChangeAndPop.bind(this)
  }

  componentWillMount () {
    this.controller.initialise()
    this.controller.extraPropsObject['Options'].values.forEach(value => {
      extendObservable(value, { selected: value.selected || false })
    })

    let selected = []
    if (this.props.data.values.default && this.props.data.values.default.split) {
      // Sometimes a sneaky null or undefined can come in here, patch it up with an empty string
      selected = this.props.data.values.default.split(',')
    } else {
      selected = []
    }
    this.controller.extraPropsObject['Options'].values.forEach(option => { option.selected = false })
    selected.forEach(selected => {
      const option = this.controller.extraPropsObject['Options'].values.find(option => option.value === selected)
      if (option) option.selected = true
    })
  }

  onChange (item) {
    if (this.controller.settingsObject['Select Multiple Items']) {
      item.selected = !item.selected
      this.props.data.values.default = this.controller.extraPropsObject['Options'].values.reduce((result, item) => {
        if (item.selected) {
          if (result !== '') result += ', '
          result += item.label
        }
        return result
      }, '')
    } else {
      this.controller.extraPropsObject['Options'].values.forEach(item => {
        item.selected = false
      })
      this.props.data.values.default = item.value
      if (item.score) {
        this.props.data.values.score = item.score
      }
      item.selected = !item.selected
    }
  }

  onChangeAndPop (item) {
    this.onChange(item)
    if (!this.controller.settingsObject['Select Multiple Items']) {
      GlobalState.navigation.pop()
    }
  }

  @computed get _getOptions () {
    if (!this.props.data.values.default || !this.props.data.values.default.split) {
      return []
    } else {
      return this.props.data.values.default.split(',')
    }
  }

  render () {
    return (
      <EditModeWrapper {...this.props} onPressEdit={() => {
        this.controller.viewSettings()
      }}>
        {this.controller.settingsObject['Field Type'] === 'dropDown'
          ? <MultiPickerView
            globalStyle={GlobalStyle.style}
            values={this._getOptions}
            settings={this.controller.settingsObject}
            extraProps={this.controller.extraPropsObject}
            editMode={this.props.editMode}
            readOnly={this.props.readOnly || this.controller.settingsObject['Read Only']}
            onSelect={this.onChangeAndPop}
          />
          : <QuickPickView
            globalStyle={GlobalStyle.style}
            value={this.props.data.values.default}
            onChange={this.onChange}
            settings={this.controller.settingsObject}
            extraProps={this.controller.extraPropsObject}
            editMode={this.props.editMode}
            readOnly={this.props.readOnly || this.controller.settingsObject['Read Only']}
            returnFullObject
          />
        }
      </EditModeWrapper>
    )
  }
}

class QuickPickController extends FieldController {
  settings = [
    {
      value: '',
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
      value: false,
      label: 'Show In Search',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: false,
      label: 'Select Multiple Items',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: false,
      label: 'Options',
      fieldType: 'ListFieldView',
      extraProps: {
        values: [{ label: Translate.do('Yes'), value: 'Yes' }, { label: Translate.do('No'), value: 'No' }]
      }
    }, {
      value: 'quickPick',
      label: 'Field Type',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Drop Down / List', value: 'dropDown' }, { label: 'Quick Pick', value: 'quickPick' }]
      }
    }
  ]
}

export default QuickPick
