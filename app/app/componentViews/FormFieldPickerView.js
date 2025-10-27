import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import MultiPickerView from '../componentViews/MultiPickerViewV2'
import { observable } from 'mobx'
import GlobalState from '../services/GlobalState'

@observer
class FormFieldPickerView extends Component {
  @observable selected = []
  @observable output = []

  constructor (props) {
    super(props)
    this.onSelect = this.onSelect.bind(this)
    this.selected = this.props.value
    this.selected = this.selected.map(item => {
      return this.props.formController.formFields.find(formField => formField.value === item.value)
    }).filter(item => !!item)
  }

  onSelect = (item) => {
    if (this.props.single) {
      this.selected = [JSON.parse(JSON.stringify(item))]
      GlobalState.navigation.pop()
    } else {
      let index = this.selected.findIndex(selectedItem => item.value === selectedItem.value)
      if (index > -1) {
        this.selected.splice(index, 1)
      } else {
        const newItem = JSON.parse(JSON.stringify(item))
        delete newItem.field
        this.selected.push(newItem)
      }
    }
    this.props.onChange(this.selected)
  }

  render () {
    let settings = { Label: this.props.label }
    if (this.props.settings) settings = this.props.settings
    return (<MultiPickerView
      globalStyle={this.props.globalStyle}
      values={this.selected}
      label={settings.Label}
      options={this.props.formController.formFields}
      onSelect={this.onSelect}
    />)
  }
}

export default FormFieldPickerView
