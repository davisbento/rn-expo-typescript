import React from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

export function HomeScreen() {
  return (
    <Animatable.View animation='fadeIn' style={styles.root}>
      <Text>Hello</Text>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
