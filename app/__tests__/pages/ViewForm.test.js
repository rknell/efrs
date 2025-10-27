import React from 'react'
// Note: test renderer must be required after react-native.
import ViewFormView, { ExportView, ViewFormController } from '../../app/pages/ViewForm'

import formFixtures from '../../../server/tests/fixtures/forms'
import responseFixtures from '../../../server/tests/fixtures/responses'
import basicForm from '../../../server/tests/fixtures/forms/basicForm'
import formLib from '../../app/lib/form'
import { shallow } from 'enzyme'
import { Alert, AsyncStorage, Linking, Platform } from 'react-native'
import GlobalState from '../../app/services/GlobalState'
import api from '../../app/api'
import stores from '../../app/stores'

import toJSON from 'enzyme-to-json'

AsyncStorage.setItem = (key, value) => {
  console.log('ASYNC-SET', key, value)
  return Promise.resolve()
}

AsyncStorage.getItem = (key) => {
  console.log('ASYNC-GET', key)
  if (key === `efrs.drafts.TEST`) {
    return Promise.resolve('[]')
  } else {
    return Promise.resolve('{test: true}')
  }
}

describe('ViewFormView', () => {
  // No snapshot because data is mutated when opened
  it('renders without error', () => {
    const copyForm = JSON.parse(JSON.stringify(formFixtures[0]))
    formLib.hydrateValues(copyForm, responseFixtures[0])
    shallow(<ViewFormView form={copyForm} />)
  })

  it('renders android without error', () => {
    const copyForm = JSON.parse(JSON.stringify(formFixtures[0]))
    formLib.hydrateValues(copyForm, responseFixtures[0])
    Platform.OS = 'android'
    shallow(<ViewFormView form={copyForm} />)
  })
})

describe('ExportView', () => {
  it('renders an exportView', () => {
    const copyForm = JSON.parse(JSON.stringify(formFixtures[0]))
    const controller = new ViewFormController({ form: copyForm })
    const wrapper = shallow(<ExportView controller={controller} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders an exportView with destination email', () => {
    const copyForm = JSON.parse(JSON.stringify(formFixtures[0]))
    const controller = new ViewFormController({ form: copyForm })
    controller.model.exportSettings.destination = 'email'
    const wrapper = shallow(<ExportView controller={controller} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('sets export destination', () => {
    const copyForm = JSON.parse(JSON.stringify(formFixtures[0]))
    const controller = new ViewFormController({ form: copyForm })
    const instance = shallow(<ExportView controller={controller} />).instance()
    instance.setExportDestination('TEST')
    expect(controller.model.exportSettings.destination).toBe('TEST')
  })

  it('sets export view', () => {
    const copyForm = JSON.parse(JSON.stringify(formFixtures[0]))
    const controller = new ViewFormController({ form: copyForm })
    const instance = shallow(<ExportView controller={controller} />).instance()
    instance.setExportView('TEST')
    expect(controller.model.exportSettings.view).toBe('TEST')
  })

  it('sets export view', () => {
    const copyForm = JSON.parse(JSON.stringify(formFixtures[0]))
    const controller = new ViewFormController({ form: copyForm })
    const instance = shallow(<ExportView controller={controller} />).instance()
    instance.setExportFormat('TEST')
    expect(controller.model.exportSettings.format).toBe('TEST')
  })
})

describe('FormController', () => {
// eslint-disable-next-line no-undef
  beforeEach(() => {
    if (!stores.forms) {
      stores.forms = {
        data: []
      }
    }
    stores.forms.data.length = 0
    formFixtures.forEach(form => {
      stores.forms.data.push(form)
    })
    stores.forms.data.push(basicForm)
  })

  it('should instantiate with a response', () => {
    const response = { ...responseFixtures[0] }
    const form = { ...formFixtures[0] }
    response.formId = form._id
    let gotSettings = false
    GlobalState.getSetting = (setting) => {
      gotSettings = true
      return Promise.resolve('TEST')
    }
    const controller = new ViewFormController({ form, response })
    expect(gotSettings).toBe(true)
    expect(controller).toBeDefined()
  })

  it('should handle onGoBack, no changes', () => {
    const response = { ...responseFixtures[0] }
    const form = { ...formFixtures[0] }
    const controller = new ViewFormController({ form, response })
    let didPop = false
    GlobalState.navigation.pop = () => {
      didPop = true
    }
    controller.onGoBack()
    expect(didPop).toBe(true)
  })

  it('should handle onGoBack, changes, dont save', () => {
    const response = { ...responseFixtures[0] }
    const form = { ...formFixtures[0] }
    const controller = new ViewFormController({ form, response })
    controller.formHasChanged = () => true
    let didPop = false
    GlobalState.navigation.pop = () => {
      didPop = true
    }

    Alert.alert = (title, message, options) => {
      expect(options[0].text).toBeDefined()
      options[0].onPress()
    }
    controller.onGoBack()
    expect(didPop).toBe(true)
  })

  it('should handle onGoBack, changes, save', () => {
    const response = { ...responseFixtures[0] }
    const form = { ...formFixtures[0] }
    const controller = new ViewFormController({ form, response })
    controller.formHasChanged = () => true

    // let didPop = false
    // GlobalState.navigation.pop = () => {
    //   didPop = true
    // }

    Alert.alert = (title, message, options) => {
      Alert.alert = jest.fn()
      console.log('Options log', options, title, message)
      expect(options[1].text).toBeDefined()
      options[1].onPress()
    }

    controller.onGoBack()
    // expect(didPop).toBe(true)
  })

  it('should save a draft', done => {
    const response = { ...responseFixtures[0] }
    const form = { ...formFixtures[0] }
    const controller = new ViewFormController({ form, response })

    let didPop = false
    GlobalState.navigation.pop = () => {
      didPop = true
    }
    GlobalState.model.user = { _id: 'TEST' }
    controller.draft()
      .then(() => {
        expect(didPop).toBe(true)
        done()
      })
      .catch(done)
  })

  it('should save when valid', async () => {
    const response = { ...responseFixtures[0], formId: basicForm._id }
    const form = { ...basicForm }
    let didOnPop = false

    const controller = new ViewFormController({
      form,
      response,
      onPop: () => {
        didOnPop = true
      }
    })

    let didPop = false
    GlobalState.navigation.pop = () => {
      didPop = true
    }

    controller.formController = { unassignAll: () => {} }
    await controller.save()
    expect(didPop).toBe(true)
    expect(didOnPop).toBe(true)
  })

  it('should save when valid, no onPop', () => {
    const response = { ...responseFixtures[0], formId: basicForm._id }
    const form = { ...basicForm }
    let didOnPop = false
    const controller = new ViewFormController({
      form, response
    })

    let didPop = false
    GlobalState.navigation.pop = () => {
      didPop = true
    }
    controller.formController = { unassignAll: () => {} }
    return controller.save()
      .then(() => {
        expect(didPop).toBe(true)
        expect(didOnPop).toBe(false)
      })
  })

  it('should save, dont go back', () => {
    const response = { ...responseFixtures[0], formId: basicForm._id }
    const form = { ...basicForm }
    let didOnPop = false
    const controller = new ViewFormController({
      form,
      response,
      onPop: () => {
        didOnPop = true
      }
    })

    let didPop = false
    GlobalState.navigation.pop = () => {
      didPop = true
    }

    controller.formController = { unassignAll: () => {} }
    controller.model.originalForm = { ...basicForm }
    controller.model.form = { ...basicForm, isTest: true }

    return controller.save(true)
      .then(() => {
        expect(didPop).toBe(false)
        expect(didOnPop).toBe(false)
        expect(controller.model.originalForm).toEqual(JSON.stringify({ ...basicForm, isTest: true, isIncomplete: false }))
      })
  })

  it('should toggle email input', () => {
    const response = { ...responseFixtures[0], formId: basicForm._id }
    const form = { ...basicForm }
    const controller = new ViewFormController({ form, response })

    controller.toggleEmailInput()
    controller.toggleEmailInput()
  })

  describe('email', () => {
    it('should email', () => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })
      controller.email()
    })

    it('should email, and toggle input', () => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })
      controller.email({ dontToggleEmail: false })
    })

    it('should email, and save changes', done => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })
      controller.formController = { unassignAll: () => {} }
      controller.formHasChanged = () => true
      Alert.alert = (title, message, options) => {
        Alert.alert = jest.fn()
        expect(title).toBeDefined()
        expect(message).toBeDefined()
        options[1].onPress()
          .then(() => done())
          .catch(done)
      }
      controller.email({ dontToggleEmail: false })
    })

    it('should email, dont toggle email', done => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })

      const oldEmail = api.responses.email
      api.responses.email = (email, responseId) => {
        api.responses.email = oldEmail
        return Promise.resolve()
      }

      controller.email({ dontToggleEmail: true })
        .then(() => {
          done()
        })
        .catch(done)
    })

    it('should email, no message', done => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })

      const oldEmail = api.responses.email
      api.responses.email = (email, responseId) => {
        api.responses.email = oldEmail
        return Promise.resolve({})
      }

      controller.email({ dontToggleEmail: true })
        .then(() => {
          done()
        })
        .catch(done)
    })

    it('should email, throw error', done => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })

      const oldEmail = api.responses.email
      api.responses.email = (email, responseId) => {
        api.responses.email = oldEmail
        return Promise.reject(new Error('TEST ERROR'))
      }

      controller.email({ dontToggleEmail: true })
        .then(() => {
          done()
        })
        .catch(done)
    })
  })

  describe('emailCSV', () => {
    it('should emailCSV, and toggle input', () => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })
      controller.emailCSV({ dontToggleEmail: false })
    })

    it('should emailCSV, and save changes', done => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })
      controller.formController = { unassignAll: () => {} }
      controller.formHasChanged = () => true
      Alert.alert = (title, message, options) => {
        Alert.alert = jest.fn()
        expect(title).toBeDefined()
        expect(message).toBeDefined()
        options[1].onPress()
          .then(() => done())
          .catch(done)
      }
      controller.emailCSV({ dontToggleEmail: false })
    })

    it('should emailCSV, dont toggle email', done => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })

      const oldEmail = api.responses.emailCSV
      api.responses.emailCSV = (email, responseId) => {
        api.responses.emailCSV = oldEmail
        return Promise.resolve()
      }

      controller.emailCSV({ dontToggleEmail: true })
        .then(() => {
          done()
        })
        .catch(done)
    })

    it('should emailCSV, no message', done => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })

      const oldEmail = api.responses.emailCSV
      api.responses.emailCSV = (email, responseId) => {
        api.responses.emailCSV = oldEmail
        return Promise.resolve({})
      }

      controller.emailCSV({ dontToggleEmail: true })
        .then(() => {
          done()
        })
        .catch(done)
    })

    it('should emailCSV, throw error', done => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })

      const oldEmail = api.responses.emailCSV
      api.responses.emailCSV = (email, responseId) => {
        api.responses.emailCSV = oldEmail
        return Promise.reject(new Error('TEST ERROR'))
      }

      controller.emailCSV({ dontToggleEmail: true })
        .then(() => {
          done()
        })
        .catch(done)
    })
  })

  describe('view', () => {
    it('should open link', () => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })
      const oldLink = Linking.openURL

      let didOpenUrl = false
      Linking.openURL = (url) => {
        Linking.openURL = oldLink
        didOpenUrl = true
      }

      controller.formController = { unassignAll: () => {} }
      controller.view()

      expect(didOpenUrl).toBe(true)
    })

    it('should open link, has changed', done => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })
      const oldLink = Linking.openURL

      controller.formHasChanged = () => true
      controller.formController = { unassignAll: () => {} }

      let didOpenUrl = false
      Linking.openURL = (url) => {
        Linking.openURL = oldLink
        didOpenUrl = true
      }

      Alert.alert = (title, message, options) => {
        Alert.alert = jest.fn()
        controller.formHasChanged = () => false
        options[1].onPress().then(() => {
          expect(didOpenUrl).toBe(true)
          done()
        }).catch(done)
      }

      controller.view()
    })
  })

  describe('viewCSV', () => {
    it('should open link', () => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })
      const oldLink = Linking.openURL

      let didOpenUrl = false
      Linking.openURL = (url) => {
        Linking.openURL = oldLink
        didOpenUrl = true
      }

      controller.formController = { unassignAll: () => {} }
      controller.viewCSV()

      expect(didOpenUrl).toBe(true)
    })

    it('should open link, has changed', done => {
      const response = { ...responseFixtures[0], formId: basicForm._id }
      const form = { ...basicForm }
      const controller = new ViewFormController({ form, response })
      const oldLink = Linking.openURL

      controller.formHasChanged = () => true
      controller.formController = { unassignAll: () => {} }

      let didOpenUrl = false
      Linking.openURL = (url) => {
        Linking.openURL = oldLink
        didOpenUrl = true
      }

      Alert.alert = (title, message, options) => {
        Alert.alert = jest.fn()
        controller.formHasChanged = () => false
        options[1].onPress().then(() => {
          expect(didOpenUrl).toBe(true)
          done()
        }).catch(done)
      }

      controller.viewCSV()
    })
  })
})
