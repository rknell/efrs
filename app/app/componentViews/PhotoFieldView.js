import React, { Component } from 'react'
import {
  CameraRoll,
  FlatList,
  Image,
  ImageEditor,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  View
} from 'react-native'
import { observer } from 'mobx-react/native'
import FieldBase from './FieldBase'
import IconButton from '../components/IconButton'
import { RNCamera } from 'react-native-camera'
import { observable } from 'mobx'
import Modal from 'react-native-modal'
import Translate from '../services/Translate'
import GlobalState from '../services/GlobalState'
import Video from 'react-native-video'
import IconFA from 'react-native-vector-icons/FontAwesome'
import mime from 'react-native-mime-types'
import CameraRollPicker from 'react-native-camera-roll-picker'

@observer
class PhotoFieldView extends Component {
  @observable model = {
    expanded: false,
    selectedImage: '',
    selectFromCameraRoll: false
  }

  constructor (props) {
    super(props)
    this.state = {
      height: undefined
    }
  }

  isEditable () {
    if (this.props.readOnly) {
      return false
    } else if (this.props.settings && this.props.settings['Read Only']) {
      return false
    } else {
      return true
    }
  }

  deleteImage = () => {
    const output = [...this.props.value]
    output.splice(output.indexOf(this.model.selectedImage), 1)
    this.props.onChange(output)
    this.model.selectedImage = ''
  }

  takePhoto = () => {
    GlobalState.navigation.push({
      view: <FullScreenCamera onChange={val => {
        this.props.onChange([...this.props.value, val])
      }} />
    })
  }

  getCameraRoll = async () => {
    let granted = Platform.OS === 'ios' // True is iOS, False if Android
    if (Platform.OS === 'android') {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          'title': 'Need access to photos',
          'message': 'eFRS needs access to your photos to allow you to attach one to a form'
        }
      )
    }
    if (granted) this.model.selectFromCameraRoll = true
  }

  cameraRollCallback = async (data) => {
    console.log('Camera Roll Callback', JSON.stringify(data))

    try {
      if (data && data[0] && data[0].uri) {
        let gotUri = data[0].uri
        let newUri
        if (Platform.OS === 'ios') {
          const croppedUri = await this._imageEditorResizePromise(gotUri, data[0].width, data[0].height, 1024)
          newUri = await CameraRoll.saveToCameraRoll(croppedUri)
        } else {
          newUri = data[0].uri
        }

        let onChangeResult = [newUri]
        if (isIterable(this.props.value) && !this.props.value.find(item => item === newUri)) {
          onChangeResult = [...this.props.value, newUri]
        }
        this.props.onChange(onChangeResult)
      }
      this.model.selectFromCameraRoll = false
    } catch (e) {
      console.error(e)
    }
  }

  _imageEditorResizePromise = (uri, currentWidth, currentHeight, newWidth) => {
    return new Promise((resolve, reject) => {
      ImageEditor.cropImage(uri, {
        offset: { x: 0, y: 0 },
        size: { width: currentWidth, height: currentHeight },
        displaySize: { width: newWidth, height: (currentHeight / currentWidth) * newWidth }
      }, resolve, reject)
    })
  }

  cameraKitRollCallback = (event) => {
    console.log('camera roll result', event.nativeEvent.selected)

    const newUri = event.nativeEvent.selected

    let onChangeResult = [newUri]
    if (isIterable(this.props.value)) {
      const existingIndex = this.props.value.findIndex(item => item === newUri)
      console.log('existing index', existingIndex)
      if (existingIndex > -1) {
        onChangeResult = [...this.props.value]
        onChangeResult.splice(existingIndex, 1)
      } else {
        onChangeResult = [...this.props.value, newUri]
      }
    }
    this.props.onChange(onChangeResult)
  }

  isImage = (url) => {
    try {
      if (url.indexOf('/images/') > -1) return true // Android photo gallery image
      // if (url.indexOf('ext=JPG') > -1) return true // iOS Camera image
      // if (url.indexOf('ext=HEIC') > -1) return true // iOS PhotoRoll image
      if (url.indexOf('ph://') > -1) return true // iOS PhotoRoll image
      return mime.lookup(url).split('/')[0] === 'image'
    } catch (e) {
      return false
    }
  }

  isVideo = (url) => {
    try {
      return mime.lookup(url).split('/')[0] === 'video'
    } catch (e) {
      return false
    }
  }

  render () {
    const settings = this.props.settings || {}
    return (
      <View style={{
        borderBottomWidth: 1,
        borderBottomColor: this.props.globalStyle ? this.props.globalStyle.neutralColourHighlight : 'rgba(0,0,0,0.1)'
      }}>
        <FieldBase
          translate={this.props.translate}
          globalStyle={this.props.globalStyle}
          hidden={this.props.editMode ? false : settings['Hidden']}
          label={this.props.label || settings['Label'] || Translate.do('Untitled')}
          height={this.state.height + 35}
          vertical={this.model.expanded}
        >
          {!this.props.readOnly && <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }} />
            <IconButton name='camera' translate onPress={this.takePhoto} />
            <View style={{ width: 10 }} />
            <IconButton name='picture-o' translate onPress={this.getCameraRoll} />
          </View>}
        </FieldBase>
        <FlatList
          horizontal
          data={this.props.value}
          renderItem={({ item, separators }) => (
            <TouchableOpacity key={item} style={{ padding: 10, paddingLeft: 0 }}
              onPress={() => { this.model.selectedImage = item }}>
              {this.isImage(item) && <Image source={{ uri: item }} style={{ width: 150, height: 150 }} />}
              {this.isVideo(item) && <View style={PhotoBoxStyle}>
                <IconFA name='play' size={20} />
              </View>}

              {this.isImage(item) && this.isVideo(item) &&
              <View style={PhotoBoxStyle}>
                <IconFA name='question' size={20} />
              </View>
              }
            </TouchableOpacity>
          )}
        />
        <Modal isVisible={!!this.model.selectedImage} style={{ margin: 0 }}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              {!!this.isImage(this.model.selectedImage) &&
              <Image source={{ uri: this.model.selectedImage }} style={{ flex: 1 }} />}
              {!!this.isVideo(this.model.selectedImage) &&
              <Video source={{ uri: this.model.selectedImage }} style={{ flex: 1 }} resizeMode='cover' repeat />}
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: this.props.globalStyle.primaryColour,
              padding: 10
            }}>
              {!this.props.readOnly && <IconButton label='Delete' name='trash' translate onPress={this.deleteImage} />}
              <IconButton label='Close' name='times' translate onPress={() => { this.model.selectedImage = '' }} />
            </View>
          </View>
        </Modal>
        {this.model.selectFromCameraRoll
          ? <Modal isVisible={!!this.model.selectFromCameraRoll} style={{ margin: 0 }}>
            <CameraRollPicker callback={this.cameraRollCallback} selectSingleItem groupTypes='All' />
            <View style={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              backgroundColor: this.props.globalStyle.primaryColour,
              padding: 10
            }}>
              <IconButton label='Close' name='times' translate
                onPress={() => { this.model.selectFromCameraRoll = false }} />
            </View>
          </Modal>
          : <View />
        }

      </View>
    )
  }
}

@observer
class FullScreenCamera extends Component {
  @observable model = {
    isTakingPhoto: false,
    isRecording: false
  }

  _imageEditorResizePromise = (uri, currentWidth, currentHeight, newWidth) => {
    return new Promise((resolve, reject) => {
      ImageEditor.cropImage(uri, {
        offset: { x: 0, y: 0 },
        size: { width: currentWidth, height: currentHeight },
        displaySize: { width: newWidth, height: (currentHeight / currentWidth) * newWidth }
      }, resolve, reject)
    })
  }

  takePicture = async () => {
    if (this.camera) {
      this.model.isTakingPhoto = true
      const options = { quality: 0.5, width: 600, exif: true, fixOrientation: true, skipProcessing: true }
      try {
        const data = await this.camera.takePictureAsync(options)
        this.model.isTakingPhoto = false
        GlobalState.navigation.pop()
        let storedImageUri = data.uri

        if (Platform.OS === 'ios') {
          const croppedUri = await this._imageEditorResizePromise(data.uri, data.width, data.height, 1024)
          storedImageUri = await CameraRoll.saveToCameraRoll(croppedUri)
        }

        console.warn(storedImageUri)
        this.props.onChange(storedImageUri)
      } catch (e) {
        console.error(e)
      } finally {
        this.model.isTakingPhoto = false
      }
    }
  }

  recordVideo = async () => {
    if (this.camera) {
      let hasAudioPermission
      if (Platform.OS === 'android') {
        hasAudioPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO)
        if (!hasAudioPermission) {
          hasAudioPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            {
              'title': 'Record Audio',
              'message': 'eFRS needs permission to record audio'
            }
          )
        }
      }
      this.model.isRecording = true
      const options = {
        quality: RNCamera.Constants.VideoQuality['480p'],
        maxDuration: 60 * 3
      }
      if (!hasAudioPermission) {
        options.mute = true
      }

      try {
        const cameraResult = await this.camera.recordAsync(options)
        console.log('Camera result', cameraResult)
        this.props.onChange(cameraResult.uri)
      } catch (e) {
        console.error(e)
      } finally {
        GlobalState.navigation.pop()
        this.model.isRecording = false
      }
    }
  }

  stopRecording = () => {
    this.camera.stopRecording()
  }

  render () {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref
        }}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
        type={RNCamera.Constants.Type.back}
        permissionDialogTitle={Translate.do('Permission to use camera')}
        permissionDialogMessage={Translate.do('We need your permission to use your camera phone')}
        captureAudio
      >
        {!this.model.isRecording
          ? <View style={{ flexDirection: 'row' }}>
            <IconButton isBusy={this.model.isTakingPhoto}
              translate
              isDisabled={this.model.isTakingPhoto}
              name='camera'
              label='Take Photo'
              onPress={this.takePicture} />
            <View style={{ width: 10 }} />
            {!this.model.isTakingPhoto && <IconButton translate
              name='video-camera'
              label='Record Video'
              onPress={this.recordVideo} />}
          </View>
          : <View>
            <IconButton translate name='stop-circle' label='Stop Recording' onPress={this.stopRecording} />
          </View>
        }
      </RNCamera>
    )
  }
}

const PhotoBoxStyle = {
  backgroundColor: 'rgba(0,0,0,0.3)',
  height: 150,
  width: 150,
  alignItems: 'center',
  justifyContent: 'center'
}

function isIterable (obj) {
  // checks for null and undefined
  if (obj == null) {
    return false
  }
  return typeof obj[Symbol.iterator] === 'function'
}

export default PhotoFieldView
export { FullScreenCamera }
