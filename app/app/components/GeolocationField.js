import React, { Component } from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react/native'
import EditModeWrapper from './EditModeWrapper'
import FieldController from '../services/FieldController'
import GeolocationFieldView from '../componentViews/GeolocationFieldView'
import GlobalStyle from '../services/GlobalStyle'

@observer
class GeolocationField extends Component {
  constructor (props) {
    super(props)
    this.controller = new GeolocationFieldController(props)
  }

  componentWillMount () {
    this.controller.initialise()
  }

  render () {
    if (this.props.isSearching) {
      return null
    } else {
      return (
        <View>
          <EditModeWrapper {...this.props} onPressEdit={() => {
            this.controller.viewSettings()
          }}>
            <GeolocationFieldView
              globalStyle={GlobalStyle.style}
              value={this.props.data.values}
              onChange={(value) => { this.props.data.values = value }}
              settings={this.controller.settingsObject}
              editMode={this.props.editMode}
              readOnly={this.props.readOnly}
              isSearching={this.props.isSearching}
            />
          </EditModeWrapper>
        </View>
      )
    }
  }
}

class GeolocationFieldController extends FieldController {
  settings = [
    {
      value: 'Location',
      label: 'Label',
      fieldType: 'TextFieldView',
      extraProps: {}
    }, {
      value: false,
      label: 'Required',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: false,
      label: 'Read Only',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: false,
      label: 'Hidden',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: false,
      label: 'Report When Hidden',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }, {
      value: true,
      label: 'Resolve Address',
      fieldType: 'QuickPickView',
      extraProps: {
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    }
  ];
}

export default GeolocationField
