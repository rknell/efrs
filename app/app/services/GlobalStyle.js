import { observable } from 'mobx'
import api from '../api'
import { AsyncStorage } from 'react-native'
import tinycolor from 'tinycolor2'

class GlobalStyle {
  style = observable(this._defaultStyle())

  _defaultStyle () {
    return {
      primaryColour: 'dodgerblue',
      neutralColour: 'white',
      secondaryColour: '#f3f3f3',
      fullLogo: require('../assets/efrsFullBanner.png'),
      secondaryLogo: require('../assets/icon.png'),
      errorColour: 'red',
      secondaryColourHighlight: 'black',
      secondaryColourText: 'black',
      secondaryColourTextDisabled: 'black',
      secondaryColourIsDark: 'black',
      secondaryColourDisabled: 'black',
      disabledText: 'black',
      neutralColourHighlight: 'black',
      neutralColourOffset: 'black',
      neutralColourText: 'black',
      neutralColourTextDisabled: 'black',
      neutralColourDisabled: 'black',
      neutralColourIsDark: 'black',
      primaryColourHighlight: 'black',
      primaryColourText: 'black',
      primaryColourTextDisabled: 'black',
      primaryColourDisabled: 'black',
      primaryColourIsDark: 'black'
    }
  }

  constructor () {
    this.loadStyles()
      .then(() => this._recalcStyles())
    this._recalcStyles()
  }

  _lightDark (colour, amount = 15, isDark) {
    const col = tinycolor(colour)
    return (col.isDark() || isDark) ? col.lighten(amount).toRgbString() : col.darken(amount).toRgbString()
  }

  _recalcStyles () {
    this.style.secondaryColourHighlight = this._lightDark(this.style.secondaryColour, undefined, this.style.secondaryIsDark)
    this.style.secondaryColourText = this._lightDark(this.style.secondaryColour, 80, this.style.secondaryIsDark)
    this.style.secondaryColourTextDisabled = tinycolor(this._lightDark(this.style.secondaryColour, 80, this.style.secondaryIsDark)).setAlpha(0.3).toRgbString()
    this.style.secondaryColourIsDark = tinycolor(this.style.secondaryColour).isDark() || this.style.secondaryIsDark
    this.style.secondaryColourDisabled = tinycolor(this.style.secondaryColour).setAlpha(0.3).toRgbString()
    this.style.disabledText = this._lightDark(this.style.neutralColour, 30)
    this.style.neutralColourHighlight = this._lightDark(this.style.neutralColour)
    this.style.neutralColourOffset = this._lightDark(this.style.neutralColour, 5)
    this.style.neutralColourText = this._lightDark(this.style.neutralColour, 80)
    this.style.neutralColourTextDisabled = tinycolor(this._lightDark(this.style.neutralColour, 80)).setAlpha(0.3).toRgbString()
    this.style.neutralColourDisabled = tinycolor(this.style.neutralColour).setAlpha(0.3).toRgbString()
    this.style.neutralColourIsDark = tinycolor(this.style.neutralColour).isDark()
    this.style.primaryColourHighlight = this._lightDark(this.style.primaryColour)
    this.style.primaryColourText = this._lightDark(this.style.primaryColour, 80)
    this.style.primaryColourTextDisabled = tinycolor(this._lightDark(this.style.primaryColour, 80)).setAlpha(0.3).toRgbString()
    this.style.primaryColourDisabled = tinycolor(this.style.primaryColour).setAlpha(0.3).toRgbString()
    this.style.primaryColourIsDark = tinycolor(this.style.primaryColour).isDark()
  }

  loadStyles () {
    return AsyncStorage.getItem(`@EFRS.AppSettings:style`)
      .then(style => {
        if (style) {
          style = JSON.parse(style)
          this.style = observable({ ...this.style, ...style })
          this._recalcStyles()
        }
        return AsyncStorage.getItem(`@login:domain`)
      })
      .then(domain => this.loadRemoteStyle(domain))
      .catch(err => {
        console.error(err)
      })
  }

  loadRemoteStyle (domain) {
    const _this = this
    if (domain) {
      return api.company.getStyle(domain)
        .then(style => {
          if (style) {
            AsyncStorage.setItem(`@EFRS.AppSettings:style`, JSON.stringify(style))
            this.style = observable({ ...this.style, ...style })
            _this._recalcStyles()
            setTimeout(() => _this._recalcStyles(), 100)
          }
        })
    } else {
      return Promise.resolve()
    }
  }

  resetStyles () {
    this.style = observable(this._defaultStyle())
    AsyncStorage.setItem(`@EFRS.AppSettings:style`, JSON.stringify(this.style))
  }
}

export default new GlobalStyle()
