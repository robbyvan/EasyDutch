import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { List, ListView, ListItem, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import * as LoginActions from '../Login/actions';

import style, { custom, headerStyle } from './style';

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
    const { user, navigation } = this.props;
    if (!user || !user.token) {
      return null;
    }
    const textAvatar = (
      <View style={[style.iconWrapper, { backgroundColor: '#BE7358' }]}>
        <Text style={style.iconText}>
          {user.nickname.trim().charAt(0).toUpperCase()}
        </Text>
      </View>
    );
    return(
      <ScrollView contentContainerStyle={style.container}>
        <View style={{ marginTop: 10}}>
          <List containerStyle={{marginTop: 0}}>
            <ListItem
              onPress={() => null}
              containerStyle={{backgroundColor: '#fff'}}
              leftIcon={textAvatar}
              title={user.nickname}
              titleStyle={{marginLeft: 30, fontSize: 20}}
              subtitle={`EasyDutch: ${user.username}`}
              subtitleStyle={{marginLeft: 30, fontSize: 16, fontWeight: 'normal'}}
              hideChevron
            />
          </List>
          <List>
            <ListItem
              onPress={() => navigation.navigate("Purchases")}
              containerStyle={{backgroundColor: '#fff'}}
              leftIcon={<EvilIcons name="cart" size={30} color='#BABF95' style={{alignSelf: 'center'}} />}
              title='Purchases'
              titleStyle={{marginLeft: 20, fontSize: 18}}
            />
            <ListItem
              onPress={() => Alert.alert('Sorry', 'Developer is still working on it :)')}
              containerStyle={{backgroundColor: '#fff'}}
              leftIcon={<EvilIcons name="credit-card" size={30} color='#B09F85' style={{alignSelf: 'center'}} />}
              title='Bills'
              titleStyle={{marginLeft: 20, fontSize: 18}}
            />
          </List>
          <List>
            <ListItem
              onPress={() => navigation.navigate("Settings")}
              containerStyle={{backgroundColor: '#fff'}}
              leftIcon={<EvilIcons name="gear" size={30} color='#AAB7BF' style={{alignSelf: 'center'}} />}
              title='Settings'
              titleStyle={{marginLeft: 20, fontSize: 18}}
            />
          </List>
        </View>
      </ScrollView>
    );
  }
}

export default Me;