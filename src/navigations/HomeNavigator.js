import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '_features/Home';
import {NavigationRoutes} from './Routes';

const Stack = createStackNavigator();
const HomeNavigator = () => (
  <Stack.Navigator initialRouteName={NavigationRoutes.Home}>
    <Stack.Screen
      name={NavigationRoutes.Home}
      component={HomeScreen}
      options={{}}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
