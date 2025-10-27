import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import SearchBarIOS from 'react-native-search-bar'
import Translate from '../services/Translate'

@observer
class SearchBar extends Component {
  render () {
    return (
      <SearchBarIOS
        placeholder={Translate.do('Search')}
        onChangeText={this.props.onChange} value={this.props.value} />
    )
  }
}

export default SearchBar
