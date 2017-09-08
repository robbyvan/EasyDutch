import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, ScrollView, RefreshControl, FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, ListItem, Button } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import moment from 'moment';
import BootPage from '../../../../components/BootPage';

import * as MeActions from '../../actions';

import style, { custom, headerStyle } from './style';

const width = Dimensions.get('window').width;

function mapStateToProps(store) {
  return {
    state: store.me,
    user: store.app.user,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MeActions, dispatch),
  };
}

let that;
@connect(mapStateToProps, matchDispatchToProps)
class Purchases extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static navigationOptions = () => ({ ...headerStyle });

  constructor() {
    super()
    that = this;
  }

  componentWillMount() {
    const { actions, state, user } = this.props;
    // actions.setDefaultChosenGroup('130000198905318650', user);
    actions.fetchMyPurchases(user);
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
          {item.name.trim().charAt(0)}
        </Text>
      </View>
    );
    
    const rowContent = (
      <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
        <View style={{alignSelf: 'center', flex: 2, marginLeft: 15}}>
          <Text style={{fontSize: 18, color: avatarColors[index % 5]}}>
            {item.name.trim()}
          </Text>
          <Text style={{fontSize: 14, color: 'gray'}}>
            {moment(item.createdAt).format('MMM DD')}
          </Text>
        </View>
        <View style={{alignSelf: 'center', flex: 1}}>
          <Text style={{fontSize: 18, color: '#d96e5d'}}>
            -${(item.price / item.sharedBy.length).toFixed(2)}
          </Text>
        </View>
      </View>
    );
    return (
      <ListItem
        key={item}
        title={rowContent}
        leftIcon={textAvatar}
        hideChevron
      />
    );
  }

  handleRefresh() {
    this.props.actions.refreshMyPurchases(this.props.user);
  }

  render() {
    const { user, state } = this.props;
    if (state.isFetchingMyPurchases && !state.isRefreshingMyPurchases) {
      return <BootPage />
    }
    return (
      <View
        style={style.container}
      > 
        <ScrollView
          contentStyle={{flex: 1}}
          refreshControl={
            <RefreshControl
              refreshing={state.isFetchingMyPurchases}
              onRefresh={() => this.handleRefresh()}
              tintColor="#8f8f8f"
              title="Update"
            />
          }
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
        >
          <FlatList
            data={state.myPurchases}
            keyExtractor={item => moment(item.createdAt).format('X')}
            renderItem={this.renderItem}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Purchases;