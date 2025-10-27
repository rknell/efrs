import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { observer } from 'mobx-react/native'
import GlobalStyle from '../services/GlobalStyle'

@observer
class CardStyle extends Component {
  render () {
    return (
      <View style={[{ padding: 5, paddingBottom: 5 }, this.props.style]}>
        <View style={{
          backgroundColor: GlobalStyle.style.neutralColour,
          borderColor: GlobalStyle.style.neutralColourHighlight,
          flex: 1,
          borderRadius: 10,
          elevation: 1,
          overflow: 'hidden'
        }}>
          {!!this.props.title &&
          <View
            style={{ borderBottomColor: GlobalStyle.style.neutralColourHighlight, borderBottomWidth: 2 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: GlobalStyle.style.neutralColourText, padding: 16 }}>
              {this.props.title} <Text
                style={{ fontWeight: 'normal', fontSize: 14, marginLeft: 16 }}>{this.props.subTitle}</Text>
            </Text>
          </View>
          }
          {this.props.children}
        </View>
      </View>
    )
  }
}

export default CardStyle
