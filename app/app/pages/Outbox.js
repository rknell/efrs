import React, { Component } from 'react'
import { SectionList, View } from 'react-native'
import { observer } from 'mobx-react/native'
import stores from '../stores'
import IconButton from '../components/IconButton'
import NavBar from '../components/NavBar'
import GlobalStyle from '../services/GlobalStyle'
import HeaderFieldView from '../componentViews/HeaderFieldView'
import ResponseItem from '../components/ResponseItem'
import { FormListItem } from '../components/FormList'
import FormBuilderView from './FormBuilder'
import GlobalState from '../services/GlobalState'
import ViewFormView from './ViewForm'

@observer
class Outbox extends Component {
  viewForm (item) {
    GlobalState.navigation.push({ view: <FormBuilderView form={item} /> })
  }

  viewResponse (item) {
    return () => {
      GlobalState.navigation.push({ view: <ViewFormView response={item} /> })
    }
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: GlobalStyle.style.neutralColour }}>
        <NavBar title='Outbox' />

        <SectionList
          renderSectionHeader={({ section }) => <HeaderFieldView settings={{ Label: section.title }} />}
          stickySectionHeadersEnabled
          sections={[
            {
              data: stores.forms.data.filter(item => item.isDirty),
              renderItem: ({ item }) => <FormListItem item={item} onSelect={this.viewForm} />,
              title: 'Forms'
            },
            {
              data: stores.responses.data.filter(item => item.isDirty),
              renderItem: ({ item }) => <ResponseItem item={item} onPress={this.viewResponse(item)} />,
              title: 'Responses'
            }
          ]}
        />

        <IconButton translate name='upload' label={`Sync Now`} onPress={stores.outboxSync} />
      </View>
    )
  }
}

export default Outbox
