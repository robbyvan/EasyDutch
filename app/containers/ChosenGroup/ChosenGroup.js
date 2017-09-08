import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, ScrollView, RefreshControl, FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, ListItem, Button } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import moment from 'moment';
import { calculateTransfer } from '../../utils/Helper';
import BootPage from '../../components/BootPage';

import * as GroupActions from './actions';

import style, { custom, headerStyle } from './style';

const width = Dimensions.get('window').width;

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

  static navigationOptions = ({ navigation }) => {
    return {
      ...headerStyle,
      headerTitle: `${navigation.state.params.name}`,
    };
  };

  constructor() {
    super()
    that = this;
  }

  componentWillMount() {
    const { actions, state, user, navigation } = this.props;
    const chosenGroup = navigation.state.params.groupID;
    actions.setDefaultChosenGroup('12345', user); // since no server at present, so I hardcode the group id here.
    actions.fetchChosenGroup('12345', user);
  }

  renderItem({ item, index }) {
    const { state, navigation, user } = that.props;
    if (item === user.username) {
      return null;
    }
    const avatarColors = ['#A3BFB2', '#AAB7BF', '#B09F85', '#BABF95', '#BE7358'];
    const textAvatar = (
      <View style={[style.iconWrapper, { backgroundColor: avatarColors[index % 5] }]}>
        <Text style={style.iconText}>
          {item.trim().charAt(0)}
        </Text>
      </View>
    );
    const result = calculateTransfer(state.myBill, user, item);
    let transfer = null;
    if (result.type === 'even') {
      transfer = (
        <Text style={[style.transfer, {color: custom.evenColor}]}>
          0.00
        </Text>
      );
    } else if (result.type === 'pay') {
      transfer = (
        <Text style={[style.transfer, {color: custom.payColor}]}>
          -${result.amount.toFixed(2)}
        </Text>
      );
    } else if (result.type === 'receive') {
      transfer = (
        <Text style={[style.transfer, {color: custom.receiveColor}]}>
          + ${result.amount.toFixed(2)}
        </Text>
      );
    }
    const rowContent = (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={[style.nameText, {flex: 1, alignSelf: 'center'}]}>
          {item.trim()}
        </Text>
        {transfer}
      </View>
    );
    return (
      <ListItem
        key={item}
        title={rowContent}
        leftIcon={textAvatar}
      />
    );
  }

  render() {
    const { user, state } = this.props;
    if (state.isFetchingChosenGroup) {
      return <BootPage />
    }
    const result = (state.myBill.totalReceive - state.myBill.totalPay).toFixed(2);
    let status;
    if (result > 0) {
      status = (
        <View style={[style.statusContainer, { borderColor: custom.receiveColor }]}>
          <Text style={[style.status, { color: custom.receiveColor }]}>Should Receive ${result || '0'} in Total.</Text>
        </View>
      );
    } else if (result < 0) {
      status = (
        <View style={[style.statusContainer, { borderColor: custom.payColor }]}>
          <Text style={[style.status, { color: custom.payColor }]}>Should Pay ${result || '0'} in Total </Text>
        </View>
      );
    } else {
      status = (
        <View style={[style.statusContainer, { borderColor: custom.evenColor }]}>
          <Text style={[style.status, { color: custom.evenColor }]}>No Need to Pay or Receive</Text>
        </View>
      );
    }
    return (
      <View
        style={style.container}
      > 
        <View style={{flex: 1}}>
          {status}
          <FlatList
            data={state.chosenGroup.members}
            keyExtractor={item => item}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

export default Group;