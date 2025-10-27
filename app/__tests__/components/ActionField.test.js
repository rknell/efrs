import React from 'react'
import { shallow } from 'enzyme/build/index'
import ActionField, { ActionFieldController } from '../../app/components/ActionField'
import GlobalState from '../../app/services/GlobalState'
import toJSON from 'enzyme-to-json'
import { MockFormController } from '../../__fixtures__/simpleMocks'

it('should render an action field', () => {
  const wrapper = shallow(<ActionField data={{}} formController={new MockFormController()} gs={GlobalState} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should instantiate an action field controller', () => {
  const afc = new ActionFieldController({ test: true })
  expect(afc.settings.length).toBeGreaterThan(0)
})

it('should perform an action (change status)', () => {
  const formController = new MockFormController()
  formController.setStatus = (status) => {
    expect(status).toBe('test')
  }
  const afc = new ActionFieldController({
    data: {
      settings: [{ label: 'Change Status To', value: 'test' }]
    },
    formController
  })
  afc.initialise()
  afc.doAction()
})

it('should perform an action (assign to user)', () => {
  const formController = new MockFormController()
  formController.assignToUser = (status) => {
    expect(status).toBe('test')
  }
  const afc = new ActionFieldController({
    data: {
      settings: [{ label: 'Assign To User', value: 'test' }]
    },
    formController
  })
  afc.initialise()
  afc.doAction()
})

it('should perform an action (assign to group)', () => {
  const formController = new MockFormController()
  formController.assignToGroup = (groupId) => {
    expect(groupId).toBe('test')
  }
  const afc = new ActionFieldController({
    data: {
      settings: [{ label: 'Assign To Group', value: 'test' }]
    },
    formController
  })
  afc.initialise()
  afc.doAction()
})

it('should perform an action (unassign all)', () => {
  const formController = new MockFormController()
  formController.unassignAll = (value) => {
    expect(value).toBe(undefined)
  }
  const afc = new ActionFieldController({
    data: {
      settings: [{ label: 'Unassign All', value: 'test' }]
    },
    formController
  })
  afc.initialise()
  afc.doAction()
})

it('should reset a field', () => {
  const afc = new ActionFieldController({
    data: {
      settings: [{ label: 'Unassign All', value: 'test' }]
    }
  })
  afc.initialise()
  expect(afc.settingsObject['Unassign All']).toBe('test')
  afc.resetField('Unassign All')
  expect(afc.settingsObject['Unassign All']).toBe(false)
})
