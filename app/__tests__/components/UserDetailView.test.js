import React from 'react'
import renderer from 'react-test-renderer'
import UserDetailView from '../../app/components/UserDetailView'
import { shallow } from 'enzyme'
import fixtures from '../../__fixtures__'

it('renders correctly with a new user', () => {
  const tree = renderer.create(<UserDetailView user={fixtures.users.newUser} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with a setup user', () => {
  const tree = renderer.create(<UserDetailView user={fixtures.users.setupUser} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should not show the email field if it is the same as the username', () => {
  const wrapper = shallow(<UserDetailView user={fixtures.users.newUser} />)
  expect(wrapper.find({ label: 'Email', keyboardType: 'email-address' }).exists()).toBe(false)
})

it('should tap the switch and change the state', () => {
  const newUserCopy = { ...fixtures.users.newUser }
  const wrapper = shallow(<UserDetailView user={newUserCopy} />)
  const wrapperInstance = wrapper.instance()
  expect(wrapperInstance.state.usernameIsEmail).toBe(true)
  wrapperInstance.usernameIsEmailSwitch(false)
  expect(wrapperInstance.state.usernameIsEmail).toBe(false)
  wrapperInstance.onChangeUsername('test')
  expect(newUserCopy.username).toBe('test')
  expect(newUserCopy.email).toBe('test@test.com')
  wrapperInstance.usernameIsEmailSwitch(true)
  expect(newUserCopy.email).toBe('test')
})

it('shows an error when passwords do not match', () => {
  const user = { ...fixtures.users.newUser }
  user.password = 'adcasn'
  const wrapper = shallow(<UserDetailView user={user} isPersonal />)

  expect(wrapper.find({ eid: 'passworderror' }).exists()).toBe(true)
})

it('has no error when passwords match', () => {
  const user = { ...fixtures.users.newUser }
  user.password = 'match'
  const wrapper = shallow(<UserDetailView user={user} isPersonal />)
  const instance = wrapper.instance()
  instance.state.confirmPassword = 'match'
  wrapper.update()
  expect(wrapper.find({ eid: 'passworderror' }).exists()).toBe(false)
})

describe('user validation', () => {
  it('validates a new user needs a password', () => {
    const user = { ...fixtures.users.newUser }
    user.email = 'test@email.com'
    user.password = ''
    const wrapper = shallow(<UserDetailView user={user} isPersonal />)
    const instance = wrapper.instance()
    expect(instance._isValid()).toBe(false)
  })

  it('validates a new user has everything setup', () => {
    const user = { ...fixtures.users.newUser }
    user.email = 'test@email.com'
    user.password = 'abc123'
    const wrapper = shallow(<UserDetailView user={user} isPersonal />)
    const instance = wrapper.instance()
    expect(instance._isValid()).toBe(false)
  })

  it('spots an invalid email', () => {
    const user = { ...fixtures.users.newUser }
    user.email = 'test@emaiom'
    user.password = ''
    const wrapper = shallow(<UserDetailView user={user} isPersonal />)
    const instance = wrapper.instance()
    expect(instance._isValid()).toBe(false)
  })
})
