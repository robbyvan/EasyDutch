import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Components
import BootPage from '../../components/BootPage';
import Login from '../Login';
import Tabs from '../routes';
// Actions
import * as OrderActions from './actions';

import style, { custom, headerStyle } from './style';

function mapStateToProps(store) {
  return {
    state: store.orders,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(OrderActions, dispatch),
  };
}

@connect(mapStateToProps, matchDispatchToProps)
class Orders extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      ...headerStyle,
      // headerRight,
      headerTitle: `${navigation.state.params.chosenGroup.name}`,
    };
  };

  componentDidMount() {
    // this.props.actions.asyncAppStatus();
    // AsyncStorage.clear();
  }

  render() {
    const { state } = this.props;

    return (
      <View>
        <Text>Orders</Text>
      </View>
    );
  }
}

export default Orders;