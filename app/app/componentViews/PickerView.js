import React, { Component } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import FieldBase from './FieldBase'
import IconFa from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal'
import IconButton from '../components/IconButton'
import GlobalStyle from '../services/GlobalStyle'
import SearchBar from '../components/SearchBar'
import Translate from '../services/Translate'

export default class PickerView extends Component {
  constructor (props) {
    super(props)
    const options = [{ label: '', value: '' }, ...this.props.options]
    this.state = {
      showEditModal: false,
      label: this.getLabel(props.value),
      options: options
    }
  }

  toggleEdit () {
    this.setState({
      ...this.state,
      showEditModal: !this.state.showEditModal
    })
  }

  componentWillReceiveProps (props) {
    this.setState({
      ...this.state,
      label: this.getLabel(props.value),
      showEditModal: false,
      filter: null
    })
  }

  getLabel (value) {
    let output
    this.props.options.forEach(item => {
      if (item.value === value) {
        output = item.label
      }
    })
    return output
  }

  closeModal = () => {
    this.setState({
      ...this.state,
      showEditModal: false,
      filter: null
    })
  }

  onSelect = (value) => () => {
    this.props.onChange(value)
  }

  getFilteredResults = () => {
    let output = this.props.options
    if (this.state.filter) {
      output = output.filter(item => new RegExp(`${this.state.filter}`, 'gi').test(item.label))
    }
    output.sort((a, b) => a.fieldId < b.fieldId ? 1 : -1)
    return output
  }

  searchChanged = (value) => {
    this.setState({
      ...this.state,
      filter: value
    })
  }

  render () {
    return (
      <FieldBase translate={this.props.translate} label={this.props.label} {...this.props}>
        <View>
          {this.state.showEditModal && <Modal isVisible={this.state.showEditModal} hideOnBack>
            <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>

              <SearchBar onChange={this.searchChanged} value={this.state.filter} />
              <FlatList
                keyExtractor={item => item.value}
                data={this.getFilteredResults()}
                renderItem={({ item, index }) => <TouchableOpacity
                  onPress={this.onSelect(item.value)}><View style={{
                    padding: 5,
                    borderBottomColor: GlobalStyle.style.neutralColourHighlight,
                    borderBottomWidth: 1
                  }}>
                    <Text style={{ fontSize: 20 }}>{(this.props.translate && !this.props.dontTranslateItems) ? Translate.do(item.label) : item.label}</Text>
                  </View>
                </TouchableOpacity>}
              />

            </View>
            <IconButton translate name='times' label='Cancel' onPress={this.closeModal} />
          </Modal>}
          <View style={{
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center'
          }}>
            <TouchableOpacity onPress={() => this.toggleEdit()} style={{
              flex: 1,
              justifyContent: 'center'
            }}>
              <Text style={{
                fontSize: 16,
                color: this.props.globalStyle ? this.props.globalStyle.primaryColour : 'dodgerblue',
                fontWeight: 'bold'
              }}>
                {(this.props.translate && !this.props.dontTranslateItems) ? Translate.do(this.state.label) : this.state.label} <IconFa name='caret-down' size={20} /></Text>
            </TouchableOpacity>
          </View>
        </View>
      </FieldBase>

    )
  }
}
