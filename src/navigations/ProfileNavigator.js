import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '_features/Profile';
import {NavigationRoutes} from './Routes';

const Stack = createStackNavigator();
const ProfileNavigator = () => (
  <Stack.Navigator initialRouteName={NavigationRoutes.Profile}>
    <Stack.Screen
      name={NavigationRoutes.Profile}
      component={ProfileScreen}
      options={{}}
    />
  </Stack.Navigator>
);

export default ProfileNavigator;
