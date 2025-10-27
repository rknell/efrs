import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Label from './Label'

export default class FieldBase extends Component {
  render () {
    return (
      <View style={{
        width: this.props.hidden ? 0 : undefined,
        height: this.props.hidden ? 0 : undefined,
        overflow: 'hidden'
      }}>
        <View style={{
          flexDirection: this.props.vertical ? 'column' : 'row',
          borderBottomWidth: this.props.noBorder ? 0 : 1,
          borderColor: this.props.globalStyle ? this.props.globalStyle.neutralColourHighlight : 'rgba(0,0,0,0.1)',
          alignItems: this.props.vertical ? undefined : 'flex-start',
          padding: 10
        }}>
          {!this.props.hideLabel && <Label translate={this.props.translate} left={this.props.vertical} globalStyle={this.props.globalStyle} label={this.props.label} />}
          <View style={{ flex: this.props.vertical ? undefined : 2 }}>{this.props.children}</View>
        </View>
        {!!this.props.error && <Text style={{ margin: 5, color: 'red' }}>{this.props.error}</Text>}
      </View>
    )
  }
}
