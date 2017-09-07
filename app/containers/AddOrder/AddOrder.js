import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, ListItem, Button } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// Components
import BootPage from '../../components/BootPage';
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
      headerRight,
    };
  };
  
  render() {
    const { state, navigation, myGroups } = this.props;
    return (
      <ScrollView style={style.container}>
        <List style={{ margin: 0, backgroundColor: '#fff' }}>
          <ListItem
            onPress={() => navigation.navigate('SelectGroup')}
            leftIcon={
              <EvilIcons name="tag" size={40} color={custom.iconColors[0]} style={{alignSelf: 'center'}} />
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
            onPress={() => navigation.navigate('SetOrderName')}
            leftIcon={
              <EvilIcons name="cart" size={40} color={custom.iconColors[1]} style={{alignSelf: 'center'}} />
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
            onPress={() => Alert.alert('haha')}
            leftIcon={
              <EvilIcons name="credit-card" size={40} color={custom.iconColors[2]} style={{alignSelf: 'center'}} />
            }
            title={
              <View style={style.rowContainer}>
                <Text style={[style.rowLabel, {color: custom.iconColors[2]}]}>Price</Text>
                {!state.orderName ? (
                  <Text style={[style.rowValue, {color: 'gray'}]}></Text>
                ) : (
                <Text style={[style.rowValue, {color: '#333'}]}>${state.price.toFixed(2)}</Text>
                )}
              </View>
            }
            // hideChevron
          />
          <ListItem
            onPress={() => Alert.alert('haha')}
            leftIcon={
              <EvilIcons name="calendar" size={40} color={custom.iconColors[3]} style={{alignSelf: 'center'}} />
            }
            title={
              <View style={style.rowContainer}>
                <Text style={[style.rowLabel, {color: custom.iconColors[3]}]}>Payment Date</Text>
                {!state.orderName ? (
                  <Text style={[style.rowValue, {color: 'gray'}]}></Text>
                ) : (
                <Text style={[style.rowValue, {color: '#333'}]}>{state.orderName}</Text>
                )}
              </View>
            }
            // hideChevron
          />
          <ListItem
            onPress={() => Alert.alert('haha')}
            leftIcon={
              <EvilIcons name="star" size={40} color={custom.iconColors[4]} style={{alignSelf: 'center'}} />
            }
            title={
              <View style={style.rowContainer}>
                <Text style={[style.rowLabel, {color: custom.iconColors[4]}]}>Shared With</Text>
                {!state.orderName ? (
                  <Text style={[style.rowValue, {color: 'gray'}]}></Text>
                ) : (
                <Text style={[style.rowValue, {color: '#333'}]}>{state.orderName}</Text>
                )}
              </View>
            }
            // hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default AddOrder;