import 'react-native'
import React from 'react'
import Home, { HomeController } from '../../app/pages/Home'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
jest.mock('mobx-react/native', () => require('mobx-react/custom'))

it(`hasn't changed`, () => {
  const tree = renderer.create(<Home />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('has bindings for login, password and domain', () => {
  const homeController = new HomeController()
  homeController.model.password = 'test'
  homeController.model.username = 'test'
  homeController.model.domain = 'test'
  const tree = renderer.create(<Home controller={homeController} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should update text', () => {
  const homeController = new HomeController()
  homeController.updateText('test', true)
  expect(homeController.model.test).toBe(true)
})
