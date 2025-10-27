import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react/native'
import GlobalState from '../services/GlobalState'
import NavBar from '../components/NavBar'
import FormBuilder from './FormBuilder'
import GlobalStyle from '../services/GlobalStyle'
import stores from '../stores'
import FormList from '../components/FormList'
import Translate from '../services/Translate'

@observer
class FormManagement extends Component {
  constructor (props) {
    super(props)
    this.controller = new FormsListContoller(props)
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title='Form Management' pageActions={[{
          icon: 'plus',
          onPress: () => this.controller.newForm(),
          label: 'New Form'
        }]} />

        <FormList
          onEdit={this.controller.editForm}
          onClone={this.controller.cloneForm}
          onDelete={this.controller.deleteForm}
        />

      </View>
    )
  }
}

class FormsListContoller {
  @observable model = {
    formsList: [],
    mode: ''
  }

  @action editForm (item) {
    GlobalState.navigation.push({ view: <FormBuilder editForm={item} onPop={() => stores.forms.refresh} /> })
  }

  @action cloneForm (item) {
    GlobalState.navigation.push({ view: <FormBuilder editForm={item.clone()} onPop={() => stores.forms.refresh} /> })
  }

  @action deleteForm (item) {
    Alert.alert(Translate.do('Confirm'), Translate.do('Are you sure you want to delete? The form and all data collected will be unavailable.'), [
      { text: Translate.do('Cancel'), style: 'cancel' },
      { text: Translate.do('OK'), onPress: item.remove }
    ],
    { cancelable: true })
  }

  @action newForm () {
    GlobalState.navigation.push({ view: <FormBuilder onPop={() => stores.forms.refresh} /> })
  }
}

export default FormManagement
