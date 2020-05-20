import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';

import AppNavigator from '_navigations';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </View>
  );
};

export default App;
