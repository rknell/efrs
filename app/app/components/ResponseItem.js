import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react/native'
import moment from 'moment'
import GlobalStyle from '../services/GlobalStyle'
import Translate from '../services/Translate'
import stores from '../stores'

@observer
class ResponseItem extends Component {
  parseDefaultData (input) {
    if (input && !!input.match && input.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)) {
      return moment(input).format('Do MMM YYYY h:mma')
    } else {
      return input
    }
  }

  renderCustomData (response) {
    const responseKeys = Object.keys(response.responses)
    return responseKeys.reduce((result, responseKey) => {
      const responseItem = response.responses[responseKey]
      if (responseItem.showInSearch) {
        result.push(<View style={{
          flexDirection: 'row',
          marginBottom: 4,
          borderBottomColor: '#e6e7e8',
          borderBottomWidth: 1,
          padding: 4
        }} key={`${response._id}.${responseKey}`}>
          <View style={{ flex: 1 }}>
            <Text>{responseItem.label}</Text>
          </View>
          <View style={{ flex: 3 }}>
            <Text style={{ fontWeight: 'bold' }}>
              {this.parseDefaultData(responseItem.values.default)}
            </Text>
          </View>
        </View>)
      }
      return result
    }, [])
  }

  getFormName (formId) {
    if (formId.name) {
      return formId.name
    } else {
      const form = stores.forms.data.find(form => form._id === formId)
      if (form) {
        return form.name
      } else {
        return `${Translate.do('Form not found')}-${formId}`
      }
    }
  }

  render () {
    let item = this.props.item
    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.onPress()}>
        <View style={[{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: GlobalStyle.style.neutralColourHighlight
        }, this.props.style]}>
          <View style={{ flex: 1 }}>

            {!!item.status && !!item.status.name &&
            <View style={{ backgroundColor: 'lightyellow', alignItems: 'center', padding: 5 }}>
              <Text style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: GlobalStyle.style.neutralColourText
              }}>{item.status.name}</Text>
            </View>
            }
            {(!item.status || !item.status.name) && item.isIncomplete &&
            <View style={{ backgroundColor: 'lightyellow', alignItems: 'center', padding: 5 }}>
              <Text style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: GlobalStyle.style.neutralColourText
              }}>{Translate.do('Pending')}</Text>
            </View>
            }
            {this.props.showFormName &&
            <View style={{ flexDirection: 'row', padding: 4, paddingBottom: 0, borderBottomColor: '#e6e7e8' }}>
              <Text style={{
                fontWeight: 'bold',
                color: GlobalStyle.style.neutralColourText,
                fontSize: 10
              }}>
                {this.getFormName(item.formId)}
              </Text>
            </View>
            }
            {this.renderCustomData(item)}
            <View style={{ padding: 4, flexDirection: 'row' }}><Text style={{
              fontSize: 10,
              color: GlobalStyle.style.neutralColourText
            }}>
              {moment(item.createdAt).format('Do MMM YYYY hh:mm a')}
              {moment(item.updatedAt).diff(moment(item.createdAt), 'minutes', true) > 5 && `, Updated ${moment(item.updatedAt).format('Do MMM YYYY hh:mm a')}`}
              {'.\n'}
              {!!item.createdBy &&
              (`${Translate.do(`Created by`)} ${item.createdBy.firstName ? `${item.createdBy.firstName} ` : ''}${item.createdBy.lastName ? `${item.createdBy.lastName} ` : ''}${(!!item.createdBy.firstName || !!item.createdBy.lastName) ? `(${item.createdBy.username})` : item.createdBy.username}`)
              }
            </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default ResponseItem
