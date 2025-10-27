import React from 'react'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import UserManagement, { SectionHeader, UserDetailPage, UserItem } from '../../app/pages/UserManagement'
import { shallow } from 'enzyme'
import fixtures from '../../__fixtures__'
import stores from '../../app/stores'
import { Alert } from 'react-native'
import GlobalState from '../../app/services/GlobalState'

import toJSON from 'enzyme-to-json'

jest.mock('mobx-react/native', () => require('mobx-react/custom'))

it('hasnt changed', () => {
  const tree = renderer.create(<UserManagement />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders a UserDetailPage (new user)', () => {
  const wrapper = shallow(<UserDetailPage user={fixtures.users.newUser} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('renders a UserDetailPage (setup user)', () => {
  const wrapper = shallow(<UserDetailPage user={fixtures.users.setupUser} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('renders a UserItem (new user)', () => {
  const wrapper = shallow(<UserItem user={fixtures.users.newUser} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('renders a UserItem (setup user)', () => {
  const wrapper = shallow(<UserItem user={fixtures.users.setupUser} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('renders a user without a name', () => {
  const wrapper = shallow(<UserItem user={{ ...fixtures.users.setupUser, firstName: '', lastName: '' }} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('renders a section header', () => {
  const wrapper = shallow(<SectionHeader section={{ title: 'Test' }} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('renders a section header with no title', () => {
  const wrapper = shallow(<SectionHeader section={{}} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should get the users relationships', () => {
  const oldUserStore = stores.users.data

  stores.users.data = [
    {
      _id: 1,
      username: 'Test',
      relationships: [
        { name: 'supervisor', user: 2 }
      ]
    }, {
      _id: 2,
      lastName: 'User 2',
      username: 'User 2',
      relationships: []
    }
  ]

  const wrapper = shallow(<UserItem user={stores.users.data[0]} />)
  const instance = wrapper.instance()
  const output = instance.getRelationshipUser(2)
  expect(output).toBe('User 2')

  stores.users.data = oldUserStore
})

it('renders the last item', () => {
  const user = {
    _id: 2,
    lastName: 'User 2',
    username: 'User 2',
    relationships: []
  }
  const wrapper = shallow(<UserItem user={user} isLast />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('handles save correctly, invalid user', () => {
  const user = {
    _id: 2,
    lastName: 'User 2',
    username: 'User 2',
    relationships: []
  }
  const wrapper = shallow(<UserDetailPage user={user} />)
  const instance = wrapper.instance()
  const oldAlert = Alert.alert

  let alertShown = false
  Alert.alert = (title, message) => {
    expect(title).toBeDefined()
    expect(message).toBeDefined()
    alertShown = true
  }

  instance.onSaveButton()

  expect(alertShown).toBe(true)
  Alert.alert = oldAlert
})

it('handles save correctly, valid user', () => {
  const user = {
    _id: 2,
    lastName: 'User 2',
    username: 'User 2',
    relationships: []
  }
  let onSaveCalled = false
  const wrapper = shallow(<UserDetailPage user={user} onSave={() => { onSaveCalled = true }} />)
  const instance = wrapper.instance()

  let popCalled = false
  GlobalState.navigation.pop = () => {
    popCalled = true
  }

  instance.state.isUserValid = true
  instance.onSaveButton()

  expect(popCalled).toBe(true)
  expect(onSaveCalled).toBe(true)
})

it('handles delete correctly', () => {
  const user = {
    _id: 2,
    lastName: 'User 2',
    username: 'User 2',
    relationships: []
  }
  let onDeleteCalled = false
  const wrapper = shallow(<UserDetailPage user={user} canDelete onDelete={() => { onDeleteCalled = true }} />)
  const instance = wrapper.instance()

  let popCalled = false
  GlobalState.navigation.pop = () => {
    popCalled = true
  }

  instance.state.isUserValid = true
  instance.onDelete()

  expect(popCalled).toBe(true)
  expect(onDeleteCalled).toBe(true)
})

it('handles back, no changes', () => {
  const user = {
    _id: 2,
    lastName: 'User 2',
    username: 'User 2',
    relationships: []
  }
  const wrapper = shallow(<UserDetailPage user={user} />)
  const instance = wrapper.instance()

  let popCalled = false
  GlobalState.navigation.pop = () => {
    popCalled = true
  }

  instance.handleBack()

  expect(popCalled).toBe(true)
})

it('handles back, user changes', () => {
  const user = {
    _id: 2,
    lastName: 'User 2',
    username: 'User 2',
    relationships: []
  }
  const wrapper = shallow(<UserDetailPage user={user} />)
  const instance = wrapper.instance()
  user.lastName = 'User 4'
  wrapper.update()

  let popCalled = false
  GlobalState.navigation.pop = () => {
    popCalled = true
  }

  let alertShown = false
  Alert.alert = (title, message) => {
    expect(title).toBeDefined()
    expect(message).toBeDefined()
    alertShown = true
  }

  instance.handleBack()

  expect(popCalled).toBe(false)
  expect(alertShown).toBe(true)
})

it('handles onSaveBack', () => {
  const user = {
    _id: 2,
    lastName: 'User 2',
    username: 'User 2',
    relationships: []
  }
  let onSaveCalled = false
  const wrapper = shallow(<UserDetailPage user={user} onSave={() => { onSaveCalled = true }} />)
  const instance = wrapper.instance()

  let popCalled = false
  GlobalState.navigation.pop = () => {
    popCalled = true
  }

  instance.onSaveBack()

  expect(popCalled).toBe(true)
  expect(onSaveCalled).toBe(true)
})

it('handles onNoSave', () => {
  const user = {
    _id: 2,
    lastName: 'User 2',
    username: 'User 2',
    relationships: []
  }
  const wrapper = shallow(<UserDetailPage user={user} />)
  const instance = wrapper.instance()
  user.lastName = 'User 4'
  wrapper.update()

  let popCalled = false
  GlobalState.navigation.pop = () => {
    popCalled = true
  }

  instance.onNoSave()
  expect(popCalled).toBe(true)
  expect(user.lastName).toBe('User 2')
})

it('handles onValidationChanged', () => {
  const user = {
    _id: 2,
    lastName: 'User 2',
    username: 'User 2',
    relationships: []
  }
  const wrapper = shallow(<UserDetailPage user={user} />)
  const instance = wrapper.instance()
  expect(instance.state.isUserValid).toBe(false)
  instance.onValidationChanged(true)
  expect(instance.state.isUserValid).toBe(true)
})

it('filters correctly', () => {
  const wrapper = shallow(<UserManagement />)
  const instance = wrapper.instance()

  instance.state.searchText = 'TEST'
  expect(instance._meetsFilter('TEST')).toBe(true)
  expect(instance._meetsFilter('TESTS')).toBe(true)
  expect(instance._meetsFilter('STESTS')).toBe(true)
  expect(instance._meetsFilter('STE STS')).toBe(false)
  expect(instance._meetsFilter('TES')).toBe(false)
  expect(instance._meetsFilter('')).toBe(false)

  instance.state.searchText = ''
  expect(instance._meetsFilter('TEST')).toBe(true)
  expect(instance._meetsFilter('TESTS')).toBe(true)
  expect(instance._meetsFilter('STESTS')).toBe(true)
  expect(instance._meetsFilter('STE STS')).toBe(true)
  expect(instance._meetsFilter('TES')).toBe(true)
  expect(instance._meetsFilter('')).toBe(true)

  instance.state.searchText = 0
  expect(instance._meetsFilter('TEST')).toBe(true)
  expect(instance._meetsFilter('TESTS')).toBe(true)
  expect(instance._meetsFilter('STESTS')).toBe(true)
  expect(instance._meetsFilter('STE STS')).toBe(true)
  expect(instance._meetsFilter('TES')).toBe(true)
  expect(instance._meetsFilter('')).toBe(true)

  instance.state.searchText = '1'
  expect(instance._meetsFilter('TEST')).toBe(false)
  expect(instance._meetsFilter('TESTS')).toBe(false)
  expect(instance._meetsFilter('STESTS')).toBe(false)
  expect(instance._meetsFilter('STE STS')).toBe(false)
  expect(instance._meetsFilter('TES')).toBe(false)
  expect(instance._meetsFilter('')).toBe(false)
})

it('Creates sections correctly', () => {
  const wrapper = shallow(<UserManagement />)
  const instance = wrapper.instance()

  stores.users.data = [
    { lastName: 'Brian' },
    { lastName: 'WholeLotta' },
    { lastName: 'WholeLotta2' }
  ]

  expect(instance.sections.length).toBe(2)
})

it('Sorts sections correctly', () => {
  const wrapper = shallow(<UserManagement />)
  const instance = wrapper.instance()

  stores.users.data = [
    { lastName: 'WholeLotta' },
    { lastName: 'Brian' },
    { lastName: 'WholeLotta2' }
  ]

  expect(instance.sections.length).toBe(2)
  expect(instance.sections[0].title).toBe('B')
  expect(instance.sections[1].title).toBe('W')
})

it('Sorts users by their last name', () => {
  const wrapper = shallow(<UserManagement />)
  const instance = wrapper.instance()

  stores.users.data = [
    { lastName: 'WholeLotta' },
    { lastName: 'Whino' },
    { lastName: 'WholeLotta2' },
    { lastName: 'Wendel' }
  ]

  expect(instance.sections.length).toBe(1)
  expect(instance.sections[0].data[0]).toEqual({ lastName: 'Wendel' })
  expect(instance.sections[0].data[1]).toEqual({ lastName: 'Whino' })
})

it('handles a search bar change', () => {
  const wrapper = shallow(<UserManagement />)
  const instance = wrapper.instance()
  instance.searchBarChange('NEWVALUE')
  expect(instance.state.searchText).toBe('NEWVALUE')
})
