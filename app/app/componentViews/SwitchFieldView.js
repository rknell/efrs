import React, { Component } from 'react'
import { Switch } from 'react-native'
import { observer } from 'mobx-react/native'
import FieldBase from './FieldBase'

@observer
class SwitchFieldView extends Component {
  render () {
    const settings = this.props.settings || { Label: this.props.label }
    const style = this.props.globalStyle || {}
    return (
      <FieldBase globalStyle={style}
        translate={this.props.translate}
        hidden={this.props.editMode ? false : settings['Hidden']}
        label={settings.Label}>
        <Switch trackColor={style.primaryColour} value={this.props.value} onValueChange={this.props.onChange} />
      </FieldBase>
    )
  }
}

export default SwitchFieldView
