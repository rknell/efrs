import React from 'react'
import { action, computed, extendObservable, observable } from 'mobx'
import FieldSettings from '../components/FieldSettings'
import GlobalState from '../services/GlobalState'

export default class FieldController {
  @observable settingsObject = {};
  @observable extraPropsObject = {};
  disposables = [];
  intervals = [];

  populateSettingsObject () {
    const output = {}
    const extraProps = {}

    this.props.data.settings.forEach(setting => {
      extraProps[setting.label] = setting.extraProps
      output[setting.label] = computed(() => {
        if (setting.calculated) {
          return setting.calculated
        } else {
          return setting.value
        }
      })
    })

    extendObservable(this.settingsObject, output)
    extendObservable(this.extraPropsObject, extraProps)
  }

  constructor (props) {
    this.props = props
  }

  initialise () {
    if (!this.props.data.settings) {
      extendObservable(this.props.data, {
        settings: this.settings
      })
      this.viewSettings()
    } else {
      // Inject any new settings into the app
      this.settings.forEach((setting, index) => {
        let foundSetting = this.props.data.settings.find(existingSetting => existingSetting.label === setting.label)
        if (!foundSetting) {
          this.props.data.settings.splice(index, 0, setting)
        } else {
          // Update settings
          foundSetting.fieldType = setting.fieldType
          foundSetting.label = setting.label
          foundSetting.extraProps = { ...setting.extraProps, ...foundSetting.extraProps }
        }
      })
    }

    this.settings.forEach(setting => {
      if (!setting.calculated) {
        extendObservable(setting, { calculated: null })
      }
    })

    this.populateSettingsObject()
  }

  dispose () {
    this.disposables.forEach(disposable => {
      disposable()
    })

    this.intervals.forEach(interval => {
      clearInterval(interval)
    })
  }

  @action viewSettings () {
    this.props.formController.model.disableScroll = true
    GlobalState.navigation.push({ view: <FieldSettings {...this.props} onPop={() => { this.props.formController.model.disableScroll = false }} />, animation: 'FloatFromBottomAndroid' })
  }
}
