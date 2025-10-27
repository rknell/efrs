import React, { Component } from 'react'
import { Alert, RefreshControl, SectionList, Text, TouchableOpacity, View } from 'react-native'
import NavBar from '../components/NavBar'
import GlobalState from '../services/GlobalState'
import { computed, observable } from 'mobx'
import { observer } from 'mobx-react/native'
import GroupManagement from './GroupManagement'
import GlobalStyle from '../services/GlobalStyle'
import UserDetailView from '../components/UserDetailView'
import stores from '../stores'
import SearchBar from '../components/SearchBar'
import Translate from '../services/Translate'

@observer
class UserItem extends Component {
  getRelationshipUser (userId) {
    const user = stores.users.data.find(user => user._id === userId)
    if (user) {
      return user.username
    } else {
      return 'User not found'
    }
  }

  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: this.props.isLast ? 'transparent' : '#e7eaec',
          padding: 5,
          paddingLeft: 8
        }}>
          {(!!this.props.user.lastName || !!this.props.user.firstName) && <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold' }}>
              {!!this.props.user.lastName && <Text>{this.props.user.lastName}, </Text>}
              {!!this.props.user.firstName && <Text>{this.props.user.firstName}</Text>}
            </Text>
          </View>}
          <Text>{this.props.user.username}</Text>
          {!!this.props.user.relationships && this.props.user.relationships.map(relationship =>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>{relationship.name}</Text>
              &nbsp;- {this.getRelationshipUser(relationship.user)}
            </Text>)}
        </View>
      </TouchableOpacity>
    )
  }
}

@observer
class UserDetailPage extends Component {
  @observable state = {
    isUserValid: false
  }

  constructor (props) {
    super(props)

    if (this.props.canDelete) {
      this.pageActions.unshift({
        icon: 'trash',
        onPress: this.onDelete,
        label: 'Delete User'
      })
    }

    this.originalUser = JSON.stringify(this.props.user)
  }

  onSaveButton = () => {
    console.log('on save called')
    if (!this.state.isUserValid) {
      Alert.alert(Translate.do('Invalid user'), Translate.do('The user record is not valid, please correct the errors and try again.'))
    } else {
      GlobalState.navigation.pop()
      this.props.onSave(this.props.user)
    }
  }

  onDelete = () => {
    GlobalState.navigation.pop()
    this.props.onDelete(this.props.user)
  }

  onSaveBack = () => {
    this.props.onSave(this.props.user)
    GlobalState.navigation.pop()
  }

  onNoSave = () => {
    const originalUser = JSON.parse(this.originalUser)
    for (const key in originalUser) {
      this.props.user[key] = originalUser[key]
    }
    GlobalState.navigation.pop()
  }

  handleBack = () => {
    if (this.originalUser !== JSON.stringify(this.props.user)) {
      Alert.alert(Translate.do('Unsaved Changes'), Translate.do('The users has unsaved changes'), [
        {
          text: Translate.do('Don\'t Save'), onPress: this.onNoSave
        },
        {
          text: Translate.do('Save Changes'),
          onPress: this.onSaveBack
        }
      ])
    } else {
      GlobalState.navigation.pop()
    }
  }

  onValidationChanged = (value) => {
    this.state.isUserValid = value
  }

  pageActions = [
    {
      icon: 'save',
      onPress: this.onSaveButton,
      label: 'Save Changes'
    }
  ]

  render () {
    return <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
      <NavBar title='User Details'
        isMenuDisabled
        pageActions={this.pageActions}
        handlePop={this.handleBack}
      />
      <UserDetailView user={this.props.user} onValidationChanged={this.onValidationChanged} />

    </View>
  }
}

@observer
class UserManagement extends Component {
  @observable state = {
    searchText: ''
  }

  constructor (props) {
    super(props)
    if (props.controller) {
      this.controller = props.controller
    } else {
      this.controller = new UserManagementController(props)
    }
  }

  _meetsFilter (string) {
    return !this.state.searchText || (!!string && string.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1)
  }

  @computed get sections () {
    if (!stores.users.isRefreshing) {
      const sections = stores.users.data.reduce((result, item) => {
        let sectionCode
        if (item && item.lastName && item.lastName[0]) {
          sectionCode = item.lastName[0].toUpperCase()
        } else {
          sectionCode = ' NO NAME'
        }
        const section = result.find(section => section.title === sectionCode)
        if (this._meetsFilter(item.firstName) || this._meetsFilter(item.lastName) || this._meetsFilter(item.username) || this._meetsFilter(item.email)) {
          if (section) {
            section.data.push(item)
          } else {
            result.push({
              data: [item],
              title: sectionCode
            })
          }
        }

        return result
      }, [])

      sections.forEach(section => {
        section.data.sort((a, b) => {
          if (a.lastName < b.lastName) {
            return -1
          } else {
            return 1
          }
        })
      })

      sections.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        } else {
          return 1
        }
      })
      return sections
    } else {
      return []
    }
  }

  searchBarChange = (value) => {
    this.state.searchText = value
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar
          title='User Management'
          pageActions={[
            {
              icon: 'plus',
              onPress: this.controller.startCreateUser,
              label: 'Add user'
            },
            {
              icon: 'edit',
              onPress: this.controller.manageGroups,
              label: 'Manage Groups'
            }
          ]}
        />

        <SearchBar onChange={this.searchBarChange} value={this.state.searchText} />

        <SectionList
          keyExtractor={item => item.guid}
          initialNumToRender={20}
          maxToRenderPerBatch={40}
          renderItem={({ item }) => {
            return <UserItem key={item.guid} user={item}
              onPress={() => {
                this.controller.editUser(item)
              }} />
          }}
          renderSectionHeader={({ section }) => <SectionHeader section={section} />}
          sections={this.sections}
          style={{ flex: 1 }}
          refreshControl={<RefreshControl
            refreshing={stores.users.isRefreshing}
            onRefresh={stores.users.refresh}
          />}
        />

      </View>
    )
  }
}

@observer
class SectionHeader extends Component {
  render () {
    return (<View key={this.props.section.title} style={{
      backgroundColor: GlobalStyle.style.primaryColour,
      padding: 5
    }}>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 16,
        color: GlobalStyle.style.primaryColourText
      }}>{this.props.section.title || 'No Title'}</Text>
    </View>)
  }
}

export class UserManagementController {
  @observable model = {
    users: [],
    newUser: {}
  }

  constructor (props) {
    this.props = props
  }

  startCreateUser = () => {
    this.model.newUser = stores.users.create()
    GlobalState.navigation.push({
      view: <UserDetailPage user={this.model.newUser} onSave={this.saveUser} />
    })
  }

  saveUser = (user) => {
    user.save()
  }

  deleteUser = (user) => {
    user.remove()
  }

  editUser (user) {
    GlobalState.navigation.push({
      view:
  <UserDetailPage user={user}
    canDelete
    onDelete={this.deleteUser}
    onSave={this.saveUser} />
    })
  }

  manageGroups = () => {
    GlobalState.navigation.resetTo({
      view: <GroupManagement />
    })
  }
}

export default UserManagement
export { UserItem, UserDetailPage, SectionHeader }
