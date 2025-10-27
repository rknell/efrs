import React, { Component } from 'react'
import { Alert, Button, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { action, computed, extendObservable, observable } from 'mobx'
import { observer } from 'mobx-react/native'
import Form from '../components/Form'
import Icon from 'react-native-vector-icons/FontAwesome'
import TextFieldView from '../componentViews/TextFieldView'
import GlobalState from '../services/GlobalState'
import NavBar from '../components/NavBar'
import HeaderFieldView from '../componentViews/HeaderFieldView'
import GroupPicker from '../components/GroupPicker'
import GlobalStyle from '../services/GlobalStyle'
import SwitchFieldView from '../componentViews/SwitchFieldView'
import stores from '../stores'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Translate from '../services/Translate'

@observer class FormSettings extends Component {
  render () {
    return (<View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
      <NavBar title='Form Settings' isMenuDisabled />
      <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}
        style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <TextFieldView
          translate
          globalStyle={GlobalStyle.style}
          clearButtonMode='while-editing' value={this.props.form.name} label='Form Name'
          onChangeText={(text) => {
            this.props.form.name = text
          }} />

        <GroupPicker globalStyle={GlobalStyle.style} values={this.props.controller.model.form.restrictedGroups}
          translate
          label='Restricted to groups'
          onSelect={(group) => this.props.controller.formRestrictSelected(group)} />

        <TextFieldView
          translate
          globalStyle={GlobalStyle.style}
          clearButtonMode='while-editing' value={this.props.form.emailResponses}
          label='Email a copy'
          settings={{
            'Auto Correct': false,
            'Auto Capitalize': 'none',
            'Placeholder': 'joe@bloggs.com,jane@doe.com'
          }}
          onChangeText={(text) => {
            this.props.form.emailResponses = text
          }} />

        <Text style={{ textAlign: 'center', fontSize: 10 }}>{Translate.do('(enter emails separated by a comma)')}</Text>

        <SwitchFieldView label='Email to supervisor'
          translate
          globalStyle={GlobalStyle.style}
          onChange={this.props.controller.emailToSupervisorChanged}
          value={this.props.controller.model.form.emailToSupervisor} />

        <TextFieldView
          translate
          globalStyle={GlobalStyle.style}
          clearButtonMode='while-editing'
          value={this.props.form.headerImageURL}
          label='Header Image URL'
          settings={{
            'Auto Correct': false,
            'Auto Capitalize': 'none'
          }}
          onChangeText={(text) => {
            this.props.form.headerImageURL = text
          }} />

        <HeaderFieldView label='Page Settings' globalStyle={GlobalStyle.style} />
        {this.props.form.pages.map((page, index) => {
          return (<TouchableOpacity onPress={() => this.props.controller.viewPageSettings(page)} key={index}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              borderBottomColor: 'rgba(0,0,0,0.1)',
              borderBottomWidth: 1
            }}>
              <Text style={{ fontSize: 20 }}>{page.name}</Text><View style={{ flex: 1 }} />
              <Icon name='chevron-right' size={30} />
            </View>
          </TouchableOpacity>)
        })}
      </KeyboardAwareScrollView>
    </View>)
  }
}

@observer class PageSettings extends Component {
  constructor (props) {
    super(props)
    if (!this.props.page.viewGroups) extendObservable(this.props.page, { viewGroups: [] })
    if (!this.props.page.editGroups) extendObservable(this.props.page, { editGroups: [] })
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <NavBar title='Page Settings' isMenuDisabled />
        <TextFieldView
          translate
          clearButtonMode='while-editing' value={this.props.page.name} label='Page Name'
          onChangeText={(text) => {
            this.props.page.name = text
          }} />
        <GroupPicker values={this.props.page.viewGroups} label='View Permissions'
          translate
          onSelect={(group) => this.props.controller.pageRestrictedSelected(this.props.page, group, 'viewGroups')} />
        <GroupPicker values={this.props.page.editGroups} label='Edit Permissions'
          translate
          onSelect={(group) => this.props.controller.pageRestrictedSelected(this.props.page, group, 'editGroups')} />
        <Button color={GlobalStyle.style.errorColour} title={Translate.do('Delete page')}
          onPress={() => this.props.controller.deletePage(this.props.page)} />
      </View>
    )
  }
}

@observer
class FormBuilderView extends Component {
  constructor (props) {
    super(props)
    this.controller = new FormBuilderController(props)
  }

  render () {
    const model = this.controller.model
    return (
      <View style={{ flex: 1, backgroundColor: '#f3f3f4' }}>
        <NavBar
          isMenuDisabled
          dontTranslate
          title={this.controller.formTitle}
          pageActions={[{
            icon: 'save',
            onPress: () => { this.controller.save() },
            label: 'Save Form'
          }]}
          handlePop={() => this.controller.onGoBack()}
        />
        <Form editMode form={model.form} onChangePage={this.controller.onChangePage.bind(this.controller)} />
        <View>
          <ScrollView style={{ flexDirection: 'row' }} horizontal>
            <View style={{ borderRightWidth: 1, borderRightColor: 'rgba(0,0,0,0.1)' }}>
              <TouchableOpacity onPress={() => this.controller.toggleFormSettings()}><View
                style={{ padding: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='cog' size={20} style={{ paddingRight: 5 }} />
                <Text>{Translate.do(`Form Settings`)}</Text></View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.controller.addPage()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`Page`)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addHeader()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`Header`)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addText()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`Text`)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addQuickPick()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`QuickPick`)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addDate()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`Date/Time`)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addPhoto()}>
              <View style={{ padding: 20 }}>
                <Text>{Translate.do(`Photo`)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addTextBlock()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`Text Block`)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addSignature()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`Signature`)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addGeolocation()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`Location`)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addAction()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`Action`)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addCalcField()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`Calc. Field`)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addCompareDateField()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`Compare Dates`)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addScoreField()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`Score`)}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addUserPickerField()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`User Picker`)}</Text>
            </View></TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addGroupPickerField()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`Group Picker`)}</Text>
            </View></TouchableOpacity>
            <TouchableOpacity onPress={() => this.controller.addAssignToField()}><View style={{ padding: 20 }}>
              <Text>{Translate.do(`Assign To`)}</Text>
            </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )
  }
}

class FormBuilderController {
  currentPageIndex = 0

  @observable model = {
    form: null
  }

  @computed get formTitle () {
    return `${this.model.form.name} - ${Translate.do('Form Builder')}`
  }

  constructor (props) {
    this.props = props

    setTimeout(() => {
      GlobalState.model.toolbarRight = [
        { label: 'Save', icon: 'save', onPress: this.save.bind(this) }
      ]
    }, 1)

    if (this.props.editForm) {
      this.model.form = this.props.editForm
    } else {
      this.model.form = stores.forms.create()
    }

    if (!this.model.form._id) setTimeout(() => this.toggleFormSettings(), 1)

    // Set fieldIds if not set
    this.model.form.pages.forEach(page => {
      page.groups[0].fields.forEach(field => {
        if (!field.fieldId) { field.fieldId = this.getNextFieldId() }
      })
    })

    this.model.form.snapshot()
  }

  @action emailToSupervisorChanged = value => {
    this.model.form.emailToSupervisor = value
  }

  getNextFieldId () {
    this.model.form.lastFieldId++
    return this.model.form.lastFieldId
  }

  @action save () {
    GlobalState.model.isBusy = true
    this.model.form.save()
      .then(() => {
        if (this.props.onPop) {
          this.props.onPop()
        }
        GlobalState.navigation.pop()
      })
      .catch(err => {
        Alert.alert(Translate.do('Save error'), Translate.do('There was an error saving your form. Make sure you are online and try again. ') + err.message)
      })
      .finally(() => {
        GlobalState.model.isBusy = false
      })
  }

  @action addPage () {
    this.model.form.pages.push(observable({
      name: `${Translate.do('Page')} ${this.model.form.pages.length + 1}`,
      groups: observable([
        { fields: observable([]) }
      ])
    }))
  }

  @action addText () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'Text',
      'fieldId': this.getNextFieldId(),
      'values': {
        'default': ''
      }
    }))
  }

  @action addTextBlock () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'TextBlock',
      'fieldId': this.getNextFieldId(),
      'values': {
        'default': ''
      }
    }))
  }

  @action addSignature () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'Signature',
      'fieldId': this.getNextFieldId(),
      'values': {
        'default': ''
      }
    }))
  }

  @action addGeolocation () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'Geolocation',
      'fieldId': this.getNextFieldId(),
      'values': {
        'default': ''
      }
    }))
  }

  @action addHeader () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'Header',
      'fieldId': this.getNextFieldId()
    }))
  }

  @action addQuickPick () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'QuickPick',
      'fieldId': this.getNextFieldId(),
      'values': {
        'default': ''
      }
    }))
  }

  @action addAction () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'Action',
      'fieldId': this.getNextFieldId()
    }))
  }

  @action addDate () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'Date',
      'fieldId': this.getNextFieldId(),
      'values': {
        'default': ''
      }
    }))
  }

  @action addCalcField () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'Calculated',
      'fieldId': this.getNextFieldId(),
      'values': {
        'default': ''
      }
    }))
  }

  @action addCompareDateField () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'CompareDateField',
      'fieldId': this.getNextFieldId(),
      'values': {
        'default': ''
      }
    }))
  }

  @action addScoreField () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'ScoreCalculator',
      'fieldId': this.getNextFieldId(),
      'values': {
        'default': ''
      }
    }))
  }

  @action addPhoto () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'Photo',
      'fieldId': this.getNextFieldId(),
      'values': {
        'default': []
      }
    }))
  }

  @action addUserPickerField () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'UserPicker',
      'fieldId': this.getNextFieldId(),
      'values': {
        'default': []
      }
    }))
  }

  @action addGroupPickerField () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'GroupPicker',
      'fieldId': this.getNextFieldId(),
      'values': {
        'default': []
      }
    }))
  }

  @action addAssignToField () {
    this.model.form.pages[this.currentPageIndex].groups[0].fields.push(observable({
      'fieldType': 'AssignToField',
      'fieldId': this.getNextFieldId(),
      'values': {
        'default': []
      }
    }))
  }

  @action onChangePage (args1, args2) {
    this.currentPageIndex = args1.i
  }

  @action toggleFormSettings () {
    GlobalState.navigation.push({
      view: <FormSettings controller={this} form={this.model.form} />,
      animation: 'FloatFromBottomAndroid'
    })
  }

  @action updateForm (newForm) {
    if (this.model.form !== newForm) {
      this.model.form = newForm
    }
  }

  @action viewPageSettings (page) {
    GlobalState.navigation.push({ view: <PageSettings controller={this} page={page} /> })
  }

  @action deletePage (page) {
    this.model.form.pages.splice(this.model.form.pages.indexOf(page), 1)
    // This is only called from the PageSettings view
    GlobalState.navigation.pop()
  }

  @action formRestrictSelected (group) {
    group.selected = !group.selected

    if (group.selected) {
      this.model.form.restrictedGroups.push(group._id)
    } else {
      this.model.form.restrictedGroups.splice(this.model.form.restrictedGroups.indexOf(group._id), 1)
    }
  }

  @action pageRestrictedSelected (page, group, type) {
    group.selected = !group.selected

    if (group.selected) {
      page[type].push(group._id)
    } else {
      page[type].splice(page[type].indexOf(group._id), 1)
    }
  }

  @action onGoBack () {
    if (this.model.form.matchesSnapshot()) {
      GlobalState.navigation.pop()
    } else {
      Alert.alert(Translate.do('Save Changes'), Translate.do('Save changes?'), [
        {
          text: Translate.do('Cancel'),
          onPress: () => {}
        },
        {
          text: Translate.do('Don\'t Save'),
          onPress: () => {
            this.model.form.restoreSnapshot()
            if (this.props.onPop) {
              this.props.onPop()
            }
            GlobalState.navigation.pop()
          }
        },
        {
          text: Translate.do('Save'),
          onPress: () => {
            this.save()
          }
        }
      ])
    }
  }
}

export default FormBuilderView
