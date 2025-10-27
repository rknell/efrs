/**
 * Seems like a stupid test file but has given me quick validation
 * at times that there is a problem with the test enironment
 */

import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import renderer from 'react-test-renderer'

class myApp extends Component {
  render () {
    return (
      <View><Text>Hello world</Text></View>
    )
  }
}

AppRegistry.registerComponent('myApp', () => myApp)

it('renders at all', () => {
  const tree = renderer.create(<myApp />).toJSON()
  expect(tree).toMatchSnapshot()
})
