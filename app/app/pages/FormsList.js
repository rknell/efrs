import React, { Component } from 'react'
import { View } from 'react-native'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react/native'
import GlobalState from '../services/GlobalState'
import ViewForm from './ViewForm'
import NavBar from '../components/NavBar'
import GlobalStyle from '../services/GlobalStyle'
import FormList from '../components/FormList'

@observer class FormsListView extends Component {
  constructor (props) {
    super(props)
    this.controller = new FormsListContoller(props)
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title='Fill Form' />
        <FormList onSelect={this.controller.createForm} />

      </View>
    )
  }
}

class FormsListContoller {
  @observable model = {
    mode: ''
  }

  @action createForm (item) {
    let copiedForm = JSON.parse(JSON.stringify(item))
    GlobalState.navigation.push({ view: <ViewForm form={copiedForm} />, animation: 'FloatFromBottomAndroid' })
  }
}

export default FormsListView
