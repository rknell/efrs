import api from '../../app/api'
// Note: test renderer must be required after react-native.
describe('api-index', () => {
  it('exposes the expected endpoints', () => {
    expect(api.company).toBeDefined()
    expect(api.forms).toBeDefined()
    expect(api.responses).toBeDefined()
    expect(api.user).toBeDefined()
  })
})
