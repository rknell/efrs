import 'react-native'
import React from 'react'
import FormBuilder from '../../app/pages/FormBuilder'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
jest.mock('mobx-react/native', () => require('mobx-react/custom'))

it('renders at all', () => {
  const tree = renderer.create(<FormBuilder />).toJSON()
  expect(tree).toMatchSnapshot()
})
