import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Components
import BootPage from '../../components/BootPage';
import Login from '../Login';
import Tabs from '../routes';
// Actions
import * as SelectGroupActions from './actions';

function mapStateToProps(store) {
  return {
    state: store.addOrder,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SelectGroupActions, dispatch),
  };
}

@connect(mapStateToProps, matchDispatchToProps)
class App extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View>
        <Text>选择组</Text>
      </View>
    );
  }
}

export default App;