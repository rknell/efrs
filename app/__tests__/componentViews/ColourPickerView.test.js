import React from 'react'
import ColourPickerView, { ColourBrick, ColourPickerSelectView } from '../../app/componentViews/ColourPickerView'
import { shallow } from 'enzyme'
import GlobalState from '../../app/services/GlobalState'
import toJSON from 'enzyme-to-json'

it('should render the form control with no value selected', () => {
  const wrapper = shallow(<ColourPickerView settings={{ test: true }} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should render the form control with black selected', () => {
  const wrapper = shallow(<ColourPickerView value='black' />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should render the form control in edit mode', () => {
  const wrapper = shallow(<ColourPickerView settings={{ test: true }} editMode />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should navigate to the detail view when pressed', () => {
  let pushed = false
  GlobalState.navigation.push = () => { pushed = true }
  const wrapper = shallow(<ColourPickerView />)
  const instance = wrapper.instance()

  instance.onPress()
  expect(pushed).toBe(true)
})

it('should render the detail view', () => {
  const wrapper = shallow(<ColourPickerSelectView />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('calls onChange when a new colour is selected', () => {
  let calledOnChange = false
  let calledPop = false
  GlobalState.navigation.pop = () => { calledPop = true }
  const wrapper = shallow(<ColourPickerSelectView onChange={(value) => {
    expect(value).toBe('#000')
    calledOnChange = true
  }} />)
  const instance = wrapper.instance()
  instance.onPress({ value: '#000', name: 'black' })
  expect(calledOnChange).toBe(true)
  expect(calledPop).toBe(true)
})

it('renders a colour brick', () => {
  const wrapper = shallow(<ColourBrick colour={{ name: 'black', value: '#000' }} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('renders a light colour brick', () => {
  const wrapper = shallow(<ColourBrick colour={{ name: 'white', value: '#fff' }} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('handles a colour brick click', () => {
  let didPress = false

  const wrapper = shallow(<ColourBrick colour={{ name: 'white', value: '#fff' }} onPress={(colour) => {
    expect(colour.value).toBe('#fff')
    didPress = true
  }} />)
  const instance = wrapper.instance()

  instance.onPress()
  expect(didPress).toBe(true)
})
