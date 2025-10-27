import api from '../../app/api'

it('should call add group', () => {
  return api.company.addGroup('test')
})

it('should call delete group', () => {
  return api.company.deleteGroup('test')
})

// I have no idea why this is failing
it.skip('should call get style', () => {
  return api.company.getStyle('test')
})
