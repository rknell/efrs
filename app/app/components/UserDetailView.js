import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import GlobalStyle from '../services/GlobalStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextFieldView from '../componentViews/TextFieldView'
import { Clipboard, Text, TouchableOpacity, View } from 'react-native'
import { extendObservable, observable } from 'mobx'
import emailValidator from 'email-validator'
import IconButton from './IconButton'
import api from '../api'
import UserPickerFieldView from '../componentViews/UserPickerFieldView'
import SwitchFieldView from '../componentViews/SwitchFieldView'
import GroupPickerFieldView from '../componentViews/GroupPickerFieldView'
import FieldBase from '../componentViews/FieldBase'
import Translate from '../services/Translate'
import GlobalState from '../services/GlobalState'

@observer
class UserDetailView extends Component {
  @observable state = {
    usernameIsEmail: false,
    confirmPassword: '',
    isValid: false,
    supervisorId: null,
    groups: []
  }

  constructor (props) {
    super(props)
    this.usernameIsEmailSwitch = this.usernameIsEmailSwitch.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangeConfirm = this.onChangeConfirm.bind(this)
    this.setSupervisor = this.setSupervisor.bind(this)
    // this.getSupervisor = this.getSupervisor.bind(this)
    if (this.props.user.email === this.props.user.username) this.state.usernameIsEmail = true
    if (!this.props.user.password) {
      extendObservable(this.props.user, { password: '' })
    }

    this.checkValid()
    this.getSupervisor()
  }

  usernameIsEmailSwitch (value) {
    this.props.user.email = this.props.user.username
    this.state.usernameIsEmail = value
    this.checkValid()
  }

  onChangeUsername (value) {
    this.props.user.username = value
    if (this.state.usernameIsEmail) this.props.user.email = value
    this.checkValid()
  }

  onChangePassword (value) {
    this.props.user.password = value
    this.checkValid()
  }

  // TODO: really need to move to a better class / domain store model and test this in there.
  // This feels like a big anti pattern
  checkValid () {
    if (this.props.onValidationChanged) this.props.onValidationChanged(this._isValid())
  }

  _isValid () {
    let isValid = true

    if (!emailValidator.validate(this.props.user.email)) {
      isValid = false
    } else if (this.props.isPersonal && this.props.user.password !== this.state.confirmPassword) {
      isValid = false
    } else if (this.props.isPersonal && (!this.props.user.isSetup || this.props.user.isTempPassword) && this.props.user.password === '') {
      isValid = false
    }
    this.state.isValid = isValid
    return isValid
  }

  onChangeConfirm (value) {
    if (typeof value === 'string') {
      this.state.confirmPassword = value
      this.checkValid()
    }
  }

  setSupervisor (user) {
    const supervisorRelationship = this.props.user.relationships.find(relationship => relationship.name === 'supervisor')
    if (supervisorRelationship) {
      if (user === supervisorRelationship.user) {
        // They have selected the same person again, so remove relationship
        this.props.user.relationships.splice(this.props.user.relationships.indexOf(relationship => relationship.user), 1)
      } else {
        supervisorRelationship.user = user
      }
    } else {
      this.props.user.relationships.push({
        name: 'supervisor',
        user: user
      })
    }
    this.getSupervisor()
  }

  getSupervisor () {
    const supervisorRelationship = this.props.user.relationships.find(relationship => relationship.name === 'supervisor')
    if (supervisorRelationship) {
      this.state.supervisorId = supervisorRelationship.user
    } else {
      this.state.supervisorId = null
    }
  }

  setGroup = (value) => {
    this.props.user.groups = value
  }

  render () {
    return (
      <View style={{ flex: 1 }}><KeyboardAwareScrollView style={{ flex: 1 }}>
        <TextFieldView globalStyle={GlobalStyle.style}
          translate
          autoCapitalize='words'
          label='First Name'
          value={this.props.user.firstName}
          onChange={value => {
            this.props.user.firstName = value
            this.checkValid()
          }} />
        <TextFieldView globalStyle={GlobalStyle.style}
          translate
          autoCapitalize='words'
          label='Last Name'
          value={this.props.user.lastName}
          onChange={value => {
            this.props.user.lastName = value
            this.checkValid()
          }} />
        {!this.props.isPersonal &&
        <TextFieldView globalStyle={GlobalStyle.style}
          translate
          autoCapitalize='none'
          label='Username'
          autoCorrect={false}
          keyboardType={this.state.usernameIsEmail ? 'email-address' : 'default'}
          disabled={this.props.isPersonal}
          value={this.props.user.username} onChange={this.onChangeUsername} />}

        {!this.props.isPersonal &&
        <SwitchFieldView translate globalStyle={GlobalStyle.style} label='Username is email'
          value={this.state.usernameIsEmail}
          onChange={this.usernameIsEmailSwitch} />
        }

        {(!this.state.usernameIsEmail || this.props.isPersonal) &&
        <TextFieldView globalStyle={GlobalStyle.style}
          translate
          autoCapitalize='none'
          keyboardType='email-address'
          label='Email'
          autoCorrect={false}
          value={this.props.user.email}
          onChange={value => {
            this.props.user.email = value
            this.checkValid()
          }} />}

        {!emailValidator.validate(this.props.user.email) &&
        <Text style={{ color: 'red', alignSelf: 'center' }}>Please enter a valid email address</Text>
        }

        {this.props.isPersonal &&
        <View>
          {this.props.user.isTempPassword && !this.props.user.password &&
          <Text style={{ color: 'red', alignSelf: 'center', padding: 10 }}>You must enter a new password</Text>}
          <TextFieldView globalStyle={GlobalStyle.style}
            secureTextEntry
            autoCapitalize='none'
            translate
            label='New Password'
            value={this.props.user.password}
            onChange={this.onChangePassword} />

          <TextFieldView globalStyle={GlobalStyle.style} secureTextEntry autoCapitalize='none'
            translate
            label='Confirm Password' value={this.state.confirmPassword}
            onChange={this.onChangeConfirm} />
          {!!this.props.user.password && this.props.user.password !== this.state.confirmPassword &&
          <Text style={{ color: 'red', alignSelf: 'center' }} eid='passworderror'>Passwords do not match</Text>
          }

          <FieldBase globalStyle={GlobalStyle.style} label='API key' translate>
            <TouchableOpacity onPress={() => Clipboard.setString(GlobalState.model.userToken)}
              style={{ justifyContent: 'center', flex: 1 }}>
              <Text style={{ color: 'dodgerblue' }}>{Translate.do('Copy API key to clipboard')}</Text>
            </TouchableOpacity>
          </FieldBase>
        </View>
        }

        {!this.props.isPersonal && this.props.user._id &&
        <View style={{ padding: 10 }}>
          <IconButton
            translate
            isDisabled={!this.state.isValid}
            label={this.props.user.isTempPassword ? 'Resend Invitation' : 'Reset password'}
            name={this.props.user.isTempPassword ? 'send' : 'unlock'}
            onPress={() => api.user.resetPassword(this.props.user.username)} />
        </View>
        }
        {!this.props.isPersonal &&
        <View>
          <UserPickerFieldView globalStyle={GlobalStyle.style}
            translate
            label='Supervisor'
            onChange={this.setSupervisor}
            single
            value={this.state.supervisorId} />
          <GroupPickerFieldView globalStyle={GlobalStyle.style}
            translate
            label='User groups'
            onChange={this.setGroup}
            value={this.props.user.groups} />
        </View>
        }

      </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default UserDetailView
