import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, Modal, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, ListItem, Button } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import moment from 'moment';
import { validateNewOrder } from '../../utils/Helper';
import BootPage from '../../components/BootPage';
import SelectDate from './components/SelectDate';
// Actions
import * as AppActions from './actions';
import style, { headerStyle, custom } from './style';

function mapStateToProps(store) {
  return {
    state: store.addOrder,
    myGroups: store.myGroups,
    user: store.user,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch),
  };
}

@connect(mapStateToProps, matchDispatchToProps)
class AddOrder extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static navigationOptions = ({ navigation }) => {
    const headerRight = (
      <TouchableOpacity
        onPress={() => null}
        style={style.headerRight}
      >
        <Text style={style.headerRightText}>Done</Text>
      </TouchableOpacity>);
    return {
      ...headerStyle,
      // headerRight,
    };
  };

  handlePress(row) {
    if (row === 'SelectMembers' && this.props.state.selectedGroup === null) {
      Alert.alert('Whoops', 'You need to Select a group first');
    } else {
      this.props.navigation.navigate(row);
    }
  }

  handleSubmit() {
    const { state, actions } = this.props;
    const newOrder = {
      group: state.selectedGroup,
      orderName: state.orderName,
      price: state.price,
      orderDate: state.orderDate,
      sharedBy: state.sharedBy,
      createdAt: moment().toDate(),
    };
    const validation = validateNewOrder(newOrder);
    console.log(validation);
    if (!validation.success) {
      Alert.alert('Whoops!', validation.msg);
      return;
    } else {
      // const aaa = JSON.stringify(newOrder);
      console.log(validation);
      actions.submitNewOrder(newOrder);
    }
  }
  
  render() {
    const { state, navigation, myGroups, actions } = this.props;
    return (
      <View style={style.container}>
        <View style={{flex: 1}}>
          <List style={{marginTop: 0}}>
            <ListItem
              onPress={() => this.handlePress('SelectGroup')}
              leftIcon={
                <EvilIcons name="comment" size={40} color={custom.iconColors[0]} style={{alignSelf: 'center'}} />
              }
              title={
                <View style={style.rowContainer}>
                  <Text style={[style.rowLabel, {color: custom.iconColors[0]}]}>Group</Text>
                  {!state.selectedGroup ? (
                    <Text style={[style.rowValue, {color: 'gray'}]}>Select a Group</Text>
                  ) : (
                  <Text style={[style.rowValue, {color: '#333'}]}>{state.selectedGroup.name}</Text>
                  )}
                </View>
              }
              // hideChevron
            />
            <ListItem
              onPress={() => this.handlePress('SetOrderName')}
              leftIcon={
                <EvilIcons name="tag" size={40} color={custom.iconColors[1]} style={{alignSelf: 'center'}} />
              }
              title={
                <View style={style.rowContainer}>
                  <Text style={[style.rowLabel, {color: custom.iconColors[1]}]}>Order Name</Text>
                  {!state.orderName ? (
                    <Text style={[style.rowValue, {color: 'gray'}]}>Your order name</Text>
                  ) : (
                  <Text style={[style.rowValue, {color: '#333'}]}>{state.orderName}</Text>
                  )}
                </View>
              }
              // hideChevron
            />
            <ListItem
              onPress={() => this.handlePress('SetPrice')}
              leftIcon={
                <EvilIcons name="credit-card" size={40} color={custom.iconColors[2]} style={{alignSelf: 'center'}} />
              }
              title={
                <View style={style.rowContainer}>
                  <Text style={[style.rowLabel, {color: custom.iconColors[2]}]}>Price</Text>
                  {state.price === -1 ? (
                    <Text style={[style.rowValue, {color: 'gray'}]}>Set Price</Text>
                  ) : (
                  <Text style={[style.rowValue, {color: '#333'}]}>${state.price.toFixed(2)}</Text>
                  )}
                </View>
              }
              // hideChevron
            />
            <ListItem
              onPress={() => actions.setDatePickerVisible(true)}
              leftIcon={
                <EvilIcons name="calendar" size={40} color={custom.iconColors[3]} style={{alignSelf: 'center'}} />
              }
              title={
                <View style={style.rowContainer}>
                  <Text style={[style.rowLabel, {color: custom.iconColors[3]}]}>Payment Date</Text>
                    <Text style={[style.rowValue, {color: '#333'}]}>{moment(state.orderDate).format('MM/DD/YYYY')}</Text>
                </View>
              }
              rightIcon={<View style={{width: 40}}></View>}
              // hideChevron
            />
            <ListItem
              onPress={() => this.handlePress('SelectMembers')}
              leftIcon={
                <EvilIcons name="star" size={40} color={custom.iconColors[4]} style={{alignSelf: 'center'}} />
              }
              title={
                <View style={style.rowContainer}>
                  <Text style={[style.rowLabel, {color: custom.iconColors[4]}]}>Shared By</Text>
                  {state.sharedBy.length === 0 ? (
                    <Text style={[style.rowValue, {color: 'gray'}]}>Please Select</Text>
                  ) : (
                  <Text style={[style.rowValue, {color: '#333'}]}>{state.sharedBy.length} people</Text>
                  )}
                </View>
              }
              // hideChevron
            />
          </List>
        </View>
        
        <View style={style.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.handleSubmit()}
            activeOpacity={0.6}
          >
            {!state.isSubmittingOrder && <Text style={style.buttonText}>Submit</Text>}
            {state.isSubmittingOrder && <ActivityIndicator size='large' style={style.indicator} color={custom.themeColor} />}
          </TouchableOpacity>
        </View>
        <SelectDate />
      </View>
    );
  }
}

export default AddOrder;