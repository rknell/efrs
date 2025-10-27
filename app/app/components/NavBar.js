import React, { Component } from 'react'
import { Platform, StatusBar, Text, TouchableOpacity, Vibration, View } from 'react-native'
import IconFa from 'react-native-vector-icons/FontAwesome'
import GlobalState from '../services/GlobalState'
import { observer } from 'mobx-react/native'
import StatusBarSpacer from '../components/StatusBarSpacer'
import GlobalStyle from '../services/GlobalStyle'
import Translate from '../services/Translate'

@observer
class NavBar extends Component {
  showMenu () {
    if (Platform.OS === 'android') Vibration.vibrate(10)
    GlobalState.model.drawerOpen = true
  }

  height () {
    return 30
  }

  handlePop () {
    if (this.props.onPop) {
      this.props.onPop()
    }
    if (!this.props.handlePop) {
      GlobalState.navigation.pop()
    } else {
      this.props.handlePop()
    }
  }

  render () {
    return (
      <View>
        <StatusBar barStyle={GlobalStyle.style.primaryColourIsDark ? 'light-content' : 'dark-content'}
          backgroundColor={GlobalStyle.style.primaryColour} />
        <View style={{
          backgroundColor: GlobalStyle.style.primaryColour,
          borderBottomColor: GlobalStyle.style.primaryColourHighlight,
          borderBottomWidth: 0,
          elevation: 1
        }}>
          <StatusBarSpacer />

          <View style={{ padding: 10, flexDirection: 'row' }}>

            {!this.props.isMenuDisabled && <TouchableOpacity onPress={() => {
              GlobalState.showDrawer()
            }}>
              <View style={{
                padding: 6,
                paddingLeft: 16,
                paddingRight: 16,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <IconFa name='bars' size={18} color={GlobalStyle.style.primaryColourText} />
              </View>
            </TouchableOpacity>}

            {GlobalState.model.canPop &&
            <TouchableOpacity onPress={() => {
              this.handlePop()
            }}>
              <View style={{
                padding: 6,
                paddingLeft: 10,
                paddingRight: 10,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <IconFa name='chevron-left' color={GlobalStyle.style.primaryColourText} size={18} />
              </View>
            </TouchableOpacity>}
            <Text style={{
              fontWeight: '300',
              color: GlobalStyle.style.primaryColourText,
              fontSize: 20,
              flex: 1
            }} ellipsizeMode='tail' numberOfLines={1}>{this.props.dontTranslate ? this.props.title : Translate.do(this.props.title)}</Text>
          </View>

        </View>
        {this.props.pageActions && this.props.pageActions.length &&
        <View style={{
          backgroundColor: GlobalStyle.style.secondaryColour,
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 16,
          paddingLeft: 16,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderColor: GlobalStyle.style.secondaryColourHighlight
        }}>

          <View style={{ flex: 1 }} />

          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            {this.props.pageActions.map((item, index) => {
              return (
                <TouchableOpacity onPress={item.onPress} key={index}>
                  <View style={{
                    borderRightWidth: index < this.props.pageActions.length - 1 ? 1 : 0,
                    borderColor: 'rgba(255,255,255,0.3)',
                    marginRight: index < this.props.pageActions.length - 1 ? 10 : 0,
                    padding: 10
                  }}>
                    <Text style={{ color: GlobalStyle.style.secondaryColourText }}>
                      <IconFa name={item.icon} />&nbsp;{Translate.do(item.label)}&nbsp;
                    </Text>
                  </View>
                </TouchableOpacity>)
            })}
          </View>

        </View>
        }
      </View>
    )
  }
}

export default NavBar
