import React, { Component } from 'react'
import { Alert, Animated, AsyncStorage, Button, Dimensions, Easing, Keyboard, View, TouchableOpacity, Text } from 'react-native'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react/native'
import TextFieldView from '../componentViews/TextFieldView'
import Home from './Home'
import GlobalState from '../services/GlobalState'
import GlobalStyle from '../services/GlobalStyle'
import SignUp from './SignUp'
import Translate from '../services/Translate'

@observer
class DomainView extends Component {
  @observable model = {
    keyboardVisible: false
  }

  componentDidMount () {
    setTimeout(() => this.loginLayout(), 1)
  }

  measurements = {
    bannerHeight: new Animated.Value(250)
  }

  lastLayouts = {}
  containerSize = {}

  constructor (props) {
    super(props)
    if (props.controller) {
      this.controller = props.controller
    } else {
      this.controller = new DomainController()
    }

    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => this.loginLayout(e, true))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', (e) => this.loginLayout(e, false))
    this.keyboardHeight = 0
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  lastAnimateTo = 0

  loginLayout (data, keyboardVisible, type) {
    let loginDimensions = this.lastLayout
    if (keyboardVisible !== undefined) this.model.keyboardVisible = keyboardVisible

    if (type === 'container') {
      this.containerSize = data.nativeEvent.layout
    } else {
      if (data && !data.endCoordinates) {
        this.lastLayouts[type] = data.nativeEvent.layout
        loginDimensions = {
          height: 0,
          width: 0
        }
        Object.keys(this.lastLayouts).forEach(layout => {
          loginDimensions.height += this.lastLayouts[layout].height
          loginDimensions.width += this.lastLayouts[layout].width
        })

        this.lastLayout = loginDimensions
      }

      if (data && data.endCoordinates) {
        this.keyboardHeight = data.endCoordinates.height
      }

      if (keyboardVisible === false) {
        this.keyboardHeight = 0
      }

      if (this.containerSize.height && this.lastLayout.height) {
        let animateTo = this.containerSize.height - this.lastLayout.height - this.keyboardHeight

        if (this.lastAnimateTo !== animateTo) {
          this.lastAnimateTo = animateTo
          Animated.timing(this.measurements.bannerHeight, {
            toValue: animateTo,
            easing: Easing.linear,
            duration: 100
          }).start()
        }
      }
    }
  }

  render () {
    return (

      <View style={{
        flex: 1,
        backgroundColor: '#f3f3f4',
        alignItems: 'center'
      }} onLayout={(data) => this.loginLayout(data, undefined, 'container')}>
        <View onLayout={(data) => this.loginLayout(data, undefined, 'top')}><View style={{ marginTop: 50 }} /></View>
        <Animated.Image source={require('../assets/efrsFullBanner.png')} resizeMode='contain'
          style={{ height: this.measurements.bannerHeight }} />

        <View onLayout={(data) => this.loginLayout(data, undefined, 'bottom')}>
          <View style={{
            padding: 16,
            backgroundColor: '#f3f3f4',
            minWidth: Dimensions.get('window').width < 500 ? (Dimensions.get('window').width - 5) : 500
          }}>
            <View style={{ backgroundColor: 'white', borderTopWidth: 4, borderColor: '#e7eaec' }}>
              <TextFieldView
                label='Domain'
                translate
                value={this.controller.model.domain}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='companyname.com'
                onChange={(text) => {
                  this.controller.model.domain = text
                }} />
            </View>
            <View style={{ marginTop: 30 }}>
              <Button title={Translate.do('Set domain & continue')} onPress={() => {
                this.controller.login()
              }} />

              <TouchableOpacity onPress={() => GlobalState.navigation.push({ view: <SignUp /> })} style={{ alignItems: 'center', marginTop: 20 }}><Text>{Translate.do(`Need an account?`)} <Text style={{ color: 'dodgerblue' }}>{Translate.do(`Start a new company`)}</Text></Text></TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    )
  }
}

export class DomainController {
  @observable model = {
    domain: ''
  }

  constructor (props) {
    this.props = props
    console.log('constructing domain view')
    GlobalStyle.resetStyles()
    AsyncStorage.removeItem(`@login:domain`)
  }

  @action
  login () {
    if (!this.model.domain) {
      Alert.alert(Translate.do('Invalid request'), Translate.do('Please enter your company\'s domain. ie. domain.com'))
    } else {
      return GlobalStyle.loadRemoteStyle(this.model.domain.trim())
        .then(() => {
          try {
            GlobalState.pushNotifications.subscribeToTopic('domain_' + this.model.domain.trim())
          } catch (e) {
            console.error('Unable to subscribe to topic', e)
          }
          return AsyncStorage.setItem(`@login:domain`, this.model.domain.trim())
        })
        .then(() => {
          return GlobalState.navigation.resetTo({ view: <Home /> })
        })
        .catch(err => {
          if (err.body) {
            Alert.alert(Translate.do('Error'), err.body.message || Translate.do(`Couldn't set domain. An unknown error occurred.`))
          } else {
            Alert.alert(Translate.do('Error'), Translate.do(`Couldn't set domain. An unknown error occurred.`))
          }
        })
    }
  }
}

export default DomainView
