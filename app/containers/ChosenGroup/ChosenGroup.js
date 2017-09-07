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
    const headerRight = (
      <TouchableOpacity
        onPress={() => navigation.navigate('Orders', { chosenGroup: that.props.state.chosenGroup })}
        style={style.headerRight}
      >
        <Text style={style.headerRightText}>Orders</Text>
      </TouchableOpacity>);
    return {
      ...headerStyle,
      headerRight,
      headerTitle: `${navigation.state.params.name}`,
    };
  };

  constructor() {
    super()
    that = this;
  }

  componentWillMount() {
    const { actions, state, user } = this.props;
    actions.setDefaultChosenGroup('130000198905318650', user);
    actions.fetchChosenGroup('130000198905318650', user);
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
        onPress={() => navigation.navigate('Ha', { groupID: item.groupID, name: item.name })}
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
    } else if (result === 0) {
      status = (
        <View style={[style.statusContainer, { borderColor: custom.evenColor }]}>
          <Text style={[style.status, { color: custom.evenColor }]}>No Need to Pay or Receive</Text>
        </View>
      );
    } else {
       status = (
        <View style={[style.statusContainer, { borderColor: custom.payColor }]}>
          <Text style={[style.status, { color: custom.payColor }]}>Should Pay ${result || '0'} in Total </Text>
        </View>
      );
    }
    return (
      <View
        style={style.container}
      >

        <View style={style.buttonContainer}>
          <Button
            title='New Order'
            borderRadius={6}
            backgroundColor={custom.buttonColor}
            textStyle={custom.buttonText}
            style={{ width: 200, alignSelf: 'center', margin: 10}}
          />
        </View>
        
        <View style={{flex: 1}}>
          {status}
          {null && <View style={style.title}>
                      <Text style={style.titleText}>Transactions</Text>
                    </View>}
          <FlatList
            data={state.chosenGroup.members}
            keyExtractor={item => item}
            renderItem={this.renderItem}
          />
        </View>

        <Modal
          visible={false}
          onRequstClose={() => null}
        >
          <View style={{flex: 1}}>
            <View style={style.title}>
              <Text style={style.titleText}>Brief</Text>
            </View>
              {state.myBill &&
                <List style={{margin: 0, backgroundColor: '#fff'}}>
                  <ListItem
                    onPress={() => Alert.alert('haha')}
                    leftIcon={<EvilIcons name="arrow-right" size={40} color={custom.receiveColor} style={{alignSelf: 'center'}} />}
                    title={
                      <View style={style.rowContainer}>
                        <Text style={[style.rowLabel, { color: custom.receiveColor }]}>Receive</Text>
                        <Text style={style.rowValue}>${state.myBill.totalReceive  || '0'}</Text>
                      </View>
                    }
                    hideChevron
                  />
                  <ListItem
                    onPress={() => Alert.alert('haha')}
                    leftIcon={<EvilIcons name="arrow-left" size={40} color={custom.payColor} style={{alignSelf: 'center'}}/>}
                    title={
                      <View style={style.rowContainer}>
                        <Text style={[style.rowLabel, { color: custom.payColor }]}>Pay</Text>
                        <Text style={style.rowValue}>${state.myBill.totalPay || '0'}</Text>
                      </View>
                    }
                    hideChevron
                  />
                </List>
              }
          </View>  
        </Modal>
        
        
        

      </View>
    );
  }
}

export default Group;