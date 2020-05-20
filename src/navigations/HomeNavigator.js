import {createStackNavigator} from 'react-navigation';

import HomeScreen from '_features/Home';
import {NavigationRoutes} from './Routes';

const HomeNavigator = createStackNavigator(
  {
    [NavigationRoutes.Home]: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: NavigationRoutes.Home,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default HomeNavigator;
