import React from 'react'
import DateField from '../../app/components/DateField'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

it('should match the snapshot', () => {
  const wrapper = shallow(<DateField data={{
    settings: [],
    values: {
      default: ''
    }
  }} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
