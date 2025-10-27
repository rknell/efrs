import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import FormsListView from '../../app/pages/FormsList'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

it('renders at all', () => {
  const tree = renderer.create(<FormsListView />).toJSON()
  expect(tree).toMatchSnapshot()
})
