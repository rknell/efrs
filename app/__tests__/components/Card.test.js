import React from 'react'
import Card from '../../app/components/Card'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

it('matches snapshot', () => {
  const wrapper = shallow(
    <Card />
  )
  expect(toJSON(wrapper)).toMatchSnapshot()
  wrapper.setProps({ count: 1 })
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('handles adding', () => {
  const wrapper = shallow(<Card values={[
    { test: true }
  ]} fields={{ test: true }} />)

  const instance = wrapper.instance()
  instance.add()
})
