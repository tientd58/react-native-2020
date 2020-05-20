import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {HelloWorld} from '_atoms';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HelloWorld name="Kane" />
      </SafeAreaView>
    </>
  );
};

export default App;
