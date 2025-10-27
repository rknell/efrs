import React, { Component } from 'react'
import {
  Alert,
  Animated,
  Button,
  Easing,
  Linking,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react/native'
import NavBar from '../components/NavBar'
import GlobalState from '../services/GlobalState'
import api from '../api'
import Form from '../components/Form'
import { applyRules, extractResponses, hydrateValues, validateForm } from '../lib/form'
import IconFA from 'react-native-vector-icons/FontAwesome'
import QuickPickView from '../componentViews/QuickPickView'
import TextFieldView from '../componentViews/TextFieldView'
import ObjectID from 'bson-objectid'
import ActionButton from 'react-native-circular-action-menu'
import GlobalStyle from '../services/GlobalStyle'
import stores from '../stores'
import Translate from '../services/Translate'
import UserPickerFieldView from '../componentViews/UserPickerFieldView'
import GroupPickerFieldView from '../componentViews/GroupPickerFieldView'

@observer
class ExportView extends Component {
  constructor (props) {
    super(props)
    this.controller = props.controller
  }

  setExportView = (item) => {
    this.controller.model.exportSettings.view = item
  }

  setExportFormat = (item) => {
    this.controller.model.exportSettings.format = item
  }

  setExportDestination = (item) => {
    this.controller.model.exportSettings.destination = item
  }

  render () {
    const exportSettings = this.controller.model.exportSettings
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title='Export' />
        <QuickPickView globalStyle={GlobalStyle.style} value={exportSettings.view} onChange={this.setExportView}
          settings={{ Label: 'Export' }} options={[{ label: 'Report', value: 'report' }]} />
        <QuickPickView globalStyle={GlobalStyle.style} value={exportSettings.format} onChange={this.setExportFormat}
          settings={{ Label: 'To Format' }}
          options={[{ label: 'CSV', value: 'csv' }, { label: 'PDF', value: 'html' }]} />
        <QuickPickView globalStyle={GlobalStyle.style} value={exportSettings.destination}
          onChange={this.setExportDestination} settings={{ Label: 'Destination' }}
          options={[{ label: 'Download', value: 'download' }, {
            label: 'Email',
            value: 'email'
          }]} />
        {exportSettings.destination === 'email' &&
        <TextFieldView globalStyle={GlobalStyle.style} value={this.controller.model.email}
          onChange={this.controller.setEmail}
          settings={{
            Label: 'Email',
            'Keyboard Type': 'email-address',
            'Auto Capitalize': 'none',
            'Auto Correct': false
          }} />}
        <Button color={GlobalStyle.style.primaryColour} title='Export' onPress={this.controller.exportReport} />
      </View>
    )
  }
}

@observer
class ViewFormView extends Component {
  constructor (props) {
    super(props)
    this.controller = new ViewFormController(props)
  }

  render () {
    const styles = StyleSheet.create({
      actionButtonIcon: {
        fontSize: 25,
        color: GlobalStyle.style.secondaryColourText
      }
    })

    const actionButtonSize = 50
    const form = this.controller.model.form
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar
          dontTranslate
          title={form.name}
          onPop={this.props.onPop}
          handlePop={this.controller.onGoBack}
          isMenuDisabled
        />
        <View style={{ flex: 1 }}>

          <Form form={form}
            isEditing={this.controller.model.isEditing}
            ref={component => {
              // Required to check since the assign to user may dispose of the current controller before it all catches up
              if (component) this.controller.formController = component.controller
            }} />
          <Animated.View style={{
            position: 'absolute',
            top: -1,
            right: this.controller.animatedValues.emailRight,
            width: 350,
            height: 50,
            backgroundColor: GlobalStyle.style.primaryColour,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomLeftRadius: 8
          }}>
            <TouchableOpacity onPress={this.controller.toggleEmailInput}>
              <View style={{
                padding: 10,
                paddingRight: 0
              }}><IconFA name='times' size={16} style={{ color: GlobalStyle.style.primaryColourText }} />
              </View>
            </TouchableOpacity>
            <View style={{
              flex: 1,
              backgroundColor: GlobalStyle.style.neutralColour,
              borderRadius: 5,
              margin: Platform.OS === 'android' ? 5 : 10,
              paddingLeft: 5
            }}>
              <TextInput keyboardType='email-address' autoCapitalize='none' autoCorrect={false}
                value={this.controller.model.email} onChangeText={this.controller.setEmail} style={{ flex: 1 }}
                placeholder='Email Address' /></View>
            <TouchableOpacity onPress={this.controller.email}><View style={{ padding: 10 }}><IconFA name='share' size={20}
              style={{ color: GlobalStyle.style.primaryColourText }} /></View></TouchableOpacity>
          </Animated.View>
        </View>

        <ActionButton buttonColor={GlobalStyle.style.primaryColour}
          position='right'
          outRangeScale={2}
          bgColor='rgba(0,0,0,0.5)'
          radius={180}
        >
          <ActionButton.Item buttonColor={GlobalStyle.style.secondaryColour} title={Translate.do('Assign to user to complete')}
            size={actionButtonSize} onPress={this.controller.assignToUser}>
            <IconFA name='file-text-o' style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor={GlobalStyle.style.secondaryColour} title={Translate.do('Assign to group to complete')}
            size={actionButtonSize} onPress={this.controller.assignToGroup}>
            <IconFA name='file-text-o' style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor={GlobalStyle.style.secondaryColour} title={Translate.do('Save as draft')}
            size={actionButtonSize} onPress={this.controller.draft}>
            <IconFA name='file-text-o' style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor={GlobalStyle.style.secondaryColour} title={Translate.do('Save & complete')}
            size={actionButtonSize} onPress={this.controller.save}>
            <IconFA name='save' style={styles.actionButtonIcon} />
          </ActionButton.Item>
          {GlobalState.model.userPermissions.permissions.canExportResponses &&
          <ActionButton.Item buttonColor={GlobalStyle.style.secondaryColour} title={Translate.do('Email')} size={actionButtonSize}
            onPress={this.controller.toggleEmailInput}>
            <IconFA name='envelope' style={styles.actionButtonIcon} />
          </ActionButton.Item>

          }
          {GlobalState.model.userPermissions.permissions.canExportResponses &&
          <ActionButton.Item buttonColor={GlobalStyle.style.secondaryColour} title={Translate.do('Export')} size={actionButtonSize}
            onPress={this.controller.export}>
            <IconFA name='file-excel-o' style={styles.actionButtonIcon} />
          </ActionButton.Item>
          }

        </ActionButton>
      </View>
    )
  }
}

export class ViewFormController {
  @observable model = {
    form: null,
    originalForm: '',
    responseId: '',
    email: '',
    emailInputVisible: false,
    exportSettings: {
      view: 'report',
      format: null,
      destination: null
    },
    isEditing: false
  }

  animatedValues = {
    emailRight: new Animated.Value(-380)
  }

  animations = {
    hideEmail: Animated.timing(this.animatedValues.emailRight, {
      toValue: -380,
      easing: Easing.out(Easing.cubic),
      duration: 100
    }),
    showEmail: Animated.timing(this.animatedValues.emailRight, { toValue: 0, easing: Easing.linear, duration: 200 })
  }

  formController = null;

  constructor (props) {
    this.props = props
    let form = props.form
    if (props.response) {
      this.model.isEditing = true
      // Load Field
      // This toString step is required because of random BSON (esp in tests)
      const formId = props.response.formId._id || props.response.formId
      form = stores.forms.data.find(form => {
        const storeFormId = form._id.toString()
        const responseFormId = formId.toString()
        return storeFormId === responseFormId
      })

      if (!form) {
        Alert.alert(Translate.do('Error'), Translate.do('Could not find form. It may have been deleted.'))
        GlobalState.pop()
        return
      } else {
        // Copy form
        form = observable(JSON.parse(JSON.stringify(form)))
        form.responseId = props.response._id

        hydrateValues(form, props.response)

        this.model.responseId = props.response._id
        applyRules(form, false, GlobalState.current())
        this.model.form = form
      }
    } else {
      this.model.responseId = ObjectID().toString()
      form.responseId = this.model.responseId
      this.model.form = observable({
        ...JSON.parse(JSON.stringify(form)),
        dateStarted: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
    }

    GlobalState.getSetting('email').then(data => {
      if (data) this.model.email = data
    })

    GlobalState.getSetting('lastExport').then(data => {
      if (data) this.model.exportSettings = JSON.parse(data)
    })

    this.model.originalForm = JSON.stringify(this.model.form)
  }

  @action onGoBack = () => {
    if (this.formHasChanged()) {
      Alert.alert(Translate.do('Has Changes'), Translate.do('You have unsaved changes.'), [
        { text: Translate.do('Don\'t Save'), onPress: () => GlobalState.navigation.pop() },
        { text: Translate.do('Save Changes'), onPress: () => this.save() },
        { text: Translate.do('Cancel'), onPress: () => {}, style: 'cancel' }
      ])
    } else {
      GlobalState.navigation.pop()
    }
  }

  @action draft = () => {
    return api.responses.saveDraft(this.model.form)
      .then(() => {
        GlobalState.navigation.pop()
      })
  }

  @action save = async (dontGoBack, isIncomplete) => {
    let invalidFields = validateForm(this.model.form)
    if (isIncomplete) {
      invalidFields = [] // Dont perform any validation because the form still needs work performed}
      this.model.form.isIncomplete = true
    } else {
      this.formController.unassignAll()
      this.model.form.isIncomplete = false
    }
    if (invalidFields.length) {
      let validationMessage = ''
      invalidFields.forEach(validationError => {
        validationMessage += `${validationError.page} - ${validationError.field} is ${validationError.reason}.\n`
      })
      validationMessage += 'Please correct and try again.'
      Alert.alert(Translate.do('Validation Error'), validationMessage)
      throw new Error('Form not valid')
    } else {
      try {
        GlobalState.model.isBusy = true
        const newItem = stores.responses.createFromForm(this.model.form)
        await newItem.save()
        api.responses.deleteDraftById(newItem._id)
        GlobalState.model.isBusy = false
        Alert.alert(Translate.do('Success'), Translate.do('Response submitted successfully.'))
        if (!dontGoBack) {
          if (this.props.onPop) this.props.onPop()
          GlobalState.navigation.pop()
        } else {
          this.model.originalForm = JSON.stringify(this.model.form)
        }
      } catch (err) {
        GlobalState.model.isBusy = false
        if (!err.type) {
          Alert.alert(Translate.do('Offline'), Translate.do('You appear to be offline. The response has been saved to the outbox to upload later'))
          GlobalState.navigation.pop()
        } else if (err.status >= 400 && err.status < 500) {
          Alert.alert(Translate.do('Invalid Data'), Translate.do(`The data you have submitted has a problem. It has NOT been saved to upload later. Please correct any errors and try again.`))
        } else if (err.status >= 500) {
          Alert.alert(Translate.do('Server Error'), Translate.do('A server error has occurred. You submission has been saved to the outbox and will be submitted again later.'))
          GlobalState.navigation.pop()
        }
        throw err
      }
    }
  }

  formHasChanged () {
    return JSON.stringify(extractResponses(this.model.form)) !== JSON.stringify(extractResponses(JSON.parse(this.model.originalForm)))
  }

  @action toggleEmailInput = () => {
    this.model.emailInputVisible = !this.model.emailInputVisible
    if (this.model.emailInputVisible) {
      this.animations.showEmail.start()
    } else {
      this.animations.hideEmail.start()
    }
  }

  @action email = (options) => {
    if (this.formHasChanged()) {
      Alert.alert(Translate.do('Must Save'), Translate.do('The app must save and publish the changes before emailing. Save changes now?'), [
        {
          text: Translate.do('Cancel')
        }, {
          text: Translate.do('Save & Email'),
          onPress: () =>
            this.save(true)
              .then(() => this.email(options))

        }
      ])
    } else {
      GlobalState.saveSetting('email', this.model.email)
      if (!options || options.dontToggleEmail !== true) this.toggleEmailInput()
      return api.responses.email(this.model.email, this.model.responseId)
        .then((res) => {
          Alert.alert(Translate.do('Success'), Translate.do(res.message || 'Email sent successfully'))
        })
        .catch(err => {
          Alert.alert(Translate.do('Error'), Translate.do(err.message || 'An unknown error occurred sending the email'))
        })
    }
  }

  @action emailCSV (options) {
    if (this.formHasChanged()) {
      Alert.alert(Translate.do('Must Save'), Translate.do('The app must save and publish the changes before emailing. Save changes now?'), [
        {
          text: Translate.do('Cancel'),
          onPress: () => {
          }
        }, {
          text: Translate.do('Save & Email'),
          onPress: () => this.save(true)
            .then(() => this.emailCSV(options))

        }
      ])
    } else {
      GlobalState.saveSetting('email', this.model.email)
      if (!options || options.dontToggleEmail !== true) this.toggleEmailInput()
      return api.responses.emailCSV(this.model.email, this.model.responseId)
        .then((res) => {
          Alert.alert(Translate.do('Success'), Translate.do(res.message || 'Email sent successfully'))
        })
        .catch(err => {
          Alert.alert(Translate.do('Error'), Translate.do(err.message || 'An unknown error occurred sending the email'))
        })
    }
  }

  @action view = () => {
    if (this.formHasChanged()) {
      Alert.alert(Translate.do('Must Save'), Translate.do('The app must save and publish the changes before viewing. Save changes now?'), [
        {
          text: Translate.do('Cancel'),
          onPress: () => {
          }
        },
        {
          text: Translate.do('Save & View'),
          onPress: () => {
            return this.save(true)
              .then(this.view)
          }
        }
      ])
    } else {
      Linking.openURL(`${GlobalState.apiPath}/response/viewPdf/${this.model.responseId}`)
    }
  }

  @action viewCSV = () => {
    if (this.formHasChanged()) {
      Alert.alert(Translate.do('Must Save'), Translate.do('The app must save and publish the changes before viewing. Save changes now?'), [
        {
          text: Translate.do('Cancel'),
          onPress: () => {
          }
        },
        {
          text: Translate.do('Save & View'),
          onPress: () => this.save(true)
            .then(this.viewCSV)
        }
      ])
    } else {
      Linking.openURL(`${GlobalState.apiPath}/response/viewCSV/${this.model.responseId}`)
    }
  }

  @action exportReport = () => {
    GlobalState.saveSetting('lastExport', JSON.stringify(this.model.exportSettings))
    const { destination, format } = this.model.exportSettings

    if (destination === 'email' && !this.model.email) {
      return Alert.alert(Translate.do('Invalid'), Translate.do('Please enter an email address to send to.'))
    }

    if (format === 'html' && destination === 'email') {
      this.email({ dontToggleEmail: true })
    } else if (format === 'html' && destination === 'download') {
      this.view()
    } else if (format === 'csv' && destination === 'download') {
      this.viewCSV()
    } else if (format === 'csv' && destination === 'email') {
      this.emailCSV({ dontToggleEmail: true })
    } else {
      Alert.alert(Translate.do('Not available'), Translate.do('Sorry that export path is not available. Please contact your administrator'))
    }
  }

  @action setEmail = (email) => {
    this.model.email = email
  }

  @action export = () => {
    GlobalState.navigation.push({
      view: <ExportView controller={this} />
    })
  }

  @action assignToUser = () => {
    GlobalState.navigation.push({ view: <UserPickerFieldView
      showMenu
      globalStyle={GlobalStyle.style}
      single
      onChange={value => {
        this.formController.assignToUser(value)
        this.save(false, true)
      }}
    /> })
  }

  @action assignToGroup = () => {
    GlobalState.navigation.push({ view: <GroupPickerFieldView
      showMenu
      globalStyle={GlobalStyle.style}
      single
      onChange={value => {
        this.formController.assignToGroup(value)
        this.save(false, true)
      }}
    /> })
  }
}

export default ViewFormView
export { ExportView }
