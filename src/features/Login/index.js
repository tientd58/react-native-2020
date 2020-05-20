import React from 'react';
import {SafeAreaView, Text, TouchableHighlight, StyleSheet} from 'react-native';

const LoginScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <Text>Screen: Login</Text>

    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
      <Text>Go to home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
