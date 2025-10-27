import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import CardStyle from '../../app/components/CardStyle'
import { Text } from 'react-native'

it('should render CardStyle', () => {
  const wrapper = shallow(<CardStyle><Text>Test</Text></CardStyle>)
  expect(toJSON(wrapper)).toMatchSnapshot()
  expect(wrapper.find(Text).length).toBe(1)
})

it('should render CardStyle with title', () => {
  const wrapper = shallow(<CardStyle title='Test title'><Text>Test</Text></CardStyle>)
  expect(toJSON(wrapper)).toMatchSnapshot()
  expect(wrapper.find(Text).length).toBe(3)
})
