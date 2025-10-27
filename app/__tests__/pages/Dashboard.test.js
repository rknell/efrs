import 'react-native'
import React from 'react'
import Dashboard from '../../app/pages/Dashboard'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
jest.mock('mobx-react/native', () => require('mobx-react/custom'))

it('hasnt changed', () => {
  const tree = renderer.create(<Dashboard />).toJSON()
  expect(tree).toMatchSnapshot()
})
