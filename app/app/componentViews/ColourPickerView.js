import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react/native'
import FieldBase from '../componentViews/FieldBase'
import NavBar from '../components/NavBar'
import GlobalState from '../services/GlobalState'
import tinycolor from 'tinycolor2'

@observer
class ColourPickerView extends Component {
  onPress = () => {
    GlobalState.navigation.push({ view: <ColourPickerSelectView {...this.props} /> })
  }

  render () {
    let settings = { Label: this.props.label }
    if (this.props.settings) settings = this.props.settings
    return (
      <FieldBase hidden={this.props.editMode ? false : settings['Hidden']} label={settings.Label} {...this.props}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} disabled={this.props.readOnly} onPress={this.onPress}>
            {this.props.value ? <View style={{ backgroundColor: this.props.value, padding: 10 }} />
              : <Text style={{ color: 'dodgerblue' }}>Pick Colour</Text>
            }
          </TouchableOpacity>
        </View>
      </FieldBase>
    )
  }
}

export class ColourPickerSelectView extends Component {
  colours = [
    { name: 'Red', value: '#f34235' },
    { name: 'Pink', value: '#e81d62' },
    { name: 'Purple', value: '#9b26af' },
    { name: 'Indigo', value: '#3e50b4' },
    { name: 'Blue', value: '#2095f2' },
    { name: 'Light Blue', value: '#02a8f3' },
    { name: 'Cyan', value: '#00bbd3' },
    { name: 'Teal', value: '#009587' },
    { name: 'Green', value: '#4bae4f' },
    { name: 'Light Green', value: '#8ac249' },
    { name: 'Lime', value: '#ccdb38' },
    { name: 'Yellow', value: '#feea3a' },
    { name: 'Amber', value: '#fec006' },
    { name: 'Orange', value: '#fe9700' },
    { name: 'Deep Orange', value: '#fe5621' },
    { name: 'Brown', value: '#785447' },
    { name: 'Grey', value: '#9d9d9d' },
    { name: 'Blue Grey', value: '#5f7c8a' },
    { name: 'Black', value: '#000' },
    { name: 'White', value: '#fff' }
  ]

  onPress = (colour) => {
    this.props.onChange(colour.value)
    GlobalState.navigation.pop()
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <NavBar title='Select Colour' />
        <ScrollView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }}
          contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          {this.colours.map(colour => <ColourBrick colour={colour} key={colour.value} onPress={this.onPress} />)}
        </ScrollView>
      </View>
    )
  }
}

export class ColourBrick extends Component {
  onPress = () => {
    this.props.onPress(this.props.colour)
  }

  render () {
    return (<TouchableOpacity key={this.props.colour.name} onPress={this.onPress}
      style={{ flexShrink: 0, flexGrow: 1, flexBasis: 100, height: 100, flex: 1 }}>
      <View style={{ padding: 10, flex: 1, backgroundColor: this.props.colour.value }}>
        <Text
          style={{ color: tinycolor(this.props.colour.value).isLight() ? 'black' : 'white' }}>{this.props.colour.name}</Text>
      </View>
    </TouchableOpacity>)
  }
}

export default ColourPickerView
