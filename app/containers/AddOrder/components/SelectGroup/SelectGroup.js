import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ListItem, Button } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
// Actions
import * as SelectGroupActions from '../../actions';
import style, { headerStyle, custom } from './style';

function mapStateToProps(store) {
  return {
    state: store.addOrder,
    myGroups: store.myGroups,
    user: store.app.user,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SelectGroupActions, dispatch),
  };
}

let that;
@connect(mapStateToProps, matchDispatchToProps)
class SelectGroup extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static navigationOptions = () => ({ ...headerStyle });

  constructor() {
    super();
    that = this;
  }

  handlePress(pressedGroup) {
    const { actions, state, navigation, user } = this.props;
    if (!state.selectedGroup || pressedGroup.groupID !== state.selectedGroup.groupID) {
      actions.setSelectedGroup(pressedGroup);
      actions.resetSharedBy(user.username);
    }
    const backAction = NavigationActions.back({
      key: navigation.state.key,
    });
    navigation.dispatch(backAction);
  }

  renderItem({ item, index }) {
    const { state } = that.props;
    const avatarColors = ['#A3BFB2', '#AAB7BF', '#B09F85', '#BABF95', '#BE7358'];
    const textAvatar = (
      <View style={[style.iconWrapper, { backgroundColor: avatarColors[index % 5] }]}>
        <Text style={style.iconText}>
          {item.name.trim().charAt(0).toUpperCase()}
        </Text>
      </View>
    );
    const rowContent = (
      <View style={{flex: 1}}>
        <Text style={style.nameText}>
          {item.name.trim()}
        </Text>
      </View>
    );
    const checkMark = (
      <Entypo
        name="check"
        size={20}
        color={custom.checkMarkColor}
        style={custom.iconStyle}
      />
    );
    return (
      <ListItem
        onPress={() => that.handlePress(item)}
        key={item.groupID}
        title={rowContent}
        leftIcon={textAvatar}
        rightIcon={checkMark}
        hideChevron={!state.selectedGroup || state.selectedGroup.groupID !== item.groupID}
      />
    );
  }

  render() {
    const { myGroups, state } = this.props;
    return (
      <ScrollView
        style={{backgroundColor: '#fff'}}
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
      >
        {myGroups.myGroups.length === 0 &&
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 24, color: 'gray'}}>Whoops, no groups yet.</Text>
          </View>
        }
        {myGroups.myGroups.length > 0 &&
          <FlatList
            data={myGroups.myGroups}
            extraData={state.selectedGroup}
            keyExtractor={item => item.groupID}
            renderItem={this.renderItem}
          />
        }
      </ScrollView>
    );
  }
}

export default SelectGroup;