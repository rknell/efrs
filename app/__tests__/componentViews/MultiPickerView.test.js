import React from 'react'
import { MultiPickerDetail, MultiPickerItem } from '../../app/componentViews/MultiPickerView'
import { render, shallow } from 'enzyme'
import GlobalStyle from '../../app/services/GlobalStyle'
import toJSON from 'enzyme-to-json'

it('should render a multi picker item', () => {
  const wrapper = shallow(
    <MultiPickerItem
      item={{ selected: false }}
      label='TEST' />
  )
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should render a multi picker item with no label', () => {
  const wrapper = shallow(
    <MultiPickerItem
      item={{ selected: false }}
      label='' />
  )
  expect(toJSON(wrapper)).toMatchSnapshot()
})

it('should render a multi picker item that is selected', () => {
  const wrapper = shallow(
    <MultiPickerItem
      item={{ selected: true }}
      label='TEST' />
  )
  expect(toJSON(wrapper)).toMatchSnapshot()
})

/**
 * OK. So this throws an error that gets fixed when you update react native test renderer.
 * I think it is being thrown by enzyme not supporting alpha versions.
 * Leave skipped until react native is back on non alpha react
 */
it.skip('should render a multi picker detail', () => {
  const wrapper = render(<MultiPickerDetail
    globalStyle={GlobalStyle}
    options={[
      { name: 'Test 1', guid: 1, selected: true },
      { name: 'Test 2', guid: 2 }
    ]}
    labelPath='name'
  />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
