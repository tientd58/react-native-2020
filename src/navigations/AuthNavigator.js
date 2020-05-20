import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '_features/Login';
import {NavigationRoutes} from './Routes';

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator initialRouteName={NavigationRoutes.Login}>
    <Stack.Screen
      name={NavigationRoutes.Login}
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
