/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import {View, StatusBar} from 'react-native';

import AppNavigator from '_navigations';

import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </View>
    </Provider>
  );
};

export default App;
