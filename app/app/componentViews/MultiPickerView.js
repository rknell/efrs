import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FieldBase from './FieldBase'
import GlobalState from '../services/GlobalState'
import IconFa from 'react-native-vector-icons/FontAwesome'
import { observer } from 'mobx-react/native'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import { observable } from 'mobx'
import GlobalStyle from '../services/GlobalStyle'
import Translate from '../services/Translate'

@observer
class MultiPickerView extends Component {
  viewOptions = () => {
    GlobalState.navigation.push({
      view: <MultiPickerDetail globalStyle={this.props.globalStyle} {...this.props} />
    })
  }

  render () {
    const settings = this.props.settings || { Label: this.props.label }

    return (
      <FieldBase globalStyle={this.props.globalStyle}
        translate={this.props.translate}
        noBorder={this.props.noBorder}
        label={settings.Label}
        hidden={this.props.editMode ? false : settings['Hidden']}>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.viewOptions} disabled={this.props.readOnly}>
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
                      }}>{(this.props.translate && !this.props.dontTranslateOptions) ? Translate.do(item.label || item) : item.label || item}</Text></View>)
                })
                : <Text style={{
                  padding: 10,
                  color: this.props.readOnly ? this.props.globalStyle.neutralColourTextDisabled : this.props.globalStyle.neutralColourText
                }}>{Translate.do(`Select an item`)}</Text>
              }
            </View>
          </TouchableOpacity>
        </View>
      </FieldBase>
    )
  }
}

@observer
class MultiPickerDetail extends Component {
  @observable model = {
    searchFilter: ''
  }

  constructor (props) {
    super(props)
    this.onSearchBarChange = this.onSearchBarChange.bind(this)
  }

  // TODO: Find out where the last case is happening (its somewhere in the rules) and fix it
  getOptions () {
    let output
    if (this.props.options) {
      output = this.props.options
    } else if (this.props.extraProps && this.props.extraProps['Options']) {
      output = this.props.extraProps['Options'].values
    } else if (this.props.settings && this.props.settings.Options && this.props.settings.Options.extraProps && this.props.settings.Options.extraProps.values) {
      output = this.props.settings.Options.extraProps.values
    }

    if (this.model.searchFilter) {
      output = output.filter(item => new RegExp(`${this.model.searchFilter}`, 'gi').test(this.getLabel(item)))
    }

    // If it is a form usage and the items are strings, compare if the trimmed values match
    if (this.props.values && this.props.values[0] && this.props.values[0].trim) {
      output.forEach(item => {
        if (item.value && item.value.trim) {
          const trimmedItem = item.value.trim()
          const found = !!this.props.values.find(value => {
            return (value.trim && value.trim() === trimmedItem)
          })
          setImmediate(() => { item.selected = found })
        }
      })
    }

    return output
  }

  onSearchBarChange (value) {
    this.model.searchFilter = value
  }

  _keyExtractor = (item, index) => item.guid || index
  getLabel = (item) => {
    if (item) {
      const label = this.props.labelPath ? item[this.props.labelPath] : item.label
      return (this.props.translate && !this.props.dontTranslateOptions) ? Translate.do(label) : label
    } else {
      return Translate.do('No label')
    }
  }

  render () {
    const options = this.getOptions()

    return (
      <View style={{ flex: 1 }}>
        <NavBar title={this.props.pickerScreenTitle || 'Select Items'} isMenuDisabled />
        <SearchBar onChange={this.onSearchBarChange} value={this.model.searchFilter} />
        <FlatList
          style={{ flex: 1, backgroundColor: this.props.globalStyle.neutralColour }}
          data={options}
          keyExtractor={this._keyExtractor}
          renderItem={({ item, index }) => <MultiPickerItem item={item}
            translate={this.props.translate}
            dontTranslateOptions={this.props.dontTranslateOptions}
            onSelect={() => this.props.onSelect(item, index)}
            label={this.getLabel(item)} />}
        />
      </View>
    )
  }
}

@observer
class MultiPickerItem extends Component {
  _getColour = () => this.props.item.selected ? GlobalStyle.style.primaryColour : GlobalStyle.style.disabledText

  render () {
    return (<TouchableOpacity onPress={this.props.onSelect}>
      <View style={[styles.multiPickerItem, { borderBottomColor: GlobalStyle.style.neutralColourHighlight }]}>
        <Text
          style={{ color: GlobalStyle.style.neutralColourText }}>{(this.props.translate && !this.props.dontTranslateOptions) ? Translate.do(this.props.label) : this.props.label}</Text>
        <View style={{ flex: 1 }} />
        <IconFa name='check' size={20} style={{ color: this._getColour() }} />
      </View>
    </TouchableOpacity>)
  }
}

const styles = StyleSheet.create({
  multiPickerItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1
  }
})

export default MultiPickerView
export { MultiPickerItem, MultiPickerDetail }
