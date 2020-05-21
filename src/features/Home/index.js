import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, Text} from 'react-native';

import {getTestRequest} from './actions';

const HomeScreen = props => {
  useEffect(() => {
    props.getTestRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <Text>Screen: Home</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = ({homeReducer}) => ({
  list: homeReducer.list,
});

const mapDispatchToProps = {
  getTestRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
