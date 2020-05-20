import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NotificationScreen from '_features/Notification';
import {NavigationRoutes} from './Routes';

const Stack = createStackNavigator();
const NotificationNavigator = () => (
  <Stack.Navigator initialRouteName={NavigationRoutes.Notification}>
    <Stack.Screen
      name={NavigationRoutes.Notification}
      component={NotificationScreen}
      options={{}}
    />
  </Stack.Navigator>
);

export default NotificationNavigator;
