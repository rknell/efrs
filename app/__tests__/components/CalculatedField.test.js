import React from 'react'
import CalculatedField from '../../app/components/CalculatedField'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockFormController } from '../../__fixtures__/simpleMocks'

it('should match snapshot', () => {
  const wrapper = shallow(<CalculatedField formController={new MockFormController()} data={{
    values: {
      default: ''
    }
  }} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should match snapshot with some data', () => {
  const wrapper = shallow(<CalculatedField formController={new MockFormController()} data={{
    values: {
      default: 'test'
    }
  }} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should match snapshot with some data', () => {
  const wrapper = shallow(<CalculatedField formController={new MockFormController()} data={{
    values: {
      default: 'undefined'
    }
  }} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should render edit mode', () => {
  const wrapper = shallow(<CalculatedField formController={new MockFormController()} editMode data={{
    values: {
      default: 'test'
    }
  }} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should handle onPress edit', () => {
  const wrapper = shallow(<CalculatedField formController={new MockFormController()} data={{
    values: {
      default: ''
    },
    settings: []
  }} />)
  const instance = wrapper.instance()

  instance.onPressEdit()
})
