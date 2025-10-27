import React, { Component } from 'react'
import { Text } from 'react-native'
import Translate from '../services/Translate'

export default class Label extends Component {
  render () {
    return (
      <Text style={{
        flex: 1,
        alignSelf: 'stretch',
        padding: 10,
        paddingTop: 10,
        paddingLeft: 4,
        textAlign: this.props.left ? undefined : 'right',
        color: this.props.globalStyle ? this.props.globalStyle.neutralColourText : 'rgb(103, 106, 108)',
        fontWeight: 'bold',
        marginRight: 10
      }}>
        {this.props.translate ? Translate.do(this.props.label) : this.props.label}
      </Text>
    )
  }
}
