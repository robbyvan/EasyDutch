import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as LoginActions from '../Login/actions';

import style, { headerStyle } from './style';

function mapStateToProps(store) {
  return {
    state: store.login,
    user: store.app.user,
  }
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch),
  };
}


@connect(mapStateToProps, matchDispatchToProps)
class Me extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    clockHandler: PropTypes.object,
  };

  static navigationOptions = () => ({ ...headerStyle });

  render() {
    const { user } = this.props;
    return(
      <View>
        <Text>This is Me.</Text>
        <TouchableOpacity
          style={style.myButton}
          onPress={() => Alert.alert('You clicked Me.')}
        >
          <View>
            <Text>Click Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Me;