import call from './call'

class FormsApi {
  addGroup (group) {
    return call('/company/group', 'POST', group)
  }

  deleteGroup (groupId) {
    return call(`/company/group/${groupId}`, 'DELETE')
  }

  getStyle (domain) {
    return call(`/company/styles/${domain}`, 'GET', undefined, true)
  }

  create (data) {
    return call(`/company/create`, 'POST', data)
  }
}

export default new FormsApi()
