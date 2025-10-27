import React, { Component } from 'react'
import { Alert, Clipboard, FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react/native'
import NavBar from '../components/NavBar'
import api from '../api'
import Icon from 'react-native-vector-icons/FontAwesome'
import GlobalState from '../services/GlobalState'
import ViewForm from './ViewForm'
import Form from '../components/Form'
import libForm from '../lib/form'
import ResponseItem from '../components/ResponseItem'
import ActionButton from 'react-native-circular-action-menu'
import Modal from 'react-native-modal'
import TextFieldView from '../componentViews/TextFieldView'
import GlobalStyle from '../services/GlobalStyle'
import CardStyle from '../components/CardStyle'
import FormList from '../components/FormList'
import IconButton from '../components/IconButton'
import debounce from 'debounce'
import Translate from '../services/Translate'
import base64 from 'base-64'

@observer
class ViewResponsesSelectForm extends Component {
  constructor (props) {
    super(props)
    this.controller = new ViewResponsesController(props)
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title='View Responses - Select Form' />
        <FormList onSelect={item => {
          this.controller.viewResponses(item)
        }} />
      </View>
    )
  }
}

@observer
class ViewResponsesView extends Component {
  constructor (props) {
    super(props)
    this.controller = this.props.controller
    this.controller.setState = (state) => {
      this.setState(state)
    }
    this.state = {
      responsesList: []
    }
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title={`${this.props.form.name} ${Translate.do('responses')}`} dontTranslate
          onPop={() => { this.controller.model.page = 1 }} />

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.controller.previousPage}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 15 }}>
            <Text style={{ color: GlobalStyle.style.neutralColourText }}>{`<`} {Translate.do('Previous Page')}</Text>
          </TouchableOpacity>
          <View
            style={{ alignItems: 'center', justifyContent: 'center' }}><Text
              style={{ color: GlobalStyle.style.neutralColourText, fontWeight: 'bold' }}>{this.controller.model.page}</Text></View>
          <TouchableOpacity onPress={this.controller.nextPage}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 15 }}>
            <Text style={{ color: GlobalStyle.style.neutralColourText }}>{Translate.do('Next Page')} {`>`}</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={{ backgroundColor: GlobalStyle.style.neutralColourOffset }}
          refreshControl={<RefreshControl
            refreshing={this.controller.model.isLoadingResponses}
            onRefresh={this.controller.doAdvancedSearch}
          />}
          data={this.state.responsesList}
          initialNumToRender={10}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            if (item.formId) {
              return (
                <CardStyle><ResponseItem key={item._id} item={item} onPress={() => this.controller.viewResponse(item)} /></CardStyle>
              )
            } else {
              return null
            }
          }}
        />

        <ActionButton
          buttonColor={GlobalStyle.style.primaryColour}
          position='right'
          outRangeScale={2}
          bgColor='rgba(0,0,0,0.5)'
          radius={180}
        >
          {!!GlobalState.model.userPermissions.permissions.canExportResponses &&
          <ActionButton.Item
            size={50}
            buttonColor={GlobalStyle.style.secondaryColour}
            title={Translate.do('Export list to CSV')}
            onPress={() => this.controller.showEmailPrompt()}>
            <Icon name='file-excel-o' style={{ fontSize: 25, color: GlobalStyle.style.secondaryColourText }} />
          </ActionButton.Item>
          }
          {!!GlobalState.model.userPermissions.permissions.canExportResponses &&
          <ActionButton.Item
            size={50}
            buttonColor={GlobalStyle.style.secondaryColour}
            title={Translate.do('Get data stream URL')}
            onPress={() => this.controller.advancedSearchToUrl()}>
            <Icon name='file-excel-o' style={{ fontSize: 25, color: GlobalStyle.style.secondaryColourText }} />
          </ActionButton.Item>
          }
          {!!GlobalState.model.userPermissions.permissions.canViewResponses && <ActionButton.Item
            size={50}
            buttonColor={GlobalStyle.style.secondaryColour}
            title={Translate.do(this.controller.model.onlyMe ? 'All user\'s responses' : 'Only my responses')}
            onPress={() => this.controller.toggleOnlyMe()}>
            <Icon name='user' style={{ fontSize: 25, color: GlobalStyle.style.secondaryColourText }} />
          </ActionButton.Item>}
          <ActionButton.Item
            size={50}
            buttonColor={GlobalStyle.style.secondaryColour}
            title={Translate.do('Advanced Search')}
            onPress={() => this.controller.advancedSearch(this.props.form)}>
            <Icon name='search-plus' style={{ fontSize: 25, color: GlobalStyle.style.secondaryColourText }} />
          </ActionButton.Item>
        </ActionButton>

        <Modal
          isVisible={this.controller.model.csvEmailModalVisible}
          hideOnBack>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{
              backgroundColor: GlobalStyle.style.neutralColour,
              minWidth: 400,
              borderColor: GlobalStyle.style.primaryColourHighlight,
              borderWidth: 1
            }}>
              <View style={{ flexDirection: 'row', padding: 12, backgroundColor: GlobalStyle.style.primaryColour }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: GlobalStyle.style.primaryColourText }}>{Translate.do(`Email CSV`)}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.controller.model.csvEmailModalVisible = false
                  }}>
                  <Icon name='times' color={GlobalStyle.style.primaryColourText} size={20} />
                </TouchableOpacity>
              </View>
              <TextFieldView
                translate
                globalStyle={GlobalStyle.style}
                label='Email'
                placeholder='joe@bloggs.com'
                value={this.controller.model.email}
                onChange={(value) => { this.controller.model.email = value }}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
              />
              <View style={{ padding: 20 }}>
                <IconButton translate label='Email CSV' name='send'
                  onPress={() => this.controller.advancedSearchToCSV()} />

              </View>

            </View>
          </View>
        </Modal>

      </View>
    )
  }
}

@observer
class AdvancedSearch extends Component {
  constructor (props, setState) {
    super(props)
    this.controller = this.props.controller
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title={`Advanced Search`} />
        <Form form={this.props.form} isSearching />
        <ActionButton
          icon={<Icon style={{ color: GlobalStyle.style.primaryColourText }} name='search' size={20} />}
          buttonColor={GlobalStyle.style.primaryColour}
          onPress={() => {
            this.props.onSearch(this.props.form)
            GlobalState.navigation.pop()
          }}
          removeClippedSubviews
        />
      </View>
    )
  }
}

class ViewResponsesController {
  @observable model = {
    quickSearch: '',
    formsList: [],
    lastFormId: null,
    csvEmailModalVisible: false,
    email: GlobalState.model.user.email,
    onlyMe: false,
    page: 1,
    isLoadingResponses: false
  }

  @observable.shallow responsesList = []

  lastSearchForm = null

  constructor () {
    GlobalState.getSetting('email').then(data => {
      if (data) this.model.email = data
    })
  }

  @action doSearch (text, formId) {
    this.lastSearchForm = null // Reset advanced search form to disable csv download
    this.model.quickSearch = text
    if (text) {
      api.responses.quickSearch(text, formId)
        .then(result => {
          this.responsesList = result
        })
    } else {
      this.doAdvancedSearch() // Load last search
    }
  }

  @action viewResponses = form => {
    this.model.form = libForm.clearForm(JSON.parse(JSON.stringify(form)))
    this.doAdvancedSearch(this.model.form)
    GlobalState.navigation.push({ view: <ViewResponsesView form={this.model.form} controller={this} /> })
  }

  @action viewResponse (item) {
    GlobalState.navigation.push({ view: <ViewForm onPop={() => this.doAdvancedSearch()} response={item} /> })
  }

  @action advancedSearch (form) {
    let copiedForm = observable(JSON.parse(JSON.stringify(this.lastSearchForm)))
    copiedForm.isCopied = true
    GlobalState.navigation.push({ view: <AdvancedSearch onSearch={this.doAdvancedSearch} form={copiedForm} /> })
  }

  @action advancedSearchToCSV () {
    let extractedResponses = libForm.extractResponses(this.lastSearchForm, true)
    if (!this.model.email) {
      Alert.alert(Translate.do('Email required'), Translate.do('Please enter an email address before sending.'))
      return
    }
    this.model.csvEmailModalVisible = false
    api.responses.advancedSearchToCSV(this.lastSearchForm._id, extractedResponses, this.model.email)
      .then(() => {
        Alert.alert(Translate.do('Success'), Translate.do('Results have been sent to your email address'))
      })
  }

  @action advancedSearchToUrl () {
    let extractedResponses = libForm.extractResponses(this.lastSearchForm, true)
    Clipboard.setString(`${GlobalState.apiPath}/response/advancedSearchToUrl/?formId=${this.lastSearchForm._id}&responses=${base64.encode(JSON.stringify(extractedResponses))}&apikey=${GlobalState.model.userToken}`)
    Alert.alert(Translate.do('Success'), Translate.do('URL has been copied to your clipboard'))
  }

  @action showEmailPrompt () {
    this.model.csvEmailModalVisible = true
  }

  @action toggleOnlyMe () {
    this.model.onlyMe = !this.model.onlyMe
    this.doAdvancedSearch()
  }

  @action doAdvancedSearch = debounce(async (form) => {
    if (!form) form = this.lastSearchForm
    this.lastSearchForm = form
    let extractedResponses = libForm.extractResponses(form, true)
    this.model.isLoadingResponses = true
    const result = await api.responses.advancedSearch(form._id, extractedResponses, this.model.onlyMe, this.model.page)
      .catch(() => { this.model.isLoadingResponses = false })
    this.setState({ responsesList: result })
    this.model.isLoadingResponses = false
  }, 400)

  @action
  nextPage = () => {
    this.model.isLoadingResponses = true
    this.model.page = this.model.page + 1
    this.doAdvancedSearch()
  }

  @action
  previousPage = () => {
    if (this.model.page > 1) {
      this.model.isLoadingResponses = true
      this.model.page = this.model.page - 1
      this.doAdvancedSearch()
    }
  }
}

export default ViewResponsesSelectForm
export { ViewResponsesView, AdvancedSearch }
