import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import TabsRouter from './Routes/Tabs';

export default function App() {
  return (
    <NavigationContainer>
      <TabsRouter />
    </NavigationContainer>
  );
}
