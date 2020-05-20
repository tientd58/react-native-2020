import {createBottomTabNavigator} from 'react-navigation';

import {NavigationRoutes} from './Routes';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';

export default createBottomTabNavigator({
  [NavigationRoutes.Home]: {
    screen: HomeNavigator,
  },
  [NavigationRoutes.Profile]: {
    screen: ProfileNavigator,
  },
});
