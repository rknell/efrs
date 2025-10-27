import React from 'react'
import SwitchFieldView from '../../app/componentViews/SwitchFieldView'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

it('should render with no props', () => {
  const wrapper = shallow(<SwitchFieldView />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should render with settings', () => {
  const wrapper = shallow(<SwitchFieldView settings={{ Label: 'TEST' }} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should be able to hide', () => {
  const wrapper = shallow(<SwitchFieldView settings={{ Hidden: true }} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should render correctly in edit mode', () => {
  const wrapper = shallow(<SwitchFieldView editMode />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should take a non settings label', () => {
  const wrapper = shallow(<SwitchFieldView label='TEST LABEL' />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should take a globalstyle object and apply it', () => {
  const wrapper = shallow(<SwitchFieldView globalStyle={{ primaryColour: 'black' }} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
