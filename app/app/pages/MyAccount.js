import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { observer } from 'mobx-react/native'
import { observable } from 'mobx'
import NavBar from '../components/NavBar'
import GlobalStyle from '../services/GlobalStyle'
import UserDetailView from '../components/UserDetailView'
import GlobalState from '../services/GlobalState'
import Dashboard from './Dashboard'
import IconButton from '../components/IconButton'
import api from '../api'
import Translate from '../services/Translate'

@observer
class MyAccount extends Component {
  @observable state = {
    isUserValid: false
  }

  constructor (props) {
    super(props)
    this.onSave = this.onSave.bind(this)
  }

  onSave () {
    GlobalState.model.isBusy++
    GlobalState.model.user.isTempPassword = false
    GlobalState.model.user.isSetup = true
    api.user.update()
      .then(() => {
        if (GlobalState.model.canPop) GlobalState.navigation.pop()
        else GlobalState.navigation.resetTo({ view: <Dashboard /> })
      })
      .finally(() => {
        GlobalState.model.isBusy--
      })
  }

  render () {
    const user = GlobalState.model.user
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title='My Account'
          isMenuDisabled={!GlobalState.model.user.isSetup || GlobalState.model.user.isTempPassword} />

        {!user.isSetup &&
        <Text style={{ alignSelf: 'center', textAlign: 'center', padding: 20 }}>
          {Translate.do(`Please confirm your details, and setup your password before you continue`)}
        </Text>
        }

        <UserDetailView isPersonal user={GlobalState.model.user}
          onValidationChanged={value => {
            this.state.isUserValid = value
          }} />

        <IconButton translate name='save' label='Save & Continue' onPress={this.onSave}
          isDisabled={!this.state.isUserValid} />

      </View>
    )
  }
}

export default MyAccount
