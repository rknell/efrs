import React, { Component } from 'react'
import { FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react/native'
import stores from '../stores'
import GlobalStyle from '../services/GlobalStyle'
import { observable } from 'mobx'
import SearchBar from '../components/SearchBar'
import IconFA from 'react-native-vector-icons/FontAwesome'
import IconButton from './IconButton'

@observer
class FormList extends Component {
  @observable model = {
    filter: ''
  }

  getFilteredResults = () => {
    let output = stores.forms.data
    if (this.model.filter) {
      output = output.filter(item => new RegExp(`${this.model.filter}`, 'gi').test(item.name))
    }
    output.sort((a, b) => a.name < b.name ? 1 : -1)
    return output
  }

  searchTextChanged = value => {
    this.model.filter = value
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <SearchBar value={this.model.filter} onChange={this.searchTextChanged} />
        <FlatList
          data={this.getFilteredResults()}
          refreshControl={<RefreshControl
            refreshing={stores.forms.isRefreshing}
            onRefresh={stores.forms.refresh}
          />}
          renderItem={({ item }) => <FormListItem
            onEdit={this.props.onEdit}
            onClone={this.props.onClone}
            onDelete={this.props.onDelete}
            onSelect={this.props.onSelect}
            item={item}
          />}
        />
      </View>
    )
  }
}

@observer
class FormListItem extends Component {
  onEdit = () => {
    this.props.onEdit(this.props.item)
  }

  onSelect = () => {
    this.props.onSelect(this.props.item)
  }

  onClone = () => {
    this.props.onClone(this.props.item)
  }

  onDelete = () => {
    this.props.onDelete(this.props.item)
  }

  render () {
    return (
      <TouchableOpacity
        disabled={!this.props.onSelect}
        onPress={this.onSelect}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          borderBottomColor: GlobalStyle.style.neutralColourHighlight,
          borderBottomWidth: 1
        }}>
        <Text style={{ fontSize: 20, flex: 1, color: GlobalStyle.style.neutralColourText }}>{this.props.item.name}</Text>
        {!!this.props.onEdit && <IconButton name='edit' onPress={this.onEdit} />
        }
        {!!this.props.onClone &&
        <IconButton name='copy' onPress={this.onClone} style={{ marginLeft: 15 }} />
        }
        {!!this.props.onDelete &&
        <IconButton name='trash' onPress={this.onDelete} style={{ marginLeft: 15, marginRight: 5 }} />
        }
        {!!this.props.onSelect && <IconFA name='chevron-right' />}
      </TouchableOpacity>
    )
  }
}

export default FormList
export { FormListItem }
