import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native'

export default class ModalScreen extends Component {

  componentDidMount() {
    this.props.navigator.setStyle({
      navBarHidden: true
    });
  }

  closeModal = () => {
    this.props.navigator.dismissModal({
      animationType: 'slide-down'
    })
  }

  render() {
    return (
      <View style={styles.modalBg}>
        <Text> Modal Screen </Text>
        <Button title="Ok" color="red" onPress={this.closeModal}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modalBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    opacity: 0.96,
    height: Dimensions.get('screen').width - 20
  }
})