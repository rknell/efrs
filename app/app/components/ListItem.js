import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { observer } from 'mobx-react/native'
import GlobalStyle from '../services/GlobalStyle'

@observer
class ListItem extends Component {
  render () {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={this.props.onPress}>
        <Text style={[styles.label, { color: GlobalStyle.style.neutralColourText }]}>{this.props.label}</Text>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: GlobalStyle.style.neutralColourHighlight,
    borderBottomWidth: 1
  },
  label: { fontSize: 20, flex: 1 }
})

export default ListItem
