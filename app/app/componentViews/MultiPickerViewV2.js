import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FieldBase from './FieldBase'
import GlobalState from '../services/GlobalState'
import IconFa from 'react-native-vector-icons/FontAwesome'
import { observer } from 'mobx-react/native'
import NavBar from '../components/NavBar'

@observer
class MultiPickerView extends Component {
  // TODO: Find out where the last case is happening (its somewhere in the rules) and fix it
  getOptions () {
    if (this.props.options) {
      return this.props.options
    } else if (this.props.extraProps && this.props.extraProps['Options']) {
      return this.props.extraProps['Options'].values
    } else if (this.props.settings && this.props.settings.Options && this.props.settings.Options.extraProps && this.props.settings.Options.extraProps.values) {
      return this.props.settings.Options.extraProps.values
    }
  }

  render () {
    const settings = this.props.settings || { Label: this.props.label }

    return (
      <FieldBase globalStyle={this.props.globalStyle} label={settings.Label}>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => {
            GlobalState.navigation.push({
              view: <MultiPickerDetail globalStyle={this.props.globalStyle} {...this.props} />
            })
          }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              {(!!this.props.values && this.props.values.length && (this.props.values[0] !== ''))
                ? this.props.values.map((item, index) => {
                  return (
                    <View key={index} style={{
                      padding: 10,
                      flex: -1,
                      marginRight: 10,
                      backgroundColor: this.props.globalStyle ? this.props.globalStyle.primaryColour : 'dodgerblue',
                      marginBottom: 10,
                      borderRadius: 8
                    }}><Text style={{
                        color: this.props.globalStyle ? this.props.globalStyle.primaryColourText : 'white',
                        fontWeight: 'bold'
                      }}>{item.label || item}</Text></View>)
                })
                : <Text style={{ padding: 10 }}>Select an item</Text>
              }
            </View>
          </TouchableOpacity>
        </View>

      </FieldBase>
    )
  }
}

@observer class MultiPickerDetail extends Component {
  // TODO: Find out where the last case is happening (its somewhere in the rules) and fix it
  getOptions () {
    if (this.props.options) {
      return this.props.options
    } else if (this.props.extraProps && this.props.extraProps['Options']) {
      return this.props.extraProps['Options'].values
    } else if (this.props.settings && this.props.settings.Options && this.props.settings.Options.extraProps && this.props.settings.Options.extraProps.values) {
      return this.props.settings.Options.extraProps.values
    }
  }

  render () {
    const options = this.getOptions()

    return (

      <View style={{ flex: 1 }}>
        <NavBar title={this.props.pickerScreenTitle || 'Select Items'} isMenuDisabled />
        <ScrollView style={{ flex: 1, backgroundColor: this.props.globalStyle.neutralColour }}>
          {options.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => {
                this.props.onSelect(item, index)
              }}>
                <View style={{
                  flexDirection: 'row',
                  padding: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: this.props.globalStyle.neutralColourHighlight
                }} key={index}>
                  <Text
                    style={{ color: this.props.globalStyle.neutralColourText }}>{this.props.labelPath ? item[this.props.labelPath] : item.label}</Text>
                  <View style={{ flex: 1 }} />
                  <IconFa name='check' size={20}
                    style={{ color: this.props.values.some(selectedItem => item.value === selectedItem.value) ? this.props.globalStyle.primaryColour : this.props.globalStyle.disabledText }} />
                </View>

              </TouchableOpacity>)
          })}
        </ScrollView>
      </View>
    )
  }
}

export default MultiPickerView
