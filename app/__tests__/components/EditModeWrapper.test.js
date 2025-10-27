import React from 'react'
import EditModeWrapper from '../../app/components/EditModeWrapper'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Text } from 'react-native'
import IconFA from 'react-native-vector-icons/FontAwesome'

it('should render only children in edit mode', () => {
  const wrapper = shallow(<EditModeWrapper><Text>TEST</Text></EditModeWrapper>)
  expect(toJSON(wrapper)).toMatchSnapshot()
  expect(wrapper.find(IconFA).length).toBe(0)
})

it('should render in edit mode', () => {
  const wrapper = shallow(<EditModeWrapper editMode />)
  expect(toJSON(wrapper)).toMatchSnapshot()
  expect(wrapper.find(IconFA).length).toBe(2)
})
