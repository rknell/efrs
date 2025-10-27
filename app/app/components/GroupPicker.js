import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import MultiPickerView from '../componentViews/MultiPickerView'
import { observable } from 'mobx'
import GlobalStyle from '../services/GlobalStyle'
import stores from '../stores'
import Translate from '../services/Translate'

@observer
class GroupPicker extends Component {
  @observable model = {
    groups: []
  }

  constructor (props) {
    super(props)

    const groups = stores.groups.data
    groups.forEach(function (group) {
      group.selected = false
    })
    this.model.groups = groups
    this.setSelected()
  }

  setSelected () {
    this.model.groups.forEach(group => {
      group.selected = false
      this.props.values.forEach(groupId => {
        if (groupId === group._id) group.selected = true
      })
    })
  }

  render () {
    setTimeout(this.setSelected.bind(this), 1)
    return (
      <MultiPickerView
        translate={this.props.translate}
        globalStyle={GlobalStyle.style}
        label={this.props.label}
        options={this.model.groups}
        labelPath='name'
        values={[{ label: this.props.values.length ? `${this.props.values.length} ${Translate.do('groups')}` : Translate.do(`Available to everyone`) }]}
        pickerScreenTitle={this.props.pickerScreenTitle || this.props.label}
        onSelect={this.props.onSelect} />
    )
  }
}

export default GroupPicker
