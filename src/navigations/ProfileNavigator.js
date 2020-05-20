import {createStackNavigator} from 'react-navigation';

import ProfileScreen from '_features/Profile';
import {NavigationRoutes} from './Routes';

const ProfileNavigator = createStackNavigator(
  {
    [NavigationRoutes.Profile]: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: NavigationRoutes.Profile,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default ProfileNavigator;
