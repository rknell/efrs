import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import GroupManagement from '../../app/pages/GroupManagement'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))
// fetch = jest.fn(() => new Promise(resolve => resolve()));

it('renders at all', () => {
  const tree = renderer.create(<GroupManagement />).toJSON()
  expect(tree).toMatchSnapshot()
})
