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
    state: store.group,
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
    // this.props.actions.fetchGroupExpense();
  }

  render() {
    const { user, state } = this.props;
    if (state.isFetchingGroupExpense && !state.isRefreshingExpense) {
      return <BootPage />
    }
    return (
      <ScrollView style={style.container}>
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