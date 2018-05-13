/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { Navigation } from 'react-native-navigation'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Splash extends Component {

  componentDidMount() {
    this.props.navigator.setStyle({
      navBarHidden: true
    });
  }

  loadApp = () => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Screen 1',
          screen: 'Screen1',
          title: 'Screen 1',
          icon: require('../images/icon1.png'),
          selectedIcon: require('../images/icon1_selected.png')
        },
        {
          label: 'Screen 2',
          screen: 'Screen2',
          title: 'Screen 2',
          icon: require('../images/icon2.png'),
          selectedIcon: require('../images/icon2_selected.png')
        }
      ]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native Starter
        </Text>
        <Text style={styles.instructions}>
          Uses Wix Navigation.
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button title='Start' onPress={this.loadApp} />
      </View>
    );
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
});
