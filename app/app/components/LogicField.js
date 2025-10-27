import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import NavBar from '../components/NavBar'
import PickerView from '../componentViews/PickerView'
import HeaderFieldView from '../componentViews/HeaderFieldView'
import GlobalState from '../services/GlobalState'
import { observer } from 'mobx-react/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FieldViews from '../componentViews/FieldViews'
import IconButton from '../components/IconButton'
import IconFa from 'react-native-vector-icons/FontAwesome'
import { extendObservable, observable } from 'mobx'
import GlobalStyle from '../services/GlobalStyle'

@observer
class LogicField extends Component {
  addRule () {
    this.props.data.rules.push({
      operator: 'all',
      action: {
        setting: null,
        value: null
      },
      conditions: []
    })
    this.viewRule(this.props.data.rules[this.props.data.rules.length - 1])
  }

  viewRule (rule) {
    GlobalState.navigation.push({ view: <LogicFieldDetail rule={rule} {...this.props} /> })
  }

  componentWillMount () {
    if (!this.props.data.rules) {
      extendObservable(this.props.data, { rules: observable([]) })
    }
  }

  render () {
    return (
      <View>
        {this.props.data.rules.map((rule, index) => {
          let output = `${rule.action.setting} = ${rule.action.value} when (`
          rule.conditions.forEach((condition, index) => {
            output += `${condition.field} ${condition.operator} ${condition.value}`
            if (index !== rule.conditions.length - 1) {
              if (rule.operator === 'all') {
                output += ' AND '
              } else {
                output += ' OR '
              }
            }
          })
          output += ')'
          return (
            <TouchableOpacity key={index} onPress={() => this.viewRule(rule)}>
              <View style={{
                flexDirection: 'row',
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: GlobalStyle.style.neutralColourHighlight
              }}>
                <Text style={{ color: GlobalStyle.style.neutralColourText }}>{output}</Text>
                <View style={{ flex: 1 }} />
                <IconFa name='chevron-right' />
              </View>
            </TouchableOpacity>)
        })}

        <View style={{ padding: 20 }}><IconButton translate name='plus' label='Add Rule' onPress={() => {
          this.addRule()
        }} /></View>

      </View>
    )
  }
}

@observer
class LogicFieldDetail extends Component {
  fieldToView (fieldName) {
    switch (fieldName) {
      case 'Text':
        return 'TextFieldView'
      case 'QuickPick':
        return 'QuickPickView'
      case 'Date':
        return 'DateFieldView'
      case 'UserPicker':
        return 'UserPickerFieldView'
      case 'GroupPicker':
        return 'GroupPickerFieldView'
      default:
        console.warn('Field not added to LogicField.js', fieldName)
        return 'TextFieldView'
    }
  }

  renderFormType (item) {
    const fieldContainer = this.props.formController.formFields.find(formItem => formItem.value === item.field)

    if (fieldContainer) {
      let field = fieldContainer.field
      const VarField = FieldViews[this.fieldToView(field.fieldType)]
      const settings = this.settingsObjectNew(field)

      settings['Hidden'] = false
      settings['Read Only'] = false

      return (
        <VarField
          globalStyle={GlobalStyle.style}
          settings={settings}
          extraProps={this.extraPropsObject(field)}
          value={item.value}
          onChange={(value) => {
            item.value = value
          }}
        />
      )
    } else {
      return null
    }
  }

  settingsObject (field) {
    const settingsObject = {}
    field.settings.forEach(function (item) {
      settingsObject[item.label] = item
    })
    return settingsObject
  }

  settingsObjectNew (field) {
    const settingsObject = {}
    field.settings.forEach(function (item) {
      settingsObject[item.label] = item.value
    })
    return settingsObject
  }

  extraPropsObject (field) {
    const output = {}
    field.settings.forEach(function (item) {
      output[item.label] = item.extraProps
    })
    return output
  }

  renderJoiner (length, index, operator) {
    if (length - 1 > index) {
      return (<HeaderFieldView globalStyle={GlobalStyle.style} label={operator === 'any' ? 'OR' : 'AND'} />)
    } else {
      return null
    }
  }

  settingView (action, field) {
    const settingsObject = this.settingsObject(field)[action.setting]
    if (settingsObject) {
      const FieldType = FieldViews[settingsObject.fieldType]

      return (
        <FieldType globalStyle={GlobalStyle.style} {...settingsObject.extraProps} value={action.value} label='To Equal'
          onChange={(value) => {
            action.value = value
          }} />)
    } else {
      return null
    }
  }

  lastKey = 0
  _getKey = (item) => {
    if (!item.key) {
      this.lastKey++
      item.key = this.lastKey
    }
    return item.key
  }

  removeItem = (item) => () => {
    const itemIndex = this.props.rule.conditions.findIndex(condition => condition.key === item.key)
    this.props.rule.conditions.splice(itemIndex, 1)
  }

  onSelectField = (item) => (value) => {
    item.value = ''
    item.field = value

    if (item.field === 'cur-group') {
      this.onSetOperator(item)('contains')
    } else {
      this.onSetOperator(item)('===')
    }
  }

  onSetOperator = (item) => (value) => {
    item.operator = value
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <NavBar title='Edit Rule'
          pageActions={[
            {
              icon: 'trash',
              onPress: () => {
                this.props.data.rules.splice(this.props.data.rules.indexOf(this.props.rule), 1)
                GlobalState.navigation.pop()
              },
              label: 'Delete Rule'
            }
          ]}
        />
        <KeyboardAwareScrollView style={{ backgroundColor: GlobalStyle.style.neutralColour }}>
          <PickerView translate globalStyle={GlobalStyle.style} label='Change Setting'
            value={this.props.rule.action.setting}
            options={this.props.data.settings.map((item, index) => {
              return {
                value: item.label,
                label: item.label
              }
            })} onChange={(value) => {
              this.props.rule.action.setting = value
            }} />
          {this.settingView(this.props.rule.action, this.props.data)}
          <PickerView globalStyle={GlobalStyle.style} translate label='When' options={[
            { label: 'Any condition is met', value: 'any' },
            { label: 'All conditions are met', value: 'all' }
          ]} onChange={(value) => {
            this.props.rule.operator = value
          }} value={this.props.rule.operator} />
          <HeaderFieldView translate globalStyle={GlobalStyle.style} label='Conditions' />
          {this.props.rule.conditions.map((item, index) => {
            return (
              <View key={this._getKey(item)}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>
                    <PickerView dontTranslateItems translate globalStyle={GlobalStyle.style} label='Field'
                      value={item.field}
                      options={this.props.formController.formFields} onChange={this.onSelectField(item)} />
                    <PickerView translate globalStyle={GlobalStyle.style} label='is' options={operators}
                      value={item.operator}
                      onChange={this.onSetOperator(item)} />
                    {this.renderFormType(item)}

                  </View>
                  <View style={{ alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', flexBasis: 100 }}>
                    <IconButton translate name='trash' size={20} onPress={this.removeItem(item)} />
                  </View>
                </View>
                {this.renderJoiner(this.props.rule.conditions.length, index, this.props.rule.operator)}
              </View>
            )
          })}

          <View style={{ padding: 20 }}><IconButton translate name='plus' label='Add Condition' onPress={() => {
            this.props.rule.conditions.push({ field: '', operator: '===', value: '' })
          }} /></View>

        </KeyboardAwareScrollView>
      </View>
    )
  }
}

const operators = [
  { label: 'Equal To', value: '===' },
  { label: 'Not Equal To', value: '!==' },
  { label: 'Greater Than', value: '>' },
  { label: 'Greater Than or Equal To', value: '>=' },
  { label: 'Less Than', value: '<' },
  { label: 'Less Than or Equal To', value: '<=' },
  { label: 'Contains', value: 'contains' }
]

export default LogicField
