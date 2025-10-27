import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react/native'
import FieldBase from './FieldBase'
import Translate from '../services/Translate'

@observer
class QuickPick extends Component {
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
    const settings = this.props.settings || { label: this.props.label }
    const options = this.getOptions()
    return (
      <FieldBase globalStyle={this.props.globalStyle}
        translate={this.props.translate}
        hidden={this.props.editMode ? false : settings['Hidden']}
        label={this.props.label || settings['Label']}
        hideLabel={settings['Hide Label']}
      >
        <ScrollView horizontal style={{ flex: 1 }}>
          {options.map((item, index) => {
            return (
              <QuickPickItem
                key={index}
                translate={this.props.translate}
                disabled={settings['Read Only'] || this.props.readOnly}
                onPress={this.props.onChange}
                selectedValue={this.props.value}
                isFirst={index === 0}
                isLast={index === options.length - 1}
                item={item}
                globalStyle={this.props.globalStyle}
                returnFullObject={this.props.returnFullObject}
              />)
          })}
        </ScrollView>
      </FieldBase>

    )
  }
}

@observer class QuickPickItem extends Component {
  constructor (props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  onPress () {
    if (this.props.returnFullObject) {
      this.props.onPress(this.props.item)
    } else {
      this.props.onPress(this.props.item.value)
    }
  }

  render () {
    return (
      <TouchableOpacity disabled={this.props.disabled} onPress={this.onPress} style={styles.quickPickItemContainer}>
        <View style={[styles.quickPickItemLine, {
          marginLeft: this.props.isFirst ? 0 : 10,
          marginRight: this.props.isLast ? 0 : 10,
          backgroundColor: (this.props.selectedValue === this.props.item.value) || this.props.item.selected ? this.props.globalStyle ? this.props.globalStyle.primaryColour : 'dodgerblue' : 'rgba(0,0,0,0.1)'
        }]}>
          <Text style={{
            color: (this.props.selectedValue === this.props.item.value) || this.props.item.selected ? this.props.globalStyle ? this.props.globalStyle.primaryColourText : 'white' : this.props.globalStyle ? this.props.globalStyle.neutralColourText : 'rgb(103, 106, 108)',
            fontWeight: 'bold'
          }}>{this.props.translate ? Translate.do(this.props.item.label) : this.props.item.label}</Text>
        </View>
      </TouchableOpacity>)
  }
}

const styles = StyleSheet.create({
  quickPickItemLine: {
    padding: 10,
    margin: 10,
    marginTop: 0,
    marginBottom: 0,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5

  },
  quickPickItemContainer: {
    flex: 1,
    minWidth: 60
  }

})

export default QuickPick
