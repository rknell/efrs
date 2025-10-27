import React from 'react'
import BusyIndicator from '../../app/components/BusyIndicator'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

it('should match snapshot', () => {
  const wrapper = shallow(<BusyIndicator />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should show a busy indicator', () => {
  const wrapper = shallow(<BusyIndicator isBusy />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
