import React, { Component } from 'react'
import {
  ActivityIndicator,
  Animated,
  AsyncStorage,
  BackHandler,
  Easing,
  Platform,
  TouchableWithoutFeedback,
  Vibration,
  View
} from 'react-native'
import GlobalState from './services/GlobalState'
import Home from './pages/Home'
import { observer } from 'mobx-react/native'
import { observable } from 'mobx'
import jwtDecode from 'jwt-decode'
import api from './api'
import Dashboard from './pages/Dashboard'
import { Navigator } from 'react-native-deprecated-custom-components'
import Domain, { DomainController } from './pages/Domain'
import MyAccount from './pages/MyAccount'
import BusyIndicator from './components/BusyIndicator'
import SideMenu from './components/SideMenu'
import Analytics from './services/Analytics'
import Translate from './services/Translate'

@observer
class InitialRoute extends Component {
  constructor (props) {
    super(props)

    Promise.all([
      AsyncStorage.getItem('@PASettings:authToken'),
      AsyncStorage.getItem(`@login:domain`),
      Translate.loadLanguage()
    ])
      .then(([userToken, domain]) => {
        if (!domain) {
          api.user.assumedDomain()
            .then(result => {
              if (result && result.domain) {
                const domainController = new DomainController()
                domainController.model.domain = result.domain
                return domainController.login()
              } else {
                GlobalState.navigation.resetTo({ view: <Domain /> })
              }
            })
            .catch(() => {
              GlobalState.navigation.resetTo({ view: <Domain /> })
            })
        } else if (userToken) {
          const userpermissions = jwtDecode(userToken)
          console.log('user permissions', userpermissions)
          if (userpermissions.permissions) {
            GlobalState.model.userPermissions = userpermissions
          } else {
            GlobalState.model.userPermissions = {}
          }

          GlobalState.model.userToken = userToken

          api.user.getUser()
            .then(() => {
              if (GlobalState.model.user.isTempPassword || !GlobalState.model.user.isSetup) {
                GlobalState.navigation.resetTo({
                  view: <MyAccount />
                })
              } else {
                GlobalState.navigation.resetTo({
                  view: <Dashboard />
                })
              }
            })
            .catch(() => {
              GlobalState.navigation.resetTo({
                view: <Home />
              })
            })
        } else {
          GlobalState.navigation.resetTo({
            view: <Home />
          })
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  render () {
    return (
      <View style={{ backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }
}

@observer
class AppNavigator extends Component {
  @observable model = {
    drawerVisible: false
  }
  lastScreen = null

  showDrawer () {
    // TODO: Remove the width hack one day.
    // Its in there becuause in RN0.55 on ios the width of the sidemenu keeps getting smaller,
    // similar to chrome bugs
    if (Platform.OS === 'android') Vibration.vibrate(10)
    this.model.drawerVisible = true
    Animated.parallel([
      Animated.timing(this.state.animations.drawerX, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.cubic)
      }),
      Animated.timing(this.state.animations.drawerWidth, {
        toValue: 251,
        duration: 301,
        easing: Easing.out(Easing.cubic)
      }),
      Animated.timing(this.state.animations.backgroundOpacity, {
        toValue: 0.3,
        duration: 1000,
        easing: Easing.out(Easing.cubic)
      })
    ])
      .start()
  }

  hideDrawer () {
    return new Promise((resolve, reject) => {
      Animated.parallel([
        Animated.timing(this.state.animations.drawerX, {
          toValue: -250,
          duration: 300,
          easing: Easing.in(Easing.cubic)
        }),
        Animated.timing(this.state.animations.drawerWidth, {
          toValue: 250,
          duration: 301,
          easing: Easing.out(Easing.cubic)
        }),
        Animated.timing(this.state.animations.backgroundOpacity, {
          toValue: 0,
          duration: 300,
          easing: Easing.in(Easing.cubic)
        })
      ])
        .start(() => {
          this.model.drawerVisible = false
          resolve()
        })
    })
  }

  handleBackAndroid () {
    if (this.model.drawerVisible) {
      this.hideDrawer()
    } else if (GlobalState.model.canPop) {
      GlobalState.navigation.pop()
    } else {
      BackHandler.exitApp()
    }
    return true
  }

  constructor (props) {
    super(props)
    GlobalState.showDrawer = this.showDrawer = this.showDrawer.bind(this)
    GlobalState.hideDrawer = this.hideDrawer = this.hideDrawer.bind(this)
    GlobalState.bugsnag = props.bugsnag

    this.state = {
      animations: {
        drawerX: new Animated.Value(-250),
        backgroundOpacity: new Animated.Value(0),
        drawerWidth: new Animated.Value(249)
      }
    }

    this.handleBackAndroid = this.handleBackAndroid.bind(this)
    BackHandler.addEventListener('hardwareBackPress', this.handleBackAndroid)
  }

  renderScene (route, navigator) {
    GlobalState.navigation = navigator

    setTimeout(() => {
      if (navigator.getCurrentRoutes && navigator.getCurrentRoutes().length > 1) {
        GlobalState.model.canPop = true
      } else {
        GlobalState.model.canPop = false
      }
      if (route.title) GlobalState.model.pageTitle = route.title
    }, 1)

    if (this.lastScreen !== route.view.type.displayName) {
      this.lastScreen = route.view.type.displayName
      Analytics.logScreen(route.view.type.displayName)
    }

    return (route.view)
  }

  configureScene (route) {
    if (route.animation) {
      return { ...Navigator.SceneConfigs[route.animation], gestures: {} }
    } else {
      return { ...Navigator.SceneConfigs.PushFromRight, gestures: {} }
    }
  }

  render () {
    return (
      <View style={{ flex: 1 }}>

        <Navigator
          initialRoute={{ view: <InitialRoute /> }}
          renderScene={(route, navigator) => this.renderScene(route, navigator)}
          configureScene={(route) => this.configureScene(route)}
        />

        {this.model.drawerVisible &&
        <TouchableWithoutFeedback style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }} onPress={this.hideDrawer}>
          <Animated.View style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            opacity: this.state.animations.backgroundOpacity,
            backgroundColor: `rgb(0,0,0)`
          }} />
        </TouchableWithoutFeedback>
        }

        <SideMenu position={this.state.animations.drawerX} width={this.state.animations.drawerWidth} />
        <BusyIndicator isBusy={GlobalState.model.isBusy} />

      </View>
    )
  }
}

export default AppNavigator
export { InitialRoute }
