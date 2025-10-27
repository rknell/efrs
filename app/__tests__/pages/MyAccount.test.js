import React from 'react'
import MyAccount from '../../app/pages/MyAccount'
import { shallow } from 'enzyme'
import GlobalState from '../../app/services/GlobalState'
import fixtures from '../../__fixtures__'
import toJSON from 'enzyme-to-json'

it('renders correctly', () => {
  GlobalState.model.user = fixtures.users.newUser
  const wrapper = shallow(<MyAccount />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
