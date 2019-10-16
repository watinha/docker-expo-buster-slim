import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.red]} />
        <View style={[styles.box, styles.green]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
  box: {
    height: 50,
  },
  red: {
    backgroundColor: 'red',
    flex: 1
  },
  green: {
    backgroundColor: 'green',
    flex: 2
  }
});
