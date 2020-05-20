import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '_features/Login';
import {NavigationRoutes} from './Routes';

const AuthNavigator = createStackNavigator(
  {
    [NavigationRoutes.Login]: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: NavigationRoutes.Login,
    header: null,
    headerMode: 'none',
  },
);

export default AuthNavigator;
