import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import MultiPickerView, { MultiPickerDetail } from '../componentViews/MultiPickerView'
import { computed, observable } from 'mobx'
import _ from 'lodash'
import stores from '../stores'
import GlobalState from '../services/GlobalState'
import Translate from '../services/Translate'

@observer
class UserPickerFieldView extends Component {
  @observable model = {
    users: [],
    searchFilter: ''
  }

  @computed get selectionLabel () {
    let label = Translate.do(`None selected`)
    if (this.props.single && this.props.value) {
      const selectedUsers = stores.users.data.filter(user => user.selected)
      if (selectedUsers[0]) {
        label = selectedUsers ? `${selectedUsers[0].username}` : Translate.do('Select User')
      }
    } else if (this.props.value) {
      if (this.props.value.forEach) {
        label = `${this.props.value.length} ${Translate.do('users')}`
      } else {
        // Its a string, probably because it has changed from single to multiple
        label = `0 ${Translate.do('users')}`
      }
    }
    return label
  }

  @computed get options () {
    if (!this.model.searchFilter) {
      return this.model.users
    } else {
      return this.model.users.filter(item => item.username.indexOf(this.model.searchFilter) > -1)
    }
  }

  constructor (props) {
    super(props)
    this.setSelected = this.setSelected.bind(this)
    this.onSelect = this.onSelect.bind(this)
    this.deriveValues = this.deriveValues.bind(this)

    this.model.users = [...stores.users.data]
    this.model.users.sort((a, b) => {
      if (a.username > b.username) {
        return 1
      } else {
        return -1
      }
    })
    this.setSelected()
  }

  setSelected () {
    this.model.users.forEach(item => {
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
      if (_.includes(output, selectChanged._id)) {
        output.splice(output.indexOf(selectChanged._id), 1)
      } else {
        output.push(selectChanged._id)
      }
      return output
    }
  }

  onSelect (item) {
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
    let settings = { Label: this.props.label }
    if (this.props.settings) settings = this.props.settings

    // Because the props are being reused across two components, break them out into an object for maintainability
    const props = {
      translate: this.props.translate,
      dontTranslateOptions: true,
      readOnly: this.props.readOnly,
      editMode: this.props.editMode,
      settings: this.props.settings,
      globalStyle: this.props.globalStyle,
      label: settings.Label,
      options: this.options,
      labelPath: 'displayLabel',
      values: [{ label: this.selectionLabel }],
      pickerScreenTitle: this.props.pickerScreenTitle || settings.Label,
      onSelect: this.onSelect,
      noBorder: this.props.noBorder
    }

    if (this.props.showMenu) {
      return (<MultiPickerDetail {...props} />)
    } else {
      return (<MultiPickerView {...props} />)
    }
  }
}

export default UserPickerFieldView
