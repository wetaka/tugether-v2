import React, { Component } from 'react'
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Screen3 extends Component {

  loadInstructions = () => {
    this.props.navigator.showModal({
      title: 'Modal',
      screen: 'modalScreen'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Usage Instruction
        </Text>
        <Text style={styles.instructions}>
          Uses Wix Navigation.
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <TouchableOpacity onPress={this.loadInstructions} style={styles.loadInstructions}>
          <Text style={styles.viewInstructions}>Show Modal</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loadInstructions: {
    marginVertical: 10
  }
});