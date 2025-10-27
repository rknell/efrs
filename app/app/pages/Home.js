import React, { Component } from 'react'
import {
  Alert,
  Animated,
  AsyncStorage,
  Button,
  Dimensions,
  Easing,
  Keyboard,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react/native'
import TextFieldView from '../componentViews/TextFieldView'
import api from '../api'
import GlobalState from '../services/GlobalState'
import Dashboard from './Dashboard'
import GlobalStyle from '../services/GlobalStyle'
import Domain from '../pages/Domain'
import MyAccount from './MyAccount'
import Analytics from '../services/Analytics'
import Translate from '../services/Translate'

@observer
class HomeView extends Component {
  @observable model = {
    keyboardVisible: false
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
      this.controller = new HomeController()
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

  clicks = 0

  domainClick () {
    this.clicks++

    if (this.clicks === 8) {
      GlobalState.navigation.resetTo({ view: <Domain /> })
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.loginLayout()
    }, 1)
  }

  render () {
    return (

      <View style={{
        flex: 1,
        backgroundColor: GlobalStyle.style.secondaryColour,
        alignItems: 'center'
      }} onLayout={(data) => this.loginLayout(data, undefined, 'container')}>
        <StatusBar barStyle={GlobalStyle.style.secondaryColourIsDark ? 'light-content' : 'dark-content'} />
        <View onLayout={(data) => this.loginLayout(data, undefined, 'top')}><View style={{ marginTop: 50 }} /></View>
        <Animated.View style={{ height: this.measurements.bannerHeight, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableWithoutFeedback onPress={() => this.domainClick()}>
            <Animated.Image source={GlobalStyle.style.fullLogo} resizeMode='contain' style={{
              height: this.measurements.bannerHeight,
              width: Dimensions.get('window').width * 0.8,
              maxHeight: Dimensions.get('window').height * 0.5
            }} />
          </TouchableWithoutFeedback>
        </Animated.View>

        <View onLayout={(data) => this.loginLayout(data, undefined, 'bottom')}>
          <View style={{
            padding: 16,
            minWidth: Dimensions.get('window').width < 500 ? (Dimensions.get('window').width - 5) : 500
          }}>
            <View style={{
              backgroundColor: GlobalStyle.style.neutralColour,
              borderTopWidth: 4,
              borderColor: GlobalStyle.style.neutralColourHighlight
            }}>
              <TextFieldView
                globalStyle={GlobalStyle.style}
                translate
                label='Username'
                value={this.controller.model.username}
                autoCapitalize='none'
                autoCorrect={false}
                onChange={(text) => {
                  this.controller.updateText('username', text)
                }} />
              <TextFieldView globalStyle={GlobalStyle.style}
                translate
                label='Password'
                autoCapitalize='none'
                value={this.controller.model.password}
                onChange={(text) => {
                  this.controller.updateText('password', text)
                }} secureTextEntry />
            </View>
            <View style={{ marginTop: 30 }}>
              <Button
                color={Platform.OS === 'ios' ? GlobalStyle.style.secondaryColourText : GlobalStyle.style.primaryColour}
                title={Translate.do('Login')}
                onPress={this.controller.login} />
            </View>

          </View>
        </View>

      </View>
    )
  }
}

export class HomeController {
  @observable model = {
    username: '',
    password: '',
    domain: ''
  }

  passwordFailCount = 0

  @action
  updateText (field, value) {
    this.model[field] = value
  }

  constructor () {
    setTimeout(() => {
      GlobalState.model.user = {}
      GlobalState.model.userToken = null
      GlobalState.model.userPermissions = { permissions: {} }
      AsyncStorage.removeItem('@PASettings:authToken')
    }, 1)

    AsyncStorage.getItem(`@login:domain`)
      .then(domain => {
        if (!domain) {
        } else {
          this.model.domain = domain
        }
      })
  }

  @action
  login = () => {
    AsyncStorage.setItem(`@login:domain`, this.model.domain)
    if (this.model.username && this.model.username.trim && !!this.model.username.trim()) {
      this.model.username.trim()
      api.user.login(this.model)
        .then(() => {
          Analytics.logEvent('login_success', { user: this.model.username, domain: this.model.domain })
          if (!GlobalState.model.user.isSetup || GlobalState.model.user.isTempPassword) {
            GlobalState.navigation.resetTo({ view: <MyAccount /> })
          } else {
            GlobalState.navigation.resetTo({ view: <Dashboard /> })
          }
        })
        .catch((err) => {
          console.log(err)
          Analytics.logEvent('login_fail', { user: this.model.username, domain: this.model.domain })
          if (!err.status && (err.body && err.body.message)) {
            Alert.alert(Translate.do('Error logging in'), Translate.do(`There was an unknown error logging you in. Please try again or contact your system administrator`))
          } else if (err.body && err.body.message) {
            if (err.body.type === 'INVALID_PASSWORD') {
              this.passwordFailCount++
              if (this.passwordFailCount > 2) {
                Alert.alert(Translate.do('Password Failed'), Translate.do(`Would you like to reset your password?`), [{
                  text: Translate.do('Try again'),
                  style: 'cancel',
                  onPress: () => {
                    GlobalState.navigation.pop()
                  }
                }, {
                  text: Translate.do('Reset Password'),
                  onPress: () => {
                    api.user.resetPassword(this.model.username)
                      .then(() => {
                        Alert.alert(Translate.do('Password reset'), Translate.do('A new password has been sent to your email.'))
                      })
                  }
                }])
              } else {
                Alert.alert(Translate.do('Error logging in'), Translate.do(err.body.message))
              }
            } else {
              Alert.alert(Translate.do('Error logging in'), Translate.do(err.body.message))
            }
          }
        })
    } else {
      Alert.alert('Login failed', 'Please enter a username')
    }
  }
}

export default HomeView
