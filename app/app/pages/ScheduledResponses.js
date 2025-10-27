import React, { Component } from 'react'
import { Alert, FlatList, Switch, Text, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react/native'
import NavBar from '../components/NavBar'
import GlobalStyle from '../services/GlobalStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import GlobalState from '../services/GlobalState'
import { RRule, rrulestr } from 'rrule'
import TextFieldView from '../componentViews/TextFieldView'
import { computed, observable, toJS } from 'mobx'
import MultiPickerView from '../componentViews/MultiPickerView'
import stores from '../stores'
import UserPickerFieldView from '../componentViews/UserPickerFieldView'
import GroupPickerFieldView from '../componentViews/GroupPickerFieldView'
import libForm from '../lib/form'
import FieldBase from '../componentViews/FieldBase'
import Translate from '../services/Translate'
import Form from '../components/Form'
import IconButton from '../components/IconButton'
import DateFieldView from '../componentViews/DateFieldView'

const getFormName = formId => {
  const form = stores.forms.data.find(form => form._id === formId)
  if (form) {
    return form.name
  } else {
    return 'Form not found ' + formId
  }
}

@observer
class ScheduledResponses extends Component {
  addSchedule = () => {
    const newScheduledResponse = stores.scheduledResponses.create()
    GlobalState.navigation.push({ view: <ScheduledResponseDetail scheduledResponse={newScheduledResponse} /> })
  }

  viewItem = item => () => {
    const obsItem = stores.scheduledResponses.data.find(obsItem => obsItem.guid === item.guid)
    GlobalState.navigation.push({ view: <ScheduledResponseDetail scheduledResponse={obsItem} /> })
  }

  toRRule = rule => {
    const cleaned = {}

    for (let key in rule) {
      if (rule[key]) {
        if (rule[key].forEach) {
          if (rule[key].length) cleaned[key] = rule[key]
        } else {
          cleaned[key] = rule[key]
        }
      }
    }
    const finalRule = new RRule(cleaned).toString()
    return rrulestr(finalRule)
  }

  frequencyText = item => {
    if (item.isLastDay) {
      return Translate.do('Last day of the month')
    } else {
      try {
        const rruleObj = this.toRRule(toJS(item.rrule))
        return Translate.do(rruleObj.toText())
      } catch (e) {
        console.error(e)
        console.log(item)
        return Translate.do('Error generating frequency info')
      }
    }
  }

  getResponseText = (item) => {
    let output = ''
    if (item.response && item.response.responses) {
      for (let responseKey in item.response.responses) {
        const field = item.response.responses[responseKey]
        output += field.values.default + '\n'
      }
    }

    return output.trim()
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title='Scheduled responses'
          pageActions={[{
            icon: 'plus',
            onPress: this.addSchedule,
            label: 'New Schedule'
          }]} />

        <FlatList
          keyExtractor={item => item.guid}
          data={toJS(stores.scheduledResponses.data)}
          renderItem={({ item }) => <TouchableOpacity
            onPress={this.viewItem(item)}>
            <View style={{
              padding: 5,
              borderBottomColor: GlobalStyle.style.neutralColourHighlight,
              borderBottomWidth: 1
            }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                {`${getFormName(item.response.formId)}`}
              </Text>
              <Text>{this.frequencyText(item)}</Text>
              {!!item.response && !!item.response.responses &&
                <View style={{ marginTop: 10 }}>

                  <Text style={{ fontWeight: 'bold' }}>
                    {Translate.do('Prefilled Data')}</Text>
                  <Text>{this.getResponseText(item)}</Text>
                </View>
              }

            </View>
          </TouchableOpacity>}
        />

      </View>
    )
  }
}

@observer
class ScheduledResponseDetail extends Component {
  @observable model = {
    copiedForm: null
  }

  componentDidMount () {
    this.props.scheduledResponse.snapshot()
  }

  @observable frequencyOptions = [
    { label: 'Weekly', value: RRule.WEEKLY, selected: false },
    { label: 'Monthly', value: RRule.MONTHLY, selected: false }
    // {label: 'Yearly', value: RRule.YEARLY, selected: false}
  ]

  @computed get frequencyValues () {
    return this.frequencyOptions.filter(option => option.value === this.props.scheduledResponse.rrule.freq)
  }

  changeFrequency = val => {
    if (!val.selected) {
      this.frequencyOptions.forEach(option => { option.selected = false })
      this.props.scheduledResponse.rrule.bymonthday = []
      this.props.scheduledResponse.rrule.byweekday = []
      this.props.scheduledResponse.rrule.bysetpos = []
      this.props.scheduledResponse.isLastDay = false
      if (val) {
        this.props.scheduledResponse.rrule.freq = val.value
        val.selected = !val.selected
      }
      GlobalState.navigation.pop()
    }
  }

  @observable daysOfWeekOptions = [
    { label: 'Monday', value: RRule.MO, selected: false },
    { label: 'Tuesday', value: RRule.TU, selected: false },
    { label: 'Wednesday', value: RRule.WE, selected: false },
    { label: 'Thursday', value: RRule.TH, selected: false },
    { label: 'Friday', value: RRule.FR, selected: false },
    { label: 'Saturday', value: RRule.SA, selected: false },
    { label: 'Sunday', value: RRule.SU, selected: false }
  ]

  @computed get daysOfWeekValues () {
    return this.daysOfWeekOptions.filter(
      option => this.props.scheduledResponse.rrule.byweekday.find(weekday =>
        option.value.weekday === weekday
      ) !== undefined
    )
  }

  changeDaysOfWeek = weekday => {
    const existingWeekday = this.props.scheduledResponse.rrule.byweekday.find(item => item === weekday.value.weekday)
    if (existingWeekday !== undefined) {
      this.props.scheduledResponse.rrule.byweekday.splice(this.props.scheduledResponse.rrule.byweekday.indexOf(existingWeekday), 1)
      weekday.selected = false
    } else {
      this.props.scheduledResponse.rrule.byweekday.push(weekday.value.weekday)
      weekday.selected = true
    }
  }

  changeMonthDay = value => {
    const jsonString = `[${value}]`
    if (value) {
      try {
        this.props.scheduledResponse.rrule.bymonthday = JSON.parse(jsonString)
      } catch (e) {
        console.log(e)
      }
    } else {
      this.props.scheduledResponse.rrule.bymonthday = []
    }
  }

  setLastDayOfMonth = () => {
    if (this.props.scheduledResponse.isLastDay) {
      this.props.scheduledResponse.rrule.byweekday = []
      this.props.scheduledResponse.rrule.bysetpos = []
      this.props.scheduledResponse.rrule.bymonthday = []
    } else {
      this.props.scheduledResponse.rrule.byweekday = [RRule.MO, RRule.TU, RRule.WE, RRule.TH, RRule.FR, RRule.SA, RRule.SU]
      this.props.scheduledResponse.rrule.bysetpos = [-1]
      this.props.scheduledResponse.rrule.bymonthday = []
    }
    this.props.scheduledResponse.isLastDay = !this.props.scheduledResponse.isLastDay
  }

  selectForm = form => {
    console.log('selected form', form)
    this.props.scheduledResponse.response.formId = form.value
    this.props.scheduledResponse.response.responses = null
    GlobalState.navigation.pop()
  }

  @computed get formOptions () {
    return stores.forms.data.map(form => {
      return { label: form.name, value: form._id }
    })
  }

  assignToUser = user => {
    console.log(user)
    this.props.scheduledResponse.assignToUser = user
    this.props.scheduledResponse.assignToGroup = null
  }

  assignToGroup = group => {
    console.log(group)
    this.props.scheduledResponse.assignToGroup = group
    this.props.scheduledResponse.assignToUser = null
  }

  prefillResponse = () => {
    const selectedForm = stores.forms.data.find(form => form._id === this.props.scheduledResponse.response.formId)

    this.model.copiedForm = JSON.parse(JSON.stringify(selectedForm))

    if (this.props.scheduledResponse.response) {
      libForm.hydrateValues(this.model.copiedForm, this.props.scheduledResponse.response)
    }

    GlobalState.navigation.push({
      view: <PrefillForm
        form={this.model.copiedForm}
        onPop={this._processPreFilledResponse} />,
      animation: 'FloatFromBottomAndroid'
    })
  }

  _processPreFilledResponse = () => {
    // Clear out any dates that are 'default to today'
    for (let page of this.model.copiedForm.pages) {
      for (let field of page.groups[0].fields) {
        const settings = libForm.fieldSettings(field)
        if (settings['Default to Today'] || field.fieldType === 'Geolocation') {
          field.values.default = ''
        }
      }
    }
    this.props.scheduledResponse.response = stores.responses.createFromForm(this.model.copiedForm, true)
  }

  save = async () => {
    const isValid = this.props.scheduledResponse.isValid()
    if (isValid === true) {
      await this.props.scheduledResponse.save()
      GlobalState.navigation.pop()
    } else {
      Alert.alert(Translate.do('Invalid'), Translate.do(isValid))
    }
  }

  remove = async () => {
    Alert.alert(Translate.do('Delete'), Translate.do('Are you sure you want to delete this response?'), [{
      text: Translate.do('Cancel'),
      style: 'cancel'
    }, {
      text: Translate.do('Delete'),
      onPress: () => {
        this.props.scheduledResponse.remove()
        GlobalState.navigation.pop()
      }
    }])
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title='Scheduled responses' handlePop={() => {
          if (this.props.scheduledResponse.matchesSnapshot()) {
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
                  this.props.scheduledResponse.restoreSnapshot()
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
        }} />

        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <MultiPickerView
            translate
            options={this.frequencyOptions}
            label='Frequency'
            globalStyle={GlobalStyle.style}
            values={this.frequencyValues}
            onSelect={this.changeFrequency} />

          {this.props.scheduledResponse.rrule.freq === RRule.WEEKLY &&
          <View>
            <MultiPickerView
              translate
              options={this.daysOfWeekOptions}
              values={this.daysOfWeekValues}
              label='Days of week'
              globalStyle={GlobalStyle.style}
              onSelect={this.changeDaysOfWeek} />
          </View>
          }

          {this.props.scheduledResponse.rrule.freq === RRule.MONTHLY &&
          <View>
            {!this.props.scheduledResponse.isLastDay && <View>
              <TextFieldView onChangeText={this.changeMonthDay}
                noBorder
                value={JSON.stringify(this.props.scheduledResponse.rrule.bymonthday).slice(1, -1)}
                label='Day of Month' globalStyle={GlobalStyle.style} />
              <Text style={{ textAlign: 'center' }}>or</Text>
            </View>
            }
            <View style={{
              flexDirection: 'row',
              paddingBottom: 16,
              paddingTop: this.props.scheduledResponse.isLastDay ? 16 : 0,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderBottomColor: GlobalStyle.style.neutralColourHighlight
            }}>
              <Switch value={this.props.scheduledResponse.isLastDay} onChange={this.setLastDayOfMonth} />
              <Text> {Translate.do('Last day of the month')}</Text>
            </View>
          </View>
          }

          <DateFieldView
            translate
            settings={{
              Label: 'Start date & time',
              'Data Type': 'datetime'
            }}
            globalStyle={GlobalStyle.style}
            value={this.props.scheduledResponse.startDateTime}
            onChange={val => { this.props.scheduledResponse.startDateTime = val }}
          />

          <TextFieldView
            translate
            settings={{
              Label: 'Days to complete',
              'Data Type': 'datetime',
              'Keyboard Type': 'number-pad'
            }}
            globalStyle={GlobalStyle.style}
            value={this.props.scheduledResponse.daysToComplete.toString()}
            onChange={val => { this.props.scheduledResponse.daysToComplete = val }}
          />

          <MultiPickerView
            translate
            dontTranslateOptions
            options={this.formOptions}
            label='Select form'
            globalStyle={GlobalStyle.style}
            values={this.props.scheduledResponse.response.formId ? [getFormName(this.props.scheduledResponse.response.formId)] : null}
            onSelect={this.selectForm} />

          {!!this.props.scheduledResponse.response.formId &&
          <FieldBase label='Prefill form' globalStyle={GlobalStyle.style}>
            <TouchableOpacity onPress={this.prefillResponse} style={{ justifyContent: 'center', flex: 1 }}>
              <Text style={{ color: 'dodgerblue' }}>{Translate.do(`edit response`)}</Text>
            </TouchableOpacity>
          </FieldBase>
          }

          <UserPickerFieldView label='Assign to User'
            value={this.props.scheduledResponse.assignToUser}
            noBorder
            translate
            single
            onChange={this.assignToUser}
            globalStyle={GlobalStyle.style} />
          <Text style={{ textAlign: 'center' }}>or</Text>
          <GroupPickerFieldView label='Assign to Group'
            noBorder
            value={this.props.scheduledResponse.assignToGroup}
            translate
            single
            globalStyle={GlobalStyle.style}
            onChange={this.assignToGroup} />

          <View style={{ padding: 20, paddingTop: 0 }}>
            <IconButton label='Save' name='save' translate onPress={this.save} />
          </View>

          {!!this.props.scheduledResponse._id &&
          <View style={{ padding: 20, paddingTop: 0 }}>
            <IconButton label='Delete' name='trash' translate onPress={this.remove} />
          </View>
          }

        </KeyboardAwareScrollView>
      </View>
    )
  }
}

export class PrefillForm extends Component {
  render () {
    return (<View style={{ backgroundColor: GlobalStyle.style.neutralColour, flex: 1 }}>
      <NavBar isMenuDisabled title='Prefill Form' onPop={this.props.onPop} />
      <Form form={this.props.form} style={{ flex: 1 }} />
    </View>)
  }
}

export default ScheduledResponses
export { ScheduledResponseDetail }
