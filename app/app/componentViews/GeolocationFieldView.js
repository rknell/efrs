import React, { Component } from 'react'
import { Text, View } from 'react-native'
import FieldBase from './FieldBase'
import IconButton from '../components/IconButton'
import { observable } from 'mobx'
import GlobalState from '../services/GlobalState'
import Geocoder from 'react-native-geocoder'
import { observer } from 'mobx-react/native'

@observer
class GeolocationFieldView extends Component {
  @observable error = ''

  componentDidMount () {
    if (!this.props.value.default) {
      this.refreshGeolocation()
    }
  }

  refreshGeolocation () {
    if (!this.props.editMode) {
      this.error = ''
      navigator.geolocation.getCurrentPosition((position) => {
        let output = {
          default: `${position.coords.latitude},${position.coords.longitude}`
        }

        if (this.props.settings['Resolve Address']) {
          Geocoder.geocodePosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
            .then(address => {
              output.address = address[0].formattedAddress
              this.props.onChange(output)
            }).catch(e => {
              output.address = 'Error resolving address'
              console.log(e)
            })
        } else {
          this.props.onChange(output)
        }
      }, (err) => {
        this.error = err.message
      }, {
        enableHighAccuracy: true
      })
    }
  }

  getTextColour = () => this.props.globalStyle ? this.props.globalStyle.neutralColourText : 'black'

  render () {
    return (
      <FieldBase globalStyle={this.props.globalStyle}
        hidden={this.props.editMode ? false : this.props.settings['Hidden']} label={this.props.settings.Label}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            {!!this.error &&
            <Text style={{ color: this.getTextColour() }}>
              {this.error}
            </Text>
            }
            {!this.error && !this.props.value &&
            <Text style={{ color: this.getTextColour() }}>
              Invalid configuration. No value supplied. Please contact your administrator.
            </Text>
            }
            {this.props.editMode &&
            <Text style={{ color: this.getTextColour() }}>
              Location not available when editing
            </Text>
            }
            {!this.error && !!this.props.value && !this.props.value.default && !this.props.editMode &&
            <Text style={{ color: this.getTextColour() }}>
              Getting location...
            </Text>
            }
            {!this.error && !!this.props.value && !this.props.settings['Resolve Address'] && !!this.props.value.default &&
            <Text style={{ color: this.getTextColour() }}>
              {this.props.value.default}
            </Text>
            }
            {!this.error && !!this.props.value && this.props.settings['Resolve Address'] && !!this.props.value.address &&
            <Text style={{ color: this.getTextColour() }}>
              {this.props.value.address}
            </Text>
            }
          </View>
          {!this.props.readOnly &&
          <IconButton name='refresh' onPress={() => this.refreshGeolocation()} />
          }
          {!!this.props.value && !!this.props.value.default &&
          <View style={{ marginLeft: 5 }}>
            <IconButton
              name='map'
              onPress={() => GlobalState.openUrl(`https://maps.apple.com/?q=${this.props.value.default}`)}
            />
          </View>
          }
        </View>
      </FieldBase>
    )
  }
}

export default GeolocationFieldView
