import React from 'react'
import Fields from '../../app/components/Fields'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { observable } from 'mobx'

it('should render', () => {
  const wrapper = shallow(<Fields fields={[]} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should remove a field', () => {
  const fields = observable([
    { name: 'test' },
    { name: 'test2' },
    { name: 'test3' }
  ])
  const wrapper = shallow(<Fields fields={fields} />)
  const instance = wrapper.instance()
  instance.deleteField(fields[1])()
  expect(fields.length).toBe(2)
  expect(fields[0].name).toBe('test')
  expect(fields[1].name).toBe('test3')
})
