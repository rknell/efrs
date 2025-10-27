import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'
import { observer } from 'mobx-react/native'
import { observable } from 'mobx'
import IconButton from '../components/IconButton'
import TextFieldView from '../componentViews/TextFieldView'
import NavBar from '../components/NavBar'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import api from '../api'
import { DomainController } from './Domain'
import Translate from '../services/Translate'

@observer
class SignUp extends Component {
  @observable form = {
    name: '',
    domain: '',
    adminEmail: ''
  }

  signUp = async () => {
    try {
      await api.company.create(this.form)
      Alert.alert(Translate.do('Next Steps'), Translate.do('Please check your email for your login details'))
      const dc = new DomainController()
      dc.model.domain = this.form.domain
      dc.login()
    } catch (e) {
      console.error(e)
    }
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <NavBar isMenuDisabled title='Sign Up' />
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View style={{ padding: 20 }}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>{Translate.do('Sign Up')}</Text>
            <Text style={{ alignSelf: 'center' }}>{Translate.do('No credit cards, instant access')}</Text>
          </View>
          <TextFieldView
            settings={{
              Label: 'Company Name',
              Placeholder: 'XYZ Industries Ltd'
            }}
            translate
            autoCapitalize='words'
            autoCorrect={false}
            value={this.form.name}
            onChange={val => { this.form.name = val }}
          />
          <TextFieldView
            settings={{
              Label: 'Domain',
              Placeholder: 'xyzindustries.com'
            }}
            translate
            autoCapitalize='none'
            autoCorrect={false}
            value={this.form.domain}
            onChange={val => { this.form.domain = val }}
          />
          <TextFieldView
            settings={{
              Label: 'Your Email',
              Placeholder: 'you@email.com'
            }}
            translate
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            value={this.form.adminEmail}
            onChange={val => { this.form.adminEmail = val }}
          />
          <View style={{ padding: 20 }}>
            <IconButton translate name='user-plus' label='Start 30 Day Trial' onPress={this.signUp} />
          </View>
        </KeyboardAwareScrollView>

      </View>
    )
  }
}

export default SignUp
