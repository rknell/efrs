import React from 'react'
import { shallow } from 'enzyme/build/index'
import GlobalState from '../../app/services/GlobalState'
import SideMenu, { MenuBarItem } from '../../app/components/SideMenu'
import { NativeModules } from 'react-native'

it('handles log out', () => {
  const wrapper = shallow(<SideMenu />)
  const instance = wrapper.instance()
  let didReset = false
  GlobalState.navigation.resetTo = () => {
    didReset = true
  }
  GlobalState.hideDrawer = () => {}
  instance.logOut()
  expect(didReset).toBe(true)
})

describe('menu bar item', () => {
  it('handles item on press', () => {
    NativeModules.Vibration = { vibrate: jest.fn() }
    let didReset = false
    GlobalState.navigation.resetTo = () => {
      didReset = true
    }
    const wrapper = shallow(<MenuBarItem />)
    const instance = wrapper.instance()
    instance.itemOnPress()
    expect(didReset).toBe(true)
  })
})
