import React, { Component } from 'react'
import GlobalStyle from '../services/GlobalStyle'
import { observer } from 'mobx-react/native'
import GlobalState from '../services/GlobalState'
import { Alert, Animated, Image, Platform, ScrollView, Text, TouchableOpacity, Vibration, View } from 'react-native'
import StatusBarSpacer from './StatusBarSpacer'
import FormsList from '../pages/FormsList'
import Dashboard from '../pages/Dashboard'
import ViewResponses from '../pages/ViewResponses'
import FormManagement from '../pages/FormManagement'
import UserManagement from '../pages/UserManagement'
import MyAccount from '../pages/MyAccount'
import IconButton from './IconButton'
import Home from '../pages/Home'
import Reporting from '../pages/Reporting'
import Outbox from '../pages/Outbox'
import stores from '../stores'
import Translate from '../services/Translate'
import ScheduledResponses from '../pages/ScheduledResponses'

@observer
class SideMenu extends Component {
  constructor (props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  logOut () {
    GlobalState.navigation.resetTo({ view: <Home /> })
    GlobalState.hideDrawer()
  }

  clearCache = async () => {
    Alert.alert(Translate.do('Confirm'), Translate.do('This will clear all offline data AND delete any stuck items in the outbox. Are you sure?'), [
      { text: Translate.do('Cancel'), style: 'cancel' },
      {
        text: Translate.do('Clear Data'),
        onPress: async () => {
          await stores.clearAll()
          await stores.refreshAll()
        }
      }])
  }

  render () {
    return (
      <Animated.View style={{
        position: 'absolute',
        left: this.props.position,
        top: 0,
        bottom: 0,
        margin: 0,
        padding: 0,
        backgroundColor: GlobalStyle.style.secondaryColour,
        width: this.props.width
      }}>
        <StatusBarSpacer />
        <Image source={GlobalStyle.style.secondaryLogo} style={{
          width: 200,
          height: 100,
          marginBottom: 25,
          marginTop: 25,
          alignSelf: 'center'
        }} resizeMode='contain' />
        <ScrollView style={{ flex: 1 }}>
          <MenuBarItem name='My Tasks'
            view={<Dashboard />}
            visible />
          <MenuBarItem name='Fill Form'
            view={<FormsList />}
            visible={GlobalState.model.userPermissions.permissions.canCreateResponses} />
          <MenuBarItem name='View Responses'
            view={<ViewResponses />}
            visible={(GlobalState.model.userPermissions.permissions.canViewResponses || GlobalState.model.userPermissions.permissions.canViewMyResponses)} />
          <MenuBarItem name='Live Dashboard'
            view={<Reporting />}
            visible={GlobalState.model.userPermissions.permissions.canCreateReports} />
          <MenuBarItem name='Form Management'
            view={<FormManagement />}
            visible={GlobalState.model.userPermissions.permissions.canCreateForms} />
          <MenuBarItem name='Scheduled Responses'
            view={<ScheduledResponses />}
            visible={GlobalState.model.userPermissions.permissions.canScheduleResponses} />
          <MenuBarItem name='Users & Groups'
            view={<UserManagement />}
            visible={GlobalState.model.userPermissions.permissions.canAddUsers} />
          <MenuBarItem name='My Account'
            view={<MyAccount />}
            visible />
          <View style={{ flex: 1 }} />
          <View>
            <MenuBarItem name='Outbox' view={<Outbox />} visible badge={stores.responses.data.length} />
            <IconButton translate name='times' label='Clear Cache' onPress={this.clearCache} />
            <View style={{ height: 5 }} />
            {GlobalState.model.userToken &&
            <IconButton translate name='sign-out' label='Log Out' onPress={this.logOut} />
            }
          </View>
        </ScrollView>
      </Animated.View>
    )
  }
}

@observer
class MenuBarItem extends Component {
  itemOnPress () {
    GlobalState.navigation.resetTo({ view: this.props.view })
    GlobalState.hideDrawer()
    if (Platform.OS === 'android') Vibration.vibrate(10)
  }

  render () {
    if (this.props.visible) {
      return (
        <TouchableOpacity onPress={() => this.itemOnPress()}>
          <View style={{
            padding: 10,
            paddingTop: 16,
            paddingBottom: 16,
            borderBottomColor: GlobalStyle.style.secondaryColourHighlight,
            borderBottomWidth: 1
          }}>
            <Text style={{ color: GlobalStyle.style.secondaryColourText }}>{Translate.do(this.props.name)}</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return null
    }
  }
}

export default SideMenu
export { MenuBarItem }
