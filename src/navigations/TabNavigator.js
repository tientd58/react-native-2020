import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Colors, Mixins, Spacing, Responsive, Typography} from '_styles';

import {NavigationRoutes} from './Routes';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';
import NotificationNavigator from './NotificationNavigator';

const IconNotificationWithBadge = ({badgeCount, color, size}) => (
  <View style={styles.tabContainer}>
    <Entypo name="bell" size={size} color={color} />
    {badgeCount > 0 && (
      <View style={styles.countNumber}>
        <Text style={styles.text}>{badgeCount}</Text>
      </View>
    )}
  </View>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let IconName = null;
        if (route.name === NavigationRoutes.Home) {
          IconName = (
            <FontAwesome
              name="home"
              size={Spacing.SCALE_24}
              color={focused ? Colors.RED : Colors.BLACK}
            />
          );
        } else if (route.name === NavigationRoutes.Profile) {
          IconName = (
            <MaterialIcons
              name="person"
              size={Spacing.SCALE_24}
              color={focused ? Colors.RED : Colors.BLACK}
            />
          );
        } else if (route.name === NavigationRoutes.Notification) {
          IconName = (
            <IconNotificationWithBadge
              badgeCount={2}
              size={Spacing.SCALE_24}
              color={focused ? Colors.RED : Colors.BLACK}
            />
          );
        }

        return IconName;
      },
    })}
    tabBarOptions={{
      activeTintColor: Colors.RED,
      inactiveTintColor: Colors.BLACK,
    }}>
    <Tab.Screen name={NavigationRoutes.Home} component={HomeNavigator} />
    <Tab.Screen
      name={NavigationRoutes.Notification}
      component={NotificationNavigator}
    />
    <Tab.Screen name={NavigationRoutes.Profile} component={ProfileNavigator} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabContainer: {
    width: Spacing.SCALE_24,
    height: Spacing.SCALE_24,
    ...Mixins.margin(5),
  },
  countNumber: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: Responsive.h(6),
    width: Spacing.SCALE_12,
    height: Spacing.SCALE_12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_10,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
});

export default TabNavigator;
