import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function SettingsScreen() {
  return (
    <View style={styles.root}>
      <Text>Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
