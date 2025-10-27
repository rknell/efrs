import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import FieldBase from './FieldBase'
import GlobalState from '../services/GlobalState'
import IconFa from 'react-native-vector-icons/FontAwesome'
import TextFieldView from '../componentViews/TextFieldView'
import { extendObservable, observable } from 'mobx'
import { observer } from 'mobx-react/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import NavBar from '../components/NavBar'
import shortId from 'shortid'

@observer
class ListFieldView extends Component {
  render () {
    return (
      <FieldBase globalStyle={this.props.globalStyle} label={this.props.label}>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => {
            GlobalState.navigation.push({ view: <ListFieldDetail {...this.props} /> })
          }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              {this.props.values.map((item, index) => {
                return (
                  <View key={index} style={{
                    padding: 10,
                    flex: -1,
                    marginRight: 10,
                    backgroundColor: this.props.globalStyle ? this.props.globalStyle.primaryColour : 'dodgerblue',
                    marginBottom: 10,
                    borderRadius: 8
                  }}>
                    <Text style={{
                      color: this.props.globalStyle ? this.props.globalStyle.primaryColourText : 'white',
                      fontWeight: 'bold'
                    }}>{item.label}</Text>
                  </View>)
              })}
            </View>
          </TouchableOpacity>
        </View>

      </FieldBase>

    )
  }
}

@observer class ListFieldDetail extends Component {
  @observable model = {
    addingItem: '',
    itemScore: ''
  }

  addItem () {
    this.props.values.push({ label: this.model.addingItem, value: this.model.addingItem, score: '' })
    this.model.addingItem = ''
  }

  getId (item) {
    if (!item.id) {
      if (item._id) {
        item.id = item._id
      } else {
        item.id = shortId.generate()
      }
    }
    return item.id
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <NavBar title='Edit / Add List Items' />
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: this.props.globalStyle ? this.props.globalStyle.neutralColour : 'white'
        }}>
          <View style={{ flex: 1 }}>
            <TextFieldView globalStyle={this.props.globalStyle}
              value={this.model.addingItem}
              onChangeText={(text) => { this.model.addingItem = text }}
              label='Item Name' />

          </View>
          <TouchableOpacity onPress={() => this.addItem()}>
            <View style={{ padding: 20 }}>
              <IconFa
                color={this.props.globalStyle ? this.props.globalStyle.neutralColourText : 'black'}
                name='plus'
                size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView
          style={{
            flex: 1,
            backgroundColor: this.props.globalStyle ? this.props.globalStyle.neutralColour : 'white'
          }}>
          {this.props.values.map((item, index) => {
            return (
              <ListItem globalStyle={this.props.globalStyle} item={item} values={this.props.values}
                key={this.getId(item)} />)
          })}
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

@observer class ListItem extends Component {
  constructor (props) {
    super(props)
    this.removeItem = this.removeItem.bind(this)
    this.moveDown = this.moveDown.bind(this)
    this.moveUp = this.moveUp.bind(this)
    this.moveItem = this.moveItem.bind(this)
    this.changeScore = this.changeScore.bind(this)
    this.changeLabel = this.changeLabel.bind(this)

    if (!this.props.item.score) {
      extendObservable(this.props.item, { score: '' })
    }
  }

  removeItem () {
    this.props.values.splice(this.props.values.indexOf(this.props.item), 1)
  }

  moveItem (array, oldIndex, newIndex) {
    while (oldIndex < 0) {
      oldIndex += array.length
    }
    while (newIndex < 0) {
      newIndex += array.length
    }
    if (newIndex >= array.length) {
      let k = newIndex - array.length
      while ((k--) + 1) {
        array.push(undefined)
      }
    }
    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0])
    return array // for testing purposes
  }

  moveUp () {
    const index = this.props.values.indexOf(this.props.item)
    this.moveItem(this.props.values, index, index - 1)
  }

  moveDown () {
    const index = this.props.values.indexOf(this.props.item)
    this.moveItem(this.props.values, index, index + 1)
  }

  changeScore (value) {
    if (value === '') {
      this.props.item.score = ''
    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      this.props.item.score = parseFloat(value).toString()
    }
  }

  changeLabel (value) {
    this.props.item.label = value
    this.props.item.value = value
  }

  render () {
    return (
      <View style={{
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: this.props.globalStyle ? this.props.globalStyle.neutralColourHighlight : 'rgba(0,0,0,0.1)'
      }}>
        <View style={{ flex: 1 }}>
          <TextInput onChangeText={this.changeLabel}
            value={this.props.item.label}
            style={[{ color: this.props.globalStyle ? this.props.globalStyle.neutralColourText : 'black' }]} />
        </View>
        <TextInput placeholder='score'
          keyboardType='number-pad'
          value={this.props.item.score}
          onChangeText={this.changeScore}
          style={[{ color: this.props.globalStyle ? this.props.globalStyle.neutralColourText : 'black' }]} />
        <TouchableOpacity onPress={this.moveUp}>
          <View style={{ paddingLeft: 10 }}>
            <IconFa
              color={this.props.globalStyle ? this.props.globalStyle.neutralColourText : 'black'}
              name='chevron-up'
              size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.moveDown}>
          <View style={{ paddingLeft: 10 }}>
            <IconFa color={this.props.globalStyle ? this.props.globalStyle.neutralColourText : 'black'}
              name='chevron-down' size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.removeItem}>
          <View style={{ paddingLeft: 30 }}>
            <IconFa color={this.props.globalStyle ? this.props.globalStyle.neutralColourText : 'black'}
              name='trash'
              size={20} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ListFieldView
