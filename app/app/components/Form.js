import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { action, computed, extendObservable, observable, reaction } from 'mobx'
import { observer } from 'mobx-react/native'
import Fields from '../components/Fields'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import GlobalState from '../services/GlobalState'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import libForm from '../lib/form'
import GlobalStyle from '../services/GlobalStyle'
import Translate from '../services/Translate'

@observer
class FormView extends Component {
  @observable lastScrollY = 0

  componentWillMount () {
    this.controller = new FormController(this.props)
  }

  componentWillUnmount () {
    this.controller.dispose()
  }

  pagePermissions (page) {
    let canView = true
    let canEdit = true

    if (page.viewGroups && page.viewGroups.length && GlobalState.model.userPermissions.groups) {
      canView = false
      GlobalState.model.userPermissions.groups.forEach(group => {
        page.viewGroups.forEach(restrictedGroup => {
          if (group === restrictedGroup) {
            canView = true
          }
        })
      })
    }

    if (page.editGroups && page.editGroups.length && GlobalState.model.userPermissions.groups) {
      canEdit = false
      GlobalState.model.userPermissions.groups.forEach(group => {
        page.editGroups.forEach(restrictedGroup => {
          if (group === restrictedGroup) {
            canEdit = true
          }
        })
      })
    }

    if (canEdit) canView = true

    return {
      canView, canEdit
    }
  }

  statusUI () {
    if (this.props.form.status.name) {
      return (
        <View style={{ backgroundColor: 'lightyellow', alignItems: 'center', padding: 5 }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Status: {this.props.form.status.name}</Text>
        </View>
      )
    } else {
      return null
    }
  }

  handleScrollEvent (event) {
    this.lastScrollY = event.nativeEvent.contentOffset.y
  }

  isReadOnly = () => {
    if (GlobalState.model.userPermissions.permissions.canEditResponses) {
      return false
    } else if (this.props.isEditing) {
      // Cant edit responses and editing
      return true
    } else {
      // Cant edit responses, but not editing, creating a new one
      return false
    }
  }

  render () {
    const form = this.props.form

    if (form.pages.length > 1) {
      return (<View style={{ flex: 1 }}>
        {this.statusUI()}
        <ScrollableTabView
          style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}
          prerenderingSiblingsNumber={1}
          onChangeTab={this.props.onChangePage}
          tabBarUnderlineStyle={{ backgroundColor: GlobalStyle.style.primaryColour }}
          tabBarActiveTextColor={GlobalStyle.style.neutralColourText}
          tabBarInactiveTextColor={GlobalStyle.style.disabledText}
          locked
        >
          {form.pages.map((page, index) => {
            const pagePermissions = this.pagePermissions(page)
            if (!pagePermissions.canView) {
              return null
            } else {
              return (
                <KeyboardAwareScrollView
                  enableAutomaticScroll={this.controller.model.disableScroll !== true}
                  enableResetScrollToCoords={this.controller.model.disableScroll !== true}
                  extraHeight={300}
                  tabLabel={page.name} key={index} style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
                  <Fields
                    editMode={this.props.editMode}
                    fields={page.groups[0].fields}
                    formController={this.controller}
                    readOnly={!pagePermissions.canEdit || this.isReadOnly()}
                    isSearching={this.props.isSearching}
                  />
                </KeyboardAwareScrollView>)
            }
          })}
        </ScrollableTabView></View>)
    } else {
      const page = form.pages[0]
      const pagePermissions = this.pagePermissions(page)
      if (!pagePermissions.canView) {
        return <Text>Error: You have access to this form, but do not have access to any of the content. Please talk to
          your administrator, log out and try again.</Text>
      } else {
        return (<View style={{ flex: 1 }}>
          {this.statusUI()}
          <KeyboardAwareScrollView
            enableAutomaticScroll={this.controller.model.disableScroll !== true}
            enableResetScrollToCoords={this.controller.model.disableScroll !== true}
            extraHeight={300}
            tabLabel={page.name} style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
            <Fields
              editMode={this.props.editMode}
              fields={page.groups[0].fields}
              formController={this.controller}
              readOnly={!pagePermissions.canEdit || this.isReadOnly()}
              isSearching={this.props.isSearching}
            />
          </KeyboardAwareScrollView>
        </View>)
      }
    }
  }
}

export class FormController {
  @observable model = {
    disableScroll: false
  }

  @computed get formFields () {
    let output = []

    if (this.props.form) {
      this.props.form.pages.forEach((page, pageIndex) => {
        page.groups[0].fields.forEach((field, fieldIndex) => {
          // Filter out read only fields
          let label = field.settings.reduce((result, item) => {
            if (item.label === 'Label') {
              return item.value
            } else {
              return result
            }
          }, '')
          if (field.values && label) {
            output.push({
              label: `${page.name} - ${label}`,
              value: field.fieldId,
              field: field
            })
          }
        })
      })
    }

    output = [...output, {
      label: Translate.do('Response - Created At'),
      value: 'res-createdAt',
      field: {
        fieldType: 'Date',
        settings: [{
          label: 'Default to Today',
          value: true
        }, {
          value: 'multiple',
          label: 'Picker Type'
        }, {
          value: 'Created At',
          label: 'Label'
        }, {
          label: 'Data Type',
          value: 'datetime'
        }]
      }
    }, {
      label: Translate.do('Response - Created By'),
      value: 'res-createdBy',
      field: {
        fieldType: 'UserPicker',
        settings: [{
          value: 'single',
          label: 'Picker Type'
        }, {
          value: 'Created By',
          label: 'Label'
        }]
      }
    }, {
      label: Translate.do('Response - Status'),
      value: 'res-status',
      field: {
        fieldType: 'Text',
        settings: [{
          value: 'Status',
          label: 'Label'
        }]
      }
    }, {
      label: Translate.do('Response - Assigned To User'),
      value: 'res-assignedToUser',
      field: {
        fieldType: 'UserPicker',
        settings: [{
          value: 'multiple',
          label: 'Picker Type'
        }, {
          value: 'Assigned to User',
          label: 'Label'
        }]
      }
    }, {
      label: Translate.do('Current - User'),
      value: 'cur-user',
      field: {
        fieldType: 'UserPicker',
        settings: [{
          value: 'single',
          label: 'Picker Type'
        }, {
          value: 'Current User',
          label: 'Label'
        }]
      }
    }, {
      label: Translate.do('Current - User Group'),
      value: 'cur-group',
      field: {
        fieldType: 'GroupPicker',
        settings: [{
          value: 'single',
          label: 'Picker Type'
        }, {
          value: 'Current Group',
          label: 'Label'
        }]
      }
    }]

    console.log(output)
    return output
  }

  dispose () {
    this.reactionDisposer()
    this.reactionDisposerStatus()
  }

  constructor (props) {
    this.props = props

    this.props.form = props.form

    if (!this.props.form.status) {
      extendObservable(this.props.form, {
        status: {
          assignedToUser: null,
          assignedToGroup: null,
          name: '',
          log: []
        }
      })
    }

    this.reactionDisposer = reaction(
      () => this.props.form.pages.map(page =>
        page.groups.map(group =>
          group.fields.map(field => {
            if (field.values) return field.values.default
          }))),
      () => libForm.applyRules(this.props.form, !!this.props.isSearching || !!this.props.editMode, GlobalState.current()),
      { delay: 100 }
    )
    this.reactionDisposerStatus = reaction(
      () => [
        this.props.form.status.name,
        this.props.form.status.assignedToGroup,
        this.props.form.status.assignedToUser
      ],
      () => libForm.applyRules(this.props.form, !!this.props.isSearching || !!this.props.editMode, GlobalState.current()),
      { delay: 100 }
    )
    libForm.applyRules(this.props.form, !!this.props.isSearching || !!this.props.editMode, GlobalState.current())
  }

  @action
  setStatus (newStatus) {
    this.props.form.status.name = newStatus
  }

  @action
  assignToUser (userId) {
    this.props.form.status.assignedToUser = userId
    this.props.form.status.assignedToGroup = null
  }

  @action
  assignToGroup (groupId) {
    this.props.form.status.assignedToGroup = groupId
    this.props.form.status.assignedToUser = null
  }

  @action
  unassignAll () {
    this.props.form.status.assignedToGroup = null
    this.props.form.status.assignedToUser = null
  }
}

export default FormView
