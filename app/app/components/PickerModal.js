import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, Modal, Animated } from 'react-native'
import moment from 'moment'

class DatePicker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      opacityValue: new Animated.Value(0),
      datePickerPos: new Animated.Value(0)
    }
  }

  onDateSelected (date) {
    this.props.onDateSelected(moment(date))
  }

  closeModal () {
    this.state.opacityValue.setValue(0)
    this.state.datePickerPos.setValue(-10)
    this.props.onClose()
  }

  render () {
    return (
      <Modal
        transparent
        visible={this.props.show}
        onRequestClose={() => {}}
        onShow={() => {
          Animated.spring( // Base: spring, decay, timing
            this.state.datePickerPos, // Animate `bounceValue`
            {
              toValue: 10, // Animate to smaller size
              friction: 3 // Bouncier spring
            }
          ).start() // Start the animation

          Animated.timing(this.state.opacityValue, { toValue: 1, duration: 500 }).start()
        }}
      >
        <View style={{ flex: 1 }}>
          <Animated.View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.4)', opacity: this.state.opacityValue }} />
          <TouchableWithoutFeedback onPress={() => { this.closeModal() }}><View style={{ flex: 1 }} /></TouchableWithoutFeedback>
          <Animated.View style={{ borderRadius: 10, backgroundColor: 'white', padding: 10, margin: 5, position: 'absolute', bottom: this.state.datePickerPos, left: 0, right: 0 }}>
            {this.props.children}
          </Animated.View>
        </View>
      </Modal>
    )
  }
}

export default DatePicker
