import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as LoginActions from '../Login/actions';

import style, { headerStyle } from './style';

function mapStateToProps(store) {
  return {
    state: store.group,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch),
  };
}


@connect(mapStateToProps, matchDispatchToProps)
class Group extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  static navigationOptions = () => ({ ...headerStyle });

  render() {
    const { user } = this.props;
    return(
      <View>
        <Text>This is Group.</Text>
      </View>
    );
  }
}

export default Group;