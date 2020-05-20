import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Colors} from '_styles';

import {NavigationRoutes} from './Routes';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    // screenOptions={({route}) => ({
    //   tabBarIcon: ({focused, color, size}) => {
    //     let IconName = null;
    //     if (route.name === 'Home') {
    //       IconName = (
    //         <FontAwesome
    //           name="home"
    //           size={24}
    //           color={focused ? Colors.RED : Colors.BLACK}
    //         />
    //       );
    //     } else if (route.name === 'Settings') {
    //       IconName = (
    //         <MaterialIcons
    //           name="person"
    //           size={24}
    //           color={focused ? Colors.RED : Colors.BLACK}
    //         />
    //       );
    //     }

    //     return IconName;
    //   },
    // })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name={NavigationRoutes.Home} component={HomeNavigator} />
    <Tab.Screen name={NavigationRoutes.Profile} component={ProfileNavigator} />
  </Tab.Navigator>
);

export default TabNavigator;
