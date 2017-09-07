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
    state: store.myGroups,
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

  constructor() {
    super();
    that = this;
  }

  componentWillMount() {
    this.props.actions.setDefaultGroups();
    this.props.actions.fetchMyGroups();
  }

  renderItem({ item, index }) {
    // const { navigation } = that.props;
    const avatarColors = ['#A3BFB2', '#AAB7BF', '#B09F85', '#BABF95', '#BE7358'];
    const textAvatar = (
      <View style={[style.iconWrapper, { backgroundColor: avatarColors[index % 5] }]}>
        <Text style={style.iconText}>
          {item.name.trim().charAt(0).toUpperCase()}
        </Text>
      </View>
    );
    const rowContent = (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={[style.nameText, {flex: 1, alignSelf: 'center'}]}>
          {item.name.trim()}
        </Text>
        <Text style={{flex: 1, alignSelf: 'center', color: 'gray'}}>
          {moment(item.lastUpdated).format('MM/DD HH:mm')}
        </Text>
      </View>
    );
    return (
      <ListItem
        onPress={() => that.props.navigation.navigate('ChosenGroup', { groupID: item.groupID, name: item.name })}
        key={item.groupID}
        title={rowContent}
        leftIcon={textAvatar}
      />
    );
  }

  handleRefresh() {
    this.props.actions.refreshMyGroups();
  }

  render() {
    const { user, state } = this.props;
    if (state.isFetchingMyGroups && !state.isRefreshingMyGroups) {
      return <BootPage />
    }
    return (
      <ScrollView
        style={style.container}
        refreshControl={
          <RefreshControl
            refreshing={state.isFetchingMyGroups}
            onRefresh={() => this.handleRefresh()}
            tintColor="#8f8f8f"
            title="Update"
          />
        }
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
      >
        {state.myGroups.length === 0 &&
          <View>
            <Text>No groups yet</Text>
            <Button
              title='Join a group now'
              borderRadius={6}
              backgroundColor={custom.buttonColor}
              textStyle={custom.buttonText}
            />
          </View>
        }
        {state.myGroups.length > 0 &&
          <FlatList
            data={state.myGroups}
            keyExtractor={item => item.groupID}
            renderItem={this.renderItem}
          />
        }
      </ScrollView>
    );
  }
}

export default Group;