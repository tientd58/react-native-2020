import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, Text} from 'react-native';

import {getTestRequest} from './State/actions';
import {getHomeState} from './State/selectors';

const HomeScreen = props => {
  console.log('xxxprops: ', props);
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

const mapStateToProps = state => ({
  list: getHomeState(state),
});

const mapDispatchToProps = {
  getTestRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
