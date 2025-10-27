import React from 'react'
import IconButton from '../../app/components/IconButton'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

it('should render', () => {
  const wrapper = shallow(<IconButton />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should render a label', () => {
  const wrapper = shallow(<IconButton label='TEST LABEL' />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should show a ui change when disabled', () => {
  const wrapper = shallow(<IconButton isDisabled />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
