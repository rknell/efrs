import React, { Component } from 'react'
import { Alert, Clipboard, Text, TouchableOpacity, View } from 'react-native'
import NavBar from './NavBar'
import FieldViews from '../componentViews/FieldViews'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LogicField from './LogicField'
import { observer } from 'mobx-react/native'
import HeaderFieldView from '../componentViews/HeaderFieldView'
import GlobalState from '../services/GlobalState'
import { observable } from 'mobx'
import GlobalStyle from '../services/GlobalStyle'
import MultiPickerView from '../componentViews/MultiPickerView'
import Translate from '../services/Translate'

@observer
class FieldSettings extends Component {
  onDelete = () => {
    Alert.alert(Translate.do('Confirm'), Translate.do('Are you sure you want to delete the field?'), [
      {
        text: Translate.do('Cancel'),
        onPress: () => {
        }
      }, {
        text: Translate.do('Delete'),
        onPress: () => {
          this.props.onDeleteField()
          GlobalState.navigation.pop()
        }
      }
    ])
  }

  onClearDefault = () => {
    this.props.data.values = observable({ default: '' })
  }

  /**
   * Set the position. Has some unexpected requirements
   * If you want to set the position of the current item, just pass a picker result to afteritem
   * ie. {value: fieldId}
   *
   * If you want to position another item (not the current one) pass an object with the fieldId as the second variable
   * ie {fieldId: fieldId}
   * @param afterItem
   * @param fieldToPosition
   */
  onPositionSet = (afterItem, fieldToPosition) => {
    let thisField, thisPage, thisIndex

    const fieldToPositionId = fieldToPosition ? fieldToPosition.fieldId : this.props.data.fieldId

    // find the current item
    this.props.formController.props.form.pages.forEach(page => {
      page.groups[0].fields.forEach((field, index) => {
        if (Number(field.fieldId) === Number(fieldToPositionId)) {
          thisField = field
          thisPage = page
          thisIndex = index
        }
      })
    })

    if (thisField) {
      // find the next item
      this.props.formController.props.form.pages.forEach((page, pageIndex) => {
        page.groups[0].fields.forEach((field, index) => {
          if (field.fieldId === afterItem.value) {
            thisPage.groups[0].fields.splice(thisIndex, 1)
            page.groups[0].fields.splice(page.groups[0].fields.indexOf(field) + 1, 0, thisField)
          }
        })
      })

      GlobalState.navigation.pop()
    } else {
      Alert.alert(Translate.do('Error'), Translate.do('Could not move field for an unknown reason.'))
    }
  }

  onClone = () => {
    const newItem = JSON.parse(JSON.stringify(this.props.data))

    this.props.formController.props.form.lastFieldId++
    newItem.fieldId = this.props.formController.props.form.lastFieldId
    this.props.formController.props.form.pages[0].groups[0].fields.push(newItem)
    this.onPositionSet({ value: this.props.data.fieldId }, newItem)
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <NavBar
          title='Edit Field Settings'
          isMenuDisabled
          pageActions={[
            {
              icon: 'trash',
              onPress: this.onDelete,
              label: 'Delete'
            }, {
              icon: 'copy',
              onPress: this.onClone,
              label: 'Clone'
            }, {
              icon: 'times',
              onPress: this.onClearDefault,
              label: 'Clear Value'
            }
          ]}
          onPop={() => this.props.onPop()}
        />
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}
          style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>

          {this.props.data.settings.map((item, index) => {
            const FieldType = FieldViews[item.fieldType]
            return (
              <FieldType
                translate
                globalStyle={GlobalStyle.style}
                key={index} {...item.extraProps}
                formController={this.props.formController}
                value={item.value}
                label={item.label}
                onChange={(value) => {
                  item.value = value
                }} />)
          })}

          <MultiPickerView
            translate
            dontTranslateOptions
            globalStyle={GlobalStyle.style}
            single
            label='Position after'
            options={this.props.formController.formFields}
            values={[{ label: Translate.do(`Select position`) }]}
            pickerScreenTitle='Position after ...'
            onSelect={(afterItem) => { this.onPositionSet(afterItem) }} />

          <HeaderFieldView globalStyle={GlobalStyle.style} label='Rules' translate />

          <LogicField {...this.props} />

          <TouchableOpacity onPress={() => Clipboard.setString(`IDLOOKUP(${this.props.data.fieldId})`)}>
            <Text>{Translate.do(`Field ID:`)} {this.props.data.fieldId}</Text>
          </TouchableOpacity>

        </KeyboardAwareScrollView>
      </View>)
  }
}

export default FieldSettings
