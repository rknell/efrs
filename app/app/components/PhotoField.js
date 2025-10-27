import React, { Component } from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react/native'
import EditModeWrapper from './EditModeWrapper'
import FieldController from '../services/FieldController'
import PhotoFieldView from '../componentViews/PhotoFieldView'
import GlobalStyle from '../services/GlobalStyle'

@observer
class PhotoField extends Component {
  constructor (props) {
    super(props)
    this.controller = new PhotoFieldController(props)
  }

  componentWillMount () {
    this.controller.initialise()
  }

  onChange = data => {
    this.props.data.values.default = data
  }

  render () {
    return (
      <View>
        <EditModeWrapper {...this.props} onPressEdit={() => {
          this.controller.viewSettings()
        }}>
          <PhotoFieldView
            value={this.props.data.values.default}
            onChange={this.onChange}
            settings={this.controller.settingsObject}
            editMode={this.props.editMode}
            readOnly={this.props.readOnly}
            globalStyle={GlobalStyle.style}
          />
        </EditModeWrapper>
      </View>
    )
  }
}

class PhotoFieldController extends FieldController {
  settings = [
    {
      value: 'Photos',
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
      value: '',
      label: 'Max Photos',
      fieldType: 'TextFieldView',
      extraProps: {}
    }
  ]
}

export default PhotoField
