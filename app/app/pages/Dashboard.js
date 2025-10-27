import React, { Component } from 'react'
import { Alert, Linking, Platform, ScrollView, Text, View } from 'react-native'
import { observer } from 'mobx-react/native'
import { action, observable } from 'mobx'
import NavBar from '../components/NavBar'
import api from '../api'
import ResponseItem from '../components/ResponseItem'
import GlobalState from '../services/GlobalState'
import ViewForm from './ViewForm'
import HeaderFieldView from '../componentViews/HeaderFieldView'
import IconButton from '../components/IconButton'
import IconFa from 'react-native-vector-icons/FontAwesome'
import GlobalStyle from '../services/GlobalStyle'
import FormsListView from './FormsList'
import ViewResponses from './ViewResponses'
import stores from '../stores'
import DeviceInfo from 'react-native-device-info'
import MustResetPage from './MustResetPage'
import Translate from '../services/Translate'
import CardStyle from '../components/CardStyle'

export class Controller {
  @observable model = {
    assignedToMe: [],
    assignedToGroup: [],
    drafts: []
  }

  constructor (props) {
    this.props = props
    setTimeout(() => this.refresh(), 1500)
    setInterval(() => this.getDrafts(), 2000)
  }

  @action refresh () {
    this.checkUpdate()
    this.getDrafts()
  }

  @action viewResponse (item) {
    GlobalState.navigation.push({ view: <ViewForm onPop={() => this.refresh()} response={item} /> })
  }

  @action getDrafts = async () => {
    this.model.drafts = await api.responses.drafts()
  }

  @action deleteDraft (draft) {
    Alert.alert(Translate.do('Delete'), Translate.do('Are you sure you want to delete this draft?'), [{
      text: Translate.do('Cancel'),
      style: 'cancel'
    }, {
      text: Translate.do('Delete'),
      onPress: () => {
        api.responses.deleteDraftById(draft._id)
          .then(() => {
            this.getDrafts()
          })
      }
    }])
  }

  @action checkUpdate = async () => {
    try {
      const settings = await api.settings.get()
      const buildNumber = DeviceInfo.getBuildNumber()
      if (Number(buildNumber) < Number(settings.minimumAppVersion)) {
        GlobalState.navigation.resetTo({ view: <MustResetPage /> })
      } else if (Number(buildNumber) < Number(settings.latestAppVersion)) {
        Alert.alert(
          Translate.do('New version available'),
          Translate.do('You will soon be forced to update the app to the latest version. Update now for the latest stability improvements and features.'),
          [{
            text: Translate.do('Update later'),
            style: 'cancel',
            onPress: () => {
              GlobalState.navigation.pop()
            }
          }, {
            text: Translate.do('Visit App Store'),
            onPress: () => {
              if (Platform.OS === 'android') {
                Linking.openURL('market://details?id=io.efrs')
              } else {
                Linking.openURL('itms://itunes.apple.com/us/app/apple-store/id1226260785?mt=8')
              }
              GlobalState.navigation.pop()
            }
          }])
      }
    } catch (e) {
      console.log('Unable to get latest app version', e)
    }
  }
}

@observer
class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.controller = new Controller(props)
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <NavBar title='Tasks' />
        <ScrollView style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>

          {!!GlobalState.model.userPermissions.permissions.canCreateResponses &&
          <View style={{ padding: 20 }}>
            <IconButton label='Fill a new form' name='plus'
              translate
              onPress={() => GlobalState.navigation.push({
                view: <FormsListView />
              })} /></View>
          }

          {(!!GlobalState.model.userPermissions.permissions.canViewResponses || !!GlobalState.model.userPermissions.permissions.canViewMyResponses) &&
          <View style={{ padding: 20, paddingTop: 0 }}>
            <IconButton label='View submitted responses' name='eye'
              translate
              onPress={() => GlobalState.navigation.push({
                view: <ViewResponses />
              })} /></View>
          }

          {!!this.controller.model.drafts.length &&
          <View>
            <HeaderFieldView globalStyle={GlobalStyle.style} settings={{ Label: 'Your Drafts' }} />
            <View style={{ backgroundColor: GlobalStyle.style.neutralColourOffset }}>
              {this.controller.model.drafts.map((item, index) => {
                if (item.formId) {
                  return (<CardStyle key={item._id}>
                    <View key={index} style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderBottomColor: 'rgba(0,0,0,0.1)',
                      borderBottomWidth: 1
                    }}>
                      <ResponseItem globalStyle={GlobalStyle.style} style={{ borderBottomWidth: 0, flex: 1 }} showFormName
                        item={item} onPress={() => this.controller.viewResponse(item)} />
                      <View style={{ padding: 5, marginRight: 10 }}>
                        <IconButton name='trash' onPress={() => this.controller.deleteDraft(item)} />
                      </View>
                    </View>
                  </CardStyle>)
                }
              })}
            </View>
          </View>
          }

          {!!stores.assignedToUser.data.length &&
          <View>
            <HeaderFieldView globalStyle={GlobalStyle.style} settings={{ Label: 'Assigned directly to you' }}
              refresh={stores.assignedToUser.refresh} isRefreshing={stores.assignedToUser.isRefreshing} />
            <View style={{ backgroundColor: GlobalStyle.style.neutralColourOffset }}>
              {stores.assignedToUser.data.map((item, index) => {
                if (item.formId) {
                  return (<CardStyle key={item._id}>
                    <ResponseItem showFormName globalStyle={GlobalStyle.style} item={item} key={index}
                      onPress={() => this.controller.viewResponse(item)} /></CardStyle>)
                }
              })}
            </View>
          </View>
          }

          {!!stores.assignedToGroup.data.length &&
          <View>
            <HeaderFieldView globalStyle={GlobalStyle.style}
              settings={{ Label: 'Assigned to your group / role' }}
              refresh={stores.assignedToGroup.refresh}
              isRefreshing={stores.assignedToGroup.isRefreshing} />
            <View style={{ backgroundColor: GlobalStyle.style.neutralColourOffset }}>
              {stores.assignedToGroup.data.map((item, index) => {
                if (item.formId) {
                  return (<CardStyle key={item._id}>
                    <ResponseItem showFormName globalStyle={GlobalStyle.style}
                      item={item}
                      key={index}
                      onPress={() => this.controller.viewResponse(item)} />
                  </CardStyle>)
                }
              })}
            </View>
          </View>
          }

          {!this.controller.model.drafts.length &&
          <View>
            <HeaderFieldView globalStyle={GlobalStyle.style} settings={{ Label: 'Your Drafts' }} />
            <View style={{ padding: 10, alignItems: 'center' }}>
              <IconFa name='check-square-o' size={30} style={{ color: GlobalStyle.style.primaryColour }} />
              <Text style={{ color: GlobalStyle.style.neutralColourText }}>{Translate.do(`All drafts submitted`)}</Text>
            </View>
          </View>
          }

          {!stores.assignedToUser.data.length &&
          <View>
            <HeaderFieldView globalStyle={GlobalStyle.style} settings={{ Label: 'Assigned directly to you' }}
              refresh={stores.assignedToUser.refresh}
              isRefreshing={stores.assignedToUser.isRefreshing} />
            <View style={{ padding: 10, alignItems: 'center' }}>
              <IconFa name='check-square-o' size={30} style={{ color: GlobalStyle.style.primaryColour }} />
              <Text style={{ color: GlobalStyle.style.neutralColourText }}>{Translate.do(`Nothing to complete`)}</Text>
            </View>
          </View>
          }

          {!stores.assignedToGroup.data.length &&
          <View>
            <HeaderFieldView globalStyle={GlobalStyle.style} settings={{ Label: 'Assigned to your group / role' }}
              refresh={stores.assignedToGroup.refresh}
              isRefreshing={stores.assignedToGroup.isRefreshing} />
            <View style={{ padding: 10, alignItems: 'center' }}>
              <IconFa name='check-square-o' size={30} style={{ color: GlobalStyle.style.primaryColour }} />
              <Text style={{ color: GlobalStyle.style.neutralColourText }}>{Translate.do(`Nothing to complete`)}</Text>
            </View>
          </View>
          }

        </ScrollView>
      </View>
    )
  }
}

export default Dashboard
