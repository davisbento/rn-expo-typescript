import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useApiCall from '~/hooks/useApiCall';
import { getProfile } from '~/services/user';

export function HomeScreen() {
  const { data } = useApiCall(() => getProfile(), []);

  return (
    <View style={styles.root}>
      <Text>Hello, {data?.username}</Text>
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
