import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView, RefreshControl, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, ListItem, Button } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';
import BootPage from '../../components/BootPage';

import * as GroupActions from './actions';

import style, { custom, headerStyle } from './style';

function mapStateToProps(store) {
  return {
    state: store.chosenGroup,
    user: store.app.user,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GroupActions, dispatch),
  };
}

let that;
@connect(mapStateToProps, matchDispatchToProps)
class Group extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static navigationOptions = () => {
    const headerRight = (
      <TouchableOpacity
        onPress={() => console.log('Find group by groupID')}
        style={style.headerRight}
      >
        <Entypo name="plus" size={25} style={{ color: custom.headerRightIcon }} />
      </TouchableOpacity>);
    return { ...headerStyle, headerRight };
  };

  componentWillMount() {
    const { actions, state, user } = this.props;
    actions.setDefaultChosenGroup('130000198905318650', user);
    actions.fetchChosenGroup('130000198905318650', user);
  }

  render() {
    const { user, state } = this.props;
    if (state.isFetchingChosenGroup) {
      return <BootPage />
    }
    return (
      <ScrollView style={style.container}>
        <Text>Chosen Group {state.chosenGroupID}</Text>
        {state.myBill && state.myBill.shouldPay &&
          <View>
            <Text>Need Pay: ${state.myBill.totalPay}</Text>
            <Text>Could Earn: ${state.myBill.totalEarn}</Text>
          </View>
        }
      </ScrollView>
    );
  }
}

export default Group;