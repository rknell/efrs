import React, { Component } from 'react'
import { Alert, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import NavBar from '../components/NavBar'
import GlobalState from '../services/GlobalState'
import TextFieldView from '../componentViews/TextFieldView'
import api from '../api'
import { observable } from 'mobx'
import { observer } from 'mobx-react/native'
import MultiPickerView from '../componentViews/MultiPickerView'
import UserManagement from '../pages/UserManagement'
import GlobalStyle from '../services/GlobalStyle'
import stores from '../stores'
import Translate from '../services/Translate'

@observer class GroupItem extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: this.props.isLast ? 'transparent' : '#e7eaec',
          padding: 5,
          paddingLeft: 8
        }}>
          <Text style={{ fontWeight: 'bold' }}>{this.props.group.name.toString()}</Text>
          <Text style={{ color: 'rgba(0,0,0,0.6)' }}>{Translate.do('Members')}: {this.props.group.users.length}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

@observer class GroupDetailPage extends Component {
  pageActions = [
    {
      icon: 'save',
      onPress: () => {
        this.props.onSaveButton()
      },
      label: 'Save Changes'
    }
  ];

  constructor (props) {
    super(props)
    this.handlePop = this.handlePop.bind(this)
    this.controller = this.props.controller
    if (this.props.canDelete) {
      this.pageActions.unshift({
        icon: 'trash',
        onPress: () => {
          GlobalState.navigation.pop()
          this.props.onDelete()
        },
        label: 'Delete Group'
      })
    }
    this.originalGroup = JSON.stringify(this.props.group)
  }

  handlePop () {
    if (JSON.stringify(this.props.group) !== this.originalGroup) {
      Alert.alert(Translate.do('Unsaved Changes'), Translate.do('The users has unsaved changes'), [
        {
          text: Translate.do('Don\'t Save'), onPress: () => GlobalState.navigation.pop()
        },
        {
          text: Translate.do('Save Changes'),
          onPress: () => {
            this.props.onSaveButton()
          }
        }
      ])
    } else {
      GlobalState.navigation.pop()
    }
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title='Group Details'
          isMenuDisabled
          pageActions={this.pageActions}
          handlePop={this.handlePop}
        />

        <TextFieldView globalStyle={GlobalStyle.style} label='Group Name' value={this.props.group.name}
          translate
          onChange={(value) => { this.props.group.name = value }} settings={{ 'Auto Correct': false }} />
        <MultiPickerView
          translate
          dontTranslateOptions
          globalStyle={GlobalStyle.style}
          label='Users'
          options={this.controller.model.multiPickerOptions}
          values={[{ label: `${this.props.group.users.length} users` }]}
          pickerScreenTitle='Select users in group'
          onSelect={(user, index) => this.controller.userSelected(this.props.group, user)} />
        <MultiPickerView
          translate
          globalStyle={GlobalStyle.style}
          label='Permissions'
          options={this.controller.model.multiPickerPermissions}
          values={[{ label: `View Permissions` }]}
          pickerScreenTitle='Select group permissions'
          onSelect={(permission, index) => this.controller.permissionSelected(this.props.group, permission)} />
      </View>
    )
  }
}

@observer
class GroupManagement extends Component {
  constructor (props) {
    super(props)
    this.controller = new GroupManagementController(props)
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title='Group Management'
          pageActions={[
            {
              icon: 'plus',
              onPress: () => {
                this.controller.startCreateGroup()
              },
              label: 'Add group'
            },
            {
              icon: 'edit',
              onPress: () => {
                this.controller.manageUsers()
              },
              label: 'Manage Users'
            }
          ]}
        />

        <ScrollView
          refreshControl={<RefreshControl
            refreshing={stores.groups.isRefreshing}
            onRefresh={stores.groups.refresh}
          />}
        >
          {stores.groups.data.map((group, index) => {
            return (<GroupItem group={group} key={index} onPress={() => this.controller.editGroup(group)} />)
          })}
        </ScrollView>

      </View>
    )
  }
}

class GroupManagementController {
  @observable model = {
    newGroup: {},
    users: [],
    multiPickerOptions: [],
    multiPickerPermissions: []
  };

  constructor (props) {
    this.props = props
  }

  // TODO: this will need to be moved over to the stores model when ready
  startCreateGroup () {
    this.model.newGroup = {
      users: [],
      permissions: {
        canAddUsers: false,
        canCreateGroups: false,
        canDeleteGroups: false,
        canRemoveUsers: false,
        canEditUsers: false,
        canViewUsers: false,
        canEditPlan: false,
        canViewPlan: false,
        canEditCompany: false,
        canViewResponses: false,
        canViewMyResponses: true,
        canCreateResponses: true,
        canRemoveResponses: false,
        canEditResponses: false,
        canExportResponses: false,
        canCreateForms: false,
        canEditForms: false,
        canDeleteForms: false,
        canCreateReports: false
      }
    }

    this._populateMultipickers(this.model.newGroup)
    GlobalState.navigation.push({
      view:
  <GroupDetailPage
    controller={this}
    group={this.model.newGroup}
    onSaveButton={() => this.saveGroup(this.model.newGroup)} />
    })
  }

  // TODO: this will need to be moved over to the stores model when ready
  saveGroup (group) {
    api.company.addGroup(group)
      .then(() => {
        stores.groups.refresh()
      })
      .then(() => {
        GlobalState.navigation.pop()
      })
  }

  deleteGroup (group) {
    api.company.deleteGroup(group._id)
      .then(() => {
        this.loadGroups()
      })
  }

  _populateMultipickers (group) {
    this.model.multiPickerOptions = []
    stores.users.data.forEach(user => {
      let selected = false
      group.users.forEach(groupUser => {
        if (groupUser._id === user._id) {
          selected = true
        }
      })
      this.model.multiPickerOptions.push({
        label: `${user.firstName} ${user.lastName} (${user.username})`,
        value: user,
        selected
      })
    })

    this.model.multiPickerPermissions = []
    const permissions = Object.keys(group.permissions)
    permissions.forEach(permission => {
      this.model.multiPickerPermissions.push({
        label: permission.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
          return str.toUpperCase()
        }), // camelCase to Regular Form
        value: permission,
        selected: group.permissions[permission]
      })
    })
  }

  editGroup (group) {
    this._populateMultipickers(group)
    GlobalState.navigation.push({
      view:
  <GroupDetailPage controller={this} group={group} canDelete onDelete={() => this.deleteGroup(group)}
    onSaveButton={() => this.saveGroup(group)} />
    })
  }

  manageUsers () {
    GlobalState.navigation.resetTo({
      view: <UserManagement />
    })
  }

  userSelected (group, user) {
    user.selected = !user.selected

    if (user.selected) {
      group.users.push(user.value)
    } else {
      group.users.splice(group.users.indexOf(user.value), 1)
    }
  }

  permissionSelected (group, permission) {
    permission.selected = !permission.selected
    group.permissions[permission.value] = permission.selected
  }
}

export default GroupManagement
