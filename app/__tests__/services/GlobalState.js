import GlobalState from '../../app/services/GlobalState'

it('should have the correct api path', () => {
  expect(GlobalState.apiPath).toBe('https://www.efrs.io/api')
})
