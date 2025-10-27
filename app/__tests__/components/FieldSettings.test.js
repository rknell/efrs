import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import FieldSettings from '../../app/components/FieldSettings'
import { FormController } from '../../app/components/Form'
import GlobalState from '../../app/services/GlobalState'

const patrolLogIthaca = require('../../__fixtures__/forms.patrolLogIthaca.fixtures')

it('should render FieldSettings', () => {
  const formController = new FormController({ form: JSON.parse(JSON.stringify(patrolLogIthaca)) })
  const wrapper = shallow(<FieldSettings data={patrolLogIthaca.pages[0].groups[0].fields[0]}
    formController={formController} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should clear the field defaults', () => {
  const formController = new FormController({ form: JSON.parse(JSON.stringify(patrolLogIthaca)) })
  const field = { ...patrolLogIthaca.pages[0].groups[0].fields[0], values: { default: 'test' } }
  const wrapper = shallow(<FieldSettings data={field} formController={formController} />)
  const instance = wrapper.instance()
  expect(field.values.default).toBe('test')
  instance.onClearDefault()
  expect(field.values.default).toBe('')
})

it('should set the position of the item in the form on the same page', () => {
  const form = JSON.parse(JSON.stringify(patrolLogIthaca))
  const formController = new FormController({ form })
  const wrapper = shallow(<FieldSettings data={form.pages[0].groups[0].fields[0]} formController={formController} />)
  const instance = wrapper.instance()

  expect(formController.formFields[5].value).toBe('32')

  let didPop = false
  GlobalState.navigation.pop = () => {
    didPop = true
  }

  expect(form.pages[0].groups[0].fields[0].fieldId).toBe('3')
  expect(form.pages[0].groups[0].fields[1].fieldId).toBe('1')
  expect(form.pages[0].groups[0].fields[5].fieldId).toBe('31')
  expect(form.pages[0].groups[0].fields[6].fieldId).toBe('32')
  instance.onPositionSet(formController.formFields[5])
  expect(form.pages[0].groups[0].fields[0].fieldId).toBe('1')
  expect(form.pages[0].groups[0].fields[1].fieldId).not.toBe('1')
  expect(form.pages[0].groups[0].fields[4].fieldId).toBe('31')
  expect(form.pages[0].groups[0].fields[5].fieldId).toBe('32')
  expect(form.pages[0].groups[0].fields[6].fieldId).toBe('3')
  expect(didPop).toBe(true)
})

it('should set the position of a different item in the form on the same page', () => {
  const form = JSON.parse(JSON.stringify(patrolLogIthaca))
  const formController = new FormController({ form })
  const wrapper = shallow(<FieldSettings data={form.pages[0].groups[0].fields[5]} formController={formController} />)
  const instance = wrapper.instance()

  expect(formController.formFields[5].value).toBe('32')

  let didPop = false
  GlobalState.navigation.pop = () => {
    didPop = true
  }

  expect(form.pages[0].groups[0].fields[0].fieldId).toBe('3')
  expect(form.pages[0].groups[0].fields[1].fieldId).toBe('1')
  expect(form.pages[0].groups[0].fields[5].fieldId).toBe('31')
  expect(form.pages[0].groups[0].fields[6].fieldId).toBe('32')
  instance.onPositionSet({ value: form.pages[0].groups[0].fields[5].fieldId }, { fieldId: '1' })
  expect(didPop).toBe(true)
  expect(form.pages[0].groups[0].fields[0].fieldId).toBe('3')
  expect(form.pages[0].groups[0].fields[4].fieldId).toBe('31')
  expect(form.pages[0].groups[0].fields[5].fieldId).toBe('1')
  expect(form.pages[0].groups[0].fields[6].fieldId).toBe('32')
  expect(form.pages[0].groups[0].fields[1].fieldId).not.toBe('1')
})

it('should set the position of the item in the form on another page', () => {
  const formController = new FormController({ form: JSON.parse(JSON.stringify(patrolLogIthaca)) })
  const wrapper = shallow(<FieldSettings data={formController.props.form.pages[0].groups[0].fields[5]} formController={formController} />)
  const instance = wrapper.instance()

  expect(formController.props.form.pages[0].groups[0].fields[5].fieldId).toBe('31')
  expect(formController.formFields[54].value).toBe('84')

  let didPop = false
  GlobalState.navigation.pop = () => {
    didPop = true
  }

  expect(formController.props.form.pages[0].groups[0].fields[5].fieldId).toBe('31')
  expect(formController.props.form.pages[0].groups[0].fields[6].fieldId).toBe('32')
  expect(formController.props.form.pages[3].groups[0].fields[0].fieldId).toBe('84')
  instance.onPositionSet(formController.formFields[54])
  expect(formController.props.form.pages[0].groups[0].fields[5].fieldId).toBe('32')
  expect(formController.props.form.pages[3].groups[0].fields[0].fieldId).toBe('84')
  expect(formController.props.form.pages[3].groups[0].fields[1].fieldId).toBe('31')
  expect(didPop).toBe(true)
})
