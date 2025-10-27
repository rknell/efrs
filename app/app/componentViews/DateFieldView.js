import React, { Component } from 'react'
import {
  Alert,
  DatePickerAndroid,
  Platform,
  Text,
  TextInput,
  TimePickerAndroid,
  TouchableOpacity,
  View
} from 'react-native'
import FieldBase from './FieldBase'
import IconFa from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import { computed, observable } from 'mobx'
import { observer } from 'mobx-react/native'
import Modal from 'react-native-modal'
import IconButton from '../components/IconButton'
import { Calendar } from 'react-native-calendars'
import GlobalStyle from '../services/GlobalStyle'
import Translate from '../services/Translate'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

@observer
class DateFieldView extends Component {
  @observable model = {
    showPicker: false,
    markedDates: {},
    hour: '',
    minute: '',
    meridiem: '',
    isPickingYear: false,
    isPickingMonth: false,
    year: ''
  }

  @computed get displayLabel () {
    let output
    if (this.props.value) {
      if (this.props.settings['Data Type'] === 'time') {
        output = moment(this.props.value).format('HH:mm')
      } else if (this.props.settings['Data Type'] === 'datetime') {
        output = moment(this.props.value).format('Do MMM YYYY, HH:mm')
      } else {
        output = moment(this.props.value).format('Do MMM YYYY')
      }
    } else {
      if (this.props.settings['Data Type'] === 'time') {
        output = 'Select Time'
      } else if (this.props.settings['Data Type'] === 'datetime') {
        output = 'Select Date & Time'
      } else {
        output = 'Select Date'
      }
    }
    return output
  }

  showPicker () {
    if (!this.props.value) this.props.onChange(new Date())
    if (this.props.settings['Initial Picker'] === 'year') this.model.isPickingYear = true
    if (Platform.OS === 'ios' || this.props.settings['Data Type'] === 'datetime') {
      this.model.showPicker = true
    } else if (Platform.OS === 'android') {
      if (this.props.settings['Data Type'] === 'time') {
        TimePickerAndroid.open({
          hour: moment().hour(),
          minute: moment().minute(),
          is24Hour: true
        })
          .then(result => {
            if (result.action !== TimePickerAndroid.dismissedAction) {
              this.props.onChange(moment(`${result.hour}:${result.minute}}`, 'HH:mm').toDate())
            }
          })
          .catch(err => {
            if (err.message) {
              Alert.alert(err.message)
            } else {
              Alert.alert(Translate.do('Can\'t open time picker'))
            }
          })
      } else { // Its a date picker
        DatePickerAndroid.open({
          date: new Date(this.props.value) || new Date(),
          minDate: this.props.minDate ? new Date(this.props.minDate) : undefined,
          maxDate: this.props.maxDate ? new Date(this.props.maxDate) : undefined
        })
          .then(result => {
            if (result.action !== DatePickerAndroid.dismissedAction) {
              this.props.onChange(moment(`${result.year}-${result.month + 1}-${result.day}`, 'YYYY-MM-DD').toDate())
            }
          }).catch(e => {
            Alert.alert(Translate.do('Error'), e.message || Translate.do('An unknown error occurred'))
          })
      }
    } else {
      Alert.alert(Translate.do('Not Supported'), Translate.do('Current platform does not support the date picker.'))
    }
  }

  getMarkedDates = () => {
    const markedDates = {}
    markedDates[moment(this.props.value).format('YYYY-MM-DD')] = {
      selected: true,
      selectedColor: GlobalStyle.style.primaryColour
    }
    return markedDates
  }

  setDate = (value) => {
    if (this.props.settings['Data Type'] === 'date') {
      this.props.onChange(value.dateString)
    } else {
      if (this.props.value) {
        const mDate = moment(this.props.value).year(value.year).month(value.month - 1).date(value.day)
        this.props.onChange(mDate.toISOString())
      } else {
        this.props.onChange(moment(value.dateString).toISOString())
      }
    }
  }

  setYear = year => {
    this.props.onChange(moment(this.props.value).year(year).toISOString())
    this.model.isPickingYear = false
    this.model.isPickingMonth = true
  }

  setMonth = month => {
    this.props.onChange(moment(this.props.value).month(MONTHS.indexOf(month)).toISOString())
    this.model.isPickingMonth = false
  }

  onChangeHour = (value) => {
    if (value.length === 2) {
      this.refs.minuteInput.focus()
    }
    if (value < 24) {
      this.model.hour = value
    }
    this.onChangeTime()
  }

  onChangeMinute = (value) => {
    if (Number(value) < 60) {
      this.model.minute = value
    }
    this.onChangeTime()
  }

  onChangeTime = () => {
    if (this.model.hour && this.model.minute) {
      let actualHour = this.model.hour
      if (Number(this.model.hour) < 12 && this.model.meridiem === 'pm') {
        actualHour = Number(this.model.hour) + 12
      }
      if (Number(this.model.hour) === 12 && this.model.meridiem === 'am') {
        actualHour = 0
      }

      this.props.onChange(moment(this.props.value).minute(this.model.minute).hour(actualHour).toISOString())
    }
  }

  onHourKeyPress = (evt) => {
    if (evt.nativeEvent.key === 'Enter') {
      this.refs.minuteInput.focus()
    }
  }

  onMinuteKeyPress = (evt) => {
    if (evt.nativeEvent.key === 'Backspace' && this.model.minute.length <= 1) {
      this.refs.hourInput.focus()
    }
  }

  setMeridiem = value => () => {
    this.model.meridiem = value
    this.onChangeTime()
  }

  hidePicker = () => { this.model.showPicker = false }

  constructor (props) {
    super(props)

    if (this.props.value) {
      const momentObj = moment(this.props.value)
      this.model.hour = momentObj.hours().toString()
      this.model.minute = momentObj.minutes().toString()
    }
  }

  render () {
    return (
      <FieldBase hidden={this.props.settings['Hidden'] && !this.props.editMode}
        label={this.props.settings['Label']} {...this.props}>

        {this.props.settings['Set Now Button']
          ? <View style={{ justifyContent: 'center', flex: 1 }}>
            <TouchableOpacity onPress={() => this.props.onChange(new Date())} style={{
              backgroundColor: this.props.globalStyle ? this.props.globalStyle.primaryColour : 'dodgerblue',
              padding: 10,
              alignItems: 'center',
              borderRadius: 10,
              alignSelf: 'stretch'
            }}>
              <Text style={{ color: this.props.globalStyle ? this.props.globalStyle.primaryColourText : 'white' }}>
                {this.props.settings['Data Type'] === 'time' ? Translate.do('Set Time') : Translate.do('Set Date')}
              </Text>
            </TouchableOpacity>
            {!!this.props.value &&
            <Text style={{
              alignSelf: 'center',
              padding: 5,
              color: this.props.globalStyle.neutralColourText
            }}>{this.displayLabel}
            </Text>}
          </View>
          : this.model.showPicker
            ? <Modal
              isVisible={this.model.showPicker}
              swipeDirection='up'
              onSwipe={() => {
                this.model.showPicker = false
              }}>

              <View style={{ margin: 10, padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
                {this.props.settings['Data Type'] !== 'time' &&
                <View style={{ height: 350, justifyContent: 'center' }}>
                  {this.model.isPickingYear &&
                  <TouchableOpacity onPress={() => {
                    this.model.isPickingMonth = true
                    this.model.isPickingYear = false
                  }} style={{ justifyContent: 'center' }}>
                    <View style={{ padding: 30 }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{Translate.do('Select Year')}</Text>
                      <TextInput placeholder='YYYY'
                        value={this.model.year}
                        onChangeText={val => { this.model.year = val }}
                        keyboardType='numeric'
                        maxLength={4}
                        selectTextOnFocus
                        style={{
                          fontSize: 32,
                          textAlign: 'center',
                          borderWidth: 1,
                          borderColor: GlobalStyle.style.neutralColourHighlight
                        }} />
                    </View>
                    <IconButton label='Select Month' name='chevron-right' translate onPress={() => {
                      this.model.isPickingMonth = true
                      this.model.isPickingYear = false
                      this.setYear(this.model.year)
                    }} />
                  </TouchableOpacity>
                  }
                  {this.model.isPickingMonth &&
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{Translate.do('Select Month')}</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                      {MONTHS.map(month => <TouchableOpacity
                        style={{ flexBasis: 80, flex: 1, alignItems: 'center', padding: 20, justifyContent: 'center' }}
                        onPress={() => { this.setMonth(month) }}>
                        <Text style={{ color: GlobalStyle.style.secondaryColour }}>{Translate.do(month)}</Text>
                      </TouchableOpacity>)
                      }
                    </View>
                  </View>
                  }
                  {!this.model.isPickingMonth && !this.model.isPickingYear &&
                  <Calendar
                    current={moment(this.props.value).format('YYYY-MM-DD')}
                    minDate={this.props.minDate}
                    maxDate={this.props.maxDate}
                    onDayPress={this.setDate}
                    markedDates={this.getMarkedDates()}
                    onPressYear={() => { this.model.isPickingYear = true; this.model.year = moment(this.props.value).format('YYYY') }}
                    theme={{
                      arrowColor: GlobalStyle.style.secondaryColour
                    }}
                  />
                  }
                </View>
                }

                {(this.props.settings['Data Type'] === 'datetime' || this.props.settings['Data Type'] === 'time') &&
                <View style={{
                  padding: 10,
                  borderTopWidth: 1,
                  borderTopColor: this.props.globalStyle.neutralColourOffset,
                  alignItems: 'center'
                }}>
                  <View>
                    <View style={{ borderBottomColor: this.props.globalStyle.neutralColourOffset, borderBottomWidth: 1 }}>
                      <Text style={{ fontSize: 16 }}>{Translate.do('Set Time')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <TextInput ref='hourInput' onChangeText={this.onChangeHour} value={this.model.hour}
                        placeholder='hh'
                        selectTextOnFocus style={{ fontSize: 24, textAlign: 'right', width: 50 }}
                        keyboardType='numeric' maxLength={2}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onKeyPress={this.onHourKeyPress} /><Text style={{ fontSize: 24 }}> : </Text>
                      <TextInput ref='minuteInput' placeholder='mm' selectTextOnFocus style={{ fontSize: 24 }}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={this.onChangeMinute}
                        value={this.model.minute}
                        keyboardType='numeric' maxLength={2} onKeyPress={this.onMinuteKeyPress} />
                      {Number(this.model.hour) <= 12 &&
                      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <TouchableOpacity onPress={this.setMeridiem('am')}>
                          <Text style={{
                            fontSize: 18,
                            color: this.model.meridiem === 'am' ? this.props.globalStyle.primaryColour : this.props.globalStyle.disabledText
                          }}>am</Text>
                        </TouchableOpacity>
                        <Text
                          style={{ fontSize: 18 }}> / </Text>
                        <TouchableOpacity onPress={this.setMeridiem('pm')}>
                          <Text style={{
                            fontSize: 18,
                            color: this.model.meridiem === 'pm' ? this.props.globalStyle.primaryColour : this.props.globalStyle.disabledText
                          }}>pm</Text>
                        </TouchableOpacity>
                      </View>
                      }

                    </View>
                  </View>

                </View>
                }
                {!this.model.isPickingYear && !this.model.isPickingMonth &&
                <IconButton label='Confirm' name='check' onPress={this.hidePicker} />}
              </View>

            </Modal>
            : <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
              {!this.props.settings['Read Only']
                ? <TouchableOpacity disabled={this.props.settings['Read Only'] || this.props.readOnly}
                  onPress={() => this.showPicker()} style={{
                    flex: 1,
                    justifyContent: 'center'
                  }}>
                  <Text style={{
                    fontSize: 16,
                    color: this.props.globalStyle ? this.props.globalStyle.primaryColour : '#1E90FF',
                    fontWeight: 'bold'
                  }}>
                    {Translate.do(this.displayLabel)}&nbsp;<IconFa name='calendar' size={20} />
                  </Text>
                </TouchableOpacity>
                : <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{Translate.do(this.displayLabel)}</Text>
              }
            </View>
        }
      </FieldBase>
    )
  }
}

export default DateFieldView
