import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import EditModeWrapper from './EditModeWrapper'
import HeaderFieldView from '../componentViews/HeaderFieldView'
import FieldController from '../services/FieldController'
import GlobalStyle from '../services/GlobalStyle'

@observer
class HeaderField extends Component {
  componentWillMount () {
    this.controller.initialise()
  }

  constructor (props) {
    super(props)
    this.controller = new HeaderFieldController(props)
  }

  render () {
    return (
      <EditModeWrapper {...this.props} onPressEdit={() => {
        this.controller.viewSettings()
      }}>
        <HeaderFieldView
          globalStyle={GlobalStyle.style}
          settings={this.controller.settingsObject}
          editMode={this.props.editMode}
        />
      </EditModeWrapper>
    )
  }
}

class HeaderFieldController extends FieldController {
  constructor (props) {
    super(props)
    this.props = props
  }

  settings = [{
    value: '',
    label: 'Label',
    fieldType: 'TextFieldView',
    extraProps: {}
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
  }]
}

export default HeaderField
