import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, TouchableNativeFeedback, Platform } from 'react-native'
import IconFA from 'react-native-vector-icons/FontAwesome'
import GlobalStyles from '../services/GlobalStyle'

let UsedTouchable

class AndroidTouchable extends Component {
  render () {
    return (<TouchableNativeFeedback onPress={this.props.onPress}>
      <View style={this.props.style}>{this.props.children}</View>
    </TouchableNativeFeedback>)
  }
}

export default class EditModeWrapper extends Component {
  constructor (props) {
    super(props)
    if (Platform.OS === 'android') {
      UsedTouchable = AndroidTouchable
    } else {
      UsedTouchable = TouchableOpacity
    }
  }

  render () {
    if (this.props.editMode) {
      return (<View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.1)', backgroundColor: GlobalStyles.style.primaryColour }}>
          <UsedTouchable onPress={() => this.props.onMoveUp()} style={{ padding: 5, paddingLeft: 10 }}><IconFA name='chevron-up' size={20} style={{ color: GlobalStyles.style.primaryColourText }} /></UsedTouchable>
          <UsedTouchable onPress={() => this.props.onMoveDown()} style={{ padding: 5, paddingRight: 15 }}><IconFA name='chevron-down' size={20} style={{ color: GlobalStyles.style.primaryColourText }} /></UsedTouchable>
        </View>
        <UsedTouchable onPress={this.props.onPressEdit} style={{ flex: 1 }}>{this.props.children}</UsedTouchable>
        <View style={styles.borderBottom} />
      </View>)
    } else {
      return this.props.children
    }
  }
}

const styles = StyleSheet.create({
  borderBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)'
  },
  editWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)'
  }
})
