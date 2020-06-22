import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { HomeScreen } from '../../Screens/Home';
import { SettingsScreen } from '../../Screens/Settings';

const Tab = createBottomTabNavigator();

export default function TabsRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  );
}
