import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import MultiPickerView, { MultiPickerDetail } from '../componentViews/MultiPickerView'
import api from '../api'
import { autorun, computed, observable } from 'mobx'
import Translate from '../services/Translate'
import GlobalState from '../services/GlobalState'

@observer
class GroupPickerFieldView extends Component {
  @observable model = {
    groups: []
  }

  @computed get selectionLabel () {
    let label = Translate.do(`None selected`)
    if (this.props.single && this.props.value) {
      const selectedItems = []
      this.model.groups.forEach(item => {
        if (item.selected) selectedItems.push(item)
      })
      if (selectedItems[0]) {
        label = selectedItems ? `${selectedItems[0].name}` : Translate.do('Select Group')
      }
    } else if (this.props.value) {
      label = `${this.props.value.length} ${Translate.do('groups')}`
    }
    return label
  }

  constructor (props) {
    super(props)

    api.user.listGroups()
      .then(groups => {
        groups.forEach(function (group) {
          group.selected = false
        })
        this.model.groups = groups
        this.setSelected()
      })
    this.setSelectedAutorun = autorun(() => this.setSelected())
  }

  setSelected () {
    this.model.groups.forEach(item => {
      item.selected = false
      if (this.props.single) {
        if (this.props.value === item._id) item.selected = true
      } else if (this.props.value) {
        this.props.value.forEach(userId => {
          if (userId === item._id) item.selected = true
        })
      }
    })
  }

  deriveValues (selectChanged) {
    if (this.props.single) {
      if (this.props.value === selectChanged._id) {
        return null
      } else {
        return selectChanged._id
      }
    } else {
      let output = JSON.parse(JSON.stringify(this.props.value))
      if (output.constructor !== Array) output = []
      const itemIndex = output.indexOf(selectChanged._id)
      if (itemIndex > -1) {
        output.splice(output.indexOf(selectChanged._id), 1)
      } else {
        output.push(selectChanged._id)
      }
      return output
    }
  }

  componentWillUnmount () {
    this.setSelectedAutorun()
  }

  onSelect = item => {
    this.props.onChange(this.deriveValues(item))
    // TODO: fix this mess
    // Super hacky, problem is the value is not being updated immediately and
    // passed back down through the props fast enough to react correctly.
    setTimeout(() => {
      this.setSelected()
    }, 50)
    if (this.props.single) {
      GlobalState.navigation.pop()
    }
  }

  render () {
    var settings = { Label: this.props.label }
    if (this.props.settings) settings = this.props.settings
    const props = {
      translate: this.props.translate,
      dontTranslateOptions: true,
      readOnly: this.props.readOnly,
      globalStyle: this.props.globalStyle,
      label: settings.Label,
      options: this.model.groups,
      labelPath: 'name',
      values: [{ label: this.selectionLabel }],
      pickerScreenTitle: this.props.pickerScreenTitle || settings.Label,
      onSelect: this.onSelect,
      noBorder: this.props.noBorder
    }

    if (this.props.showMenu) {
      return <MultiPickerDetail {...props} />
    } else {
      return <MultiPickerView {...props} />
    }
  }
}

export default GroupPickerFieldView
