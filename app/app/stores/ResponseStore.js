import OfflineDataStore, { OfflineDataItem } from './OfflineDataStore'
import { observable } from 'mobx'
import libForm from '../lib/form'
import { Alert, AsyncStorage, PermissionsAndroid, Platform } from 'react-native'
import Translate from '../services/Translate'
import Upload from 'react-native-background-upload'
import GlobalState from '../services/GlobalState'

let stores

export default class ResponseStore extends OfflineDataStore {
  constructor (networkRequestHandler, _stores) {
    super('response', ResponseStoreItem, networkRequestHandler)
    stores = _stores
  }

  refresh () {
    this.syncAllDirty()
  }

  createFromForm = (form, dontAdd) => {
    const data = {
      _id: form.responseId,
      formId: form._id,
      responses: libForm.extractResponses(form),
      files: libForm.extractFiles(form),
      dateStarted: form.dateStarted,
      status: form.status,
      createdAt: form.createdAt,
      createdBy: form.createdBy,
      formVersion: form.version,
      isIncomplete: form.isIncomplete
    }
    const output = this.create(data)
    if (!dontAdd) {
      const dataItem = this.data.find(dataItem => output.guid === dataItem.guid)
      if (!dataItem) {
        this.data.push(output)
      } else {
        this.data[this.data.indexOf(dataItem)] = output
      }
    }
    return output
  }
}

export class ResponseStoreItem extends OfflineDataItem {
  _uploadImage = async (url, responseId) => {
    console.log('uplading image', url)
    let grantedRead, grantedWrite
    if (Platform.OS === 'android') {
      grantedRead = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          'title': 'Mandatory Permission',
          'message': 'eFRS needs access to upload photos'
        }
      )

      grantedWrite = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          'title': 'Mandatory Permission',
          'message': 'eFRS needs access to upload photos'
        }
      )
    }

    if (Platform.OS === 'android' && (!grantedRead || !grantedWrite)) {
      Alert.alert(Translate.do('Error'), Translate.do('You need to give photo permissions to use the app'))
      await this._uploadImage(url, responseId)
    } else {
      console.warn('uploading', url)
      const uneditedUrl = url
      let contentType

      if (url.indexOf('ph://') > -1) {
        console.warn('converting')
        const appleId = url.substring(5, 41)
        const ext = 'JPG'
        url = `assets-library://asset/asset.${ext}?id=${appleId}&ext=${ext}`
        contentType = 'image/jpeg'
      }

      if (Platform.OS === 'android') {
        url = url.replace('file://', '')
      }

      const userToken = await AsyncStorage.getItem('@PASettings:authToken')

      const options = {
        url: `${GlobalState.apiPath}/files/v2/upload`,
        path: url,
        method: 'POST',
        type: 'multipart',
        field: 'photo',
        headers: {
          'Authorization': `bearer ${userToken}`,
          'content-type': contentType,
          'local-url': uneditedUrl,
          'form-id': responseId
        },
        notification: {
          enabled: true
        }
      }

      Upload.startUpload(options)
        .then((uploadId) => {
          console.warn('Upload started', uploadId)
          Upload.addListener('progress', uploadId, (data) => {
            console.warn(`Progress: ${data.progress}%`)
          })
          Upload.addListener('error', uploadId, (data) => {
            console.log(`Error: ${data.error}%`)
          })
          Upload.addListener('cancelled', uploadId, (data) => {
            console.log(`Cancelled!`)
          })
          Upload.addListener('completed', uploadId, (data) => {
            // data includes responseCode: number and responseBody: Object
            console.log('Completed!')
          })
          console.log('set listeners')
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  save = async () => {
    const saveResult = await this.store()._save(this)

    stores.assignedToGroup.refresh()
    stores.assignedToUser.refresh()

    try {
      for (let image of this.files) {
        if (image.substr(0, 5) !== 'https') {
          await this._uploadImage(image, this._id)
        }
      }
    } catch (e) {
      console.error('Error saving', e)
    }

    return saveResult
  }

  @observable formId = null
  @observable responses = {}
  @observable files = []
  @observable dateStarted
  @observable status = {}
  @observable createdAt = null
  @observable updatedAt = null
  @observable createdBy = null
  @observable formVersion = null
}
