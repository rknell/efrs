import call from './call'
import libForm from '../lib/form'
import { AsyncStorage } from 'react-native'
import GlobalState from '../services/GlobalState'

const createFormRequest = (form) => {
  return {
    _id: form.responseId,
    formId: form._id,
    responses: libForm.extractResponses(form),
    dateStarted: form.dateStarted,
    status: form.status,
    createdAt: form.createdAt,
    updatedAt: form.updatedAt
  }
}

class ResponseApi {
  save (form) {
    return this.deleteDraftById(form.responseId)
      .then(() => call(`/response`, 'POST', createFormRequest(form)))
  }

  saveDraft (form) {
    const formToSave = createFormRequest(form)
    const output = []

    return this.drafts()
      .then(drafts => {
        // TODO: replace with ES6 Filter statement
        drafts.forEach((item, index) => {
          if (item._id !== formToSave._id) {
            output.push(item)
          }
        })
        output.push(formToSave)
        return AsyncStorage.setItem(`efrs.drafts.${GlobalState.model.user._id}`, JSON.stringify(output))
      })
  }

  drafts () {
    // If the user isn't loaded yet, loop until it is.
    if (!GlobalState.model.user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.drafts().then(result => {
            resolve(result)
          })
        })
      })
    } else {
      return AsyncStorage.getItem(`efrs.drafts.${GlobalState.model.user._id}`)
        .then(result => {
          if (result) {
            return Promise.resolve(JSON.parse(result))
          }
          return Promise.resolve([])
        })
    }
  }

  async deleteDraftById (id) {
    const drafts = await this.drafts()
    const newDrafts = drafts.filter(draft => draft._id !== id)
    return AsyncStorage.setItem(`efrs.drafts.${GlobalState.model.user._id}`, JSON.stringify(newDrafts))
  }

  getList (formId) {
    return call(`/response/byForm/${formId}`)
  }

  quickSearch (query, formId) {
    return call(`/response/quickSearch/${query}/${formId}`)
  }

  email (emailAddress, responseId) {
    return call(`/response/email/${responseId}/${emailAddress}`)
  }

  emailCSV (emailAddress, responseId) {
    return call(`/response/emailCSV/${responseId}/${emailAddress}`)
  }

  advancedSearch (formId, responses, onlyMe, page = 1) {
    const body = {
      formId, responses
    }

    if (onlyMe) {
      body.createdBy = GlobalState.model.user._id
    }
    return call(`/response/advancedSearch/${page}`, 'POST', body, undefined, { hideBusy: true })
  }

  advancedSearchToCSV (formId, responses, email) {
    return call(`/response/advancedSearchToCSV`, 'POST', {
      formId,
      responses,
      email
    })
  }

  assignedToMe () {
    return call('/response/assignedToMe')
  }

  assignedToGroup () {
    return call('/response/assignedToGroup')
  }
}

export default new ResponseApi()
