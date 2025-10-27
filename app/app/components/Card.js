import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react/native'
import Fields from './Fields'

@observer
class Card extends Component {
  add () {
    this.props.values.push(JSON.parse(JSON.stringify(this.props.fields)))
  }

  render () {
    return (
      <View style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
          <Text style={{ flex: 1 }}>{this.props.label}</Text>
          <TouchableOpacity onPress={this.add.bind(this)}><Text style={{ fontSize: 30 }}>+</Text></TouchableOpacity>
        </View>

        {this.props.values && this.props.values.map((item, index) => {
          return (
            <View key={index} style={{
              borderWidth: 1,
              padding: 3,
              margin: 5,
              elevation: 2,
              borderColor: 'rgba(0,0,0,0.1)',
              backgroundColor: 'white'
            }}><Fields fields={item} /></View>
          )
        })}
        {(!this.props.values || !!this.props.values.length) &&
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
          <Text style={{ flex: 1 }}>Add Another</Text>
          <TouchableOpacity onPress={this.add.bind(this)}><Text style={{ fontSize: 30 }}>+</Text></TouchableOpacity>
        </View>
        }
      </View>
    )
  }
}

export default Card
