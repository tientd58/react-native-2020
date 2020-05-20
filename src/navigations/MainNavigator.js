import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import {NavigationRoutes} from './Routes';

const Stack = createStackNavigator();
const MainNavigator = () => (
  <Stack.Navigator
    initialRouteName={NavigationRoutes.Login}
    screenOptions={{headerShown: false}}>
    <Stack.Screen
      name={NavigationRoutes.Login}
      component={AuthNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={NavigationRoutes.Home}
      component={TabNavigator}
      options={{}}
    />
  </Stack.Navigator>
);

export default MainNavigator;
