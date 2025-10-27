import React, { Component } from 'react'
import { Alert, Linking, Platform, View } from 'react-native'
import { observer } from 'mobx-react/native'
import TextField from './TextField'
import QuickPick from './QuickPick'
import Card from './Card'
import Header from './HeaderField'
import Date from './DateField'
import TextBlockField from './TextBlockField'
import SignatureField from './SignatureField'
import GeolocationField from './GeolocationField'
import ActionField from './ActionField'
import CalculatedField from './CalculatedField'
import ScoreCalculatorField from './ScoreCalculatorField'
import PhotoField from './PhotoField'
import UserPickerField from './UserPickerField'
import GlobalState from '../services/GlobalState'
import AssignToField from './AssignToField'
import GroupPickerField from './GroupPickerField'
import CompareDateField from './CompareDateField'
import Translate from '../services/Translate'

@observer class Fields extends Component {
  deleteField (item) {
    return () => {
      this.props.fields.splice(this.props.fields.indexOf(item), 1)
    }
  }

  reorderField (item, direction) {
    return () => {
      const currentIndex = this.props.fields.indexOf(item)
      let newIndex = currentIndex + 1
      if (direction === 'up') newIndex = currentIndex - 1

      if (newIndex > -1 && newIndex < this.props.fields.length) {
        let tmp = this.props.fields[newIndex]
        this.props.fields[newIndex] = this.props.fields[currentIndex]
        this.props.fields[currentIndex] = tmp
      }
    }
  }

  renderFields (fields) {
    if (!fields) fields = this.props.fields
    let unsupportedFields = 0
    const output = fields.map((item, index) => {
      let props = {
        editMode: this.props.editMode,
        formController: this.props.formController,
        readOnly: this.props.readOnly,
        isSearching: this.props.isSearching,
        data: item,
        key: item.fieldId,
        onDeleteField: this.deleteField(item).bind(this),
        onMoveUp: this.reorderField(item, 'up').bind(this),
        onMoveDown: this.reorderField(item, 'down').bind(this)
      }

      if (item.fieldType === 'Text') {
        return <TextField {...props} key={item.fieldId} />
      } else if (item.fieldType === 'QuickPick') {
        return <QuickPick {...props} key={item.fieldId} />
      } else if (item.fieldType === 'Card') {
        return <Card {...props} key={item.fieldId} />
      } else if (item.fieldType === 'Header') {
        return <Header {...props} key={item.fieldId} />
      } else if (item.fieldType === 'Date') {
        return <Date {...props} key={item.fieldId} />
      } else if (item.fieldType === 'TextBlock') {
        return <TextBlockField {...props} key={item.fieldId} />
      } else if (item.fieldType === 'Signature') {
        return <SignatureField {...props} key={item.fieldId} />
      } else if (item.fieldType === 'Geolocation') {
        return <GeolocationField {...props} key={item.fieldId} />
      } else if (item.fieldType === 'Action') {
        return <ActionField {...props} key={item.fieldId} />
      } else if (item.fieldType === 'Calculated') {
        return <CalculatedField key={item.fieldId} {...props} />
      } else if (item.fieldType === 'CompareDateField') {
        return <CompareDateField key={item.fieldId} {...props} />
      } else if (item.fieldType === 'ScoreCalculator') {
        return <ScoreCalculatorField key={item.fieldId} {...props} />
      } else if (item.fieldType === 'Photo') {
        return <PhotoField key={item.fieldId} {...props} />
      } else if (item.fieldType === 'UserPicker') {
        return <UserPickerField key={item.fieldId} {...props} />
      } else if (item.fieldType === 'GroupPicker') {
        return <GroupPickerField key={item.fieldId} {...props} />
      } else if (item.fieldType === 'AssignToField') {
        return <AssignToField key={item.fieldId} {...props} />
      } else {
        unsupportedFields++
        console.warn('field type does not exist', item.fieldType)
        return null
      }
    })

    if (unsupportedFields) {
      Alert.alert(
        Translate.do('App outdated'),
        Translate.do('There are field types used in this form that are unsupported by this version of the app. Please update to the latest version to continue'),
        [{
          text: Translate.do('Go Back'),
          style: 'cancel',
          onPress: () => {
            GlobalState.navigation.pop()
          }
        }, {
          text: Translate.do('Visit App Store'),
          onPress: () => {
            if (Platform.OS === 'android') {
              Linking.openURL('market://details?id=io.efrs')
            } else {
              Linking.openURL('itms://itunes.apple.com/us/app/apple-store/id1226260785?mt=8')
            }
            GlobalState.navigation.pop()
          }
        }])
    }

    return output
  }

  render () {
    return (
      <View>
        {this.renderFields()}
      </View>
    )
  }
}

export default Fields
