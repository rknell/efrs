import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import ViewResponses from '../../app/pages/ViewResponses'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

it('hasnt changed', () => {
  const tree = renderer.create(<ViewResponses />).toJSON()
  expect(tree).toMatchSnapshot()
})
