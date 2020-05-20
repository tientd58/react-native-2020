import React from 'react';
import {Text} from 'react-native';

import {Colors} from '_styles';

const HelloWorld = ({name}) => (
  <Text style={{color: Colors.RED}}>Hello {name}!</Text>
);

export default HelloWorld;
