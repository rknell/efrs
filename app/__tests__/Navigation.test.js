import React from 'react'
import Navigation from '../app/Navigation'
import GlobalState from '../app/services/GlobalState'
// Note: test renderer must be required after react-native.
import { NativeModules } from 'react-native'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

it('renders at all', () => {
  const tree = renderer.create(<Navigation />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('shows a logout button when logged in', () => {
  GlobalState.model.userToken = 'ABC123'
  const wrapper = shallow(<Navigation />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('shows and hides the drawer', done => {
  NativeModules.Vibration = { vibrate: jest.fn() }
  const wrapper = shallow(<Navigation />)
  expect(toJSON(wrapper)).toMatchSnapshot()
  const instance = wrapper.instance()
  expect(instance.model.drawerVisible).toBe(false)
  instance.showDrawer()
  expect(toJSON(wrapper)).toMatchSnapshot()
  expect(instance.model.drawerVisible).toBe(true)
  instance.hideDrawer()
    .then(() => {
      expect(instance.model.drawerVisible).toBe(false)
      done()
    })
})

it('handles back and exits', () => {
  const wrapper = shallow(<Navigation />)
  const instance = wrapper.instance()
  expect(instance.handleBackAndroid()).toBe(true)
})

it('handles back and hides the drawer', () => {
  const wrapper = shallow(<Navigation />)
  const instance = wrapper.instance()
  instance.model.drawerVisible = true
  expect(instance.handleBackAndroid()).toBe(true)
})

it('handles back and hides the drawer', () => {
  const wrapper = shallow(<Navigation />)
  const instance = wrapper.instance()
  let didPop = false
  GlobalState.navigation.pop = () => {
    didPop = true
  }
  GlobalState.model.canPop = true
  expect(instance.handleBackAndroid()).toBe(true)
  expect(didPop).toBe(true)
})
