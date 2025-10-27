import React, { Component } from 'react'
import { Text, View, Platform, Linking } from 'react-native'
import { observer } from 'mobx-react/native'
import IconButton from '../components/IconButton'

@observer class MustResetPage extends Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Mandatory Update</Text>
        <Text>You must update eFRS to continue using it.</Text>
        <View style={{ margin: 30 }}>{Platform.OS === 'android'
          ? <IconButton iconset='ionicons' name='md-appstore' label='Visit Play Store' onPress={() => Linking.openURL('market://details?id=io.efrs')} />
          : <IconButton iconset='ionicons' name='ios-appstore' label='Visit App Store' onPress={() => Linking.openURL('itms://itunes.apple.com/us/app/apple-store/id1226260785?mt=8')} />
        }
        </View>
      </View>
    )
  }
}

export default MustResetPage
