import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
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
    const { actions, state, navigation } = this.props;
    if (!state.selectedGroup || pressedGroup.groupID !== state.selectedGroup.groupID) {
      actions.setSelectedGroup(pressedGroup);
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
      <ScrollView>
        {myGroups.myGroups.length === 0 &&
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
        {myGroups.myGroups.length > 0 &&
          <FlatList
            data={myGroups.myGroups}
            keyExtractor={item => item.groupID}
            renderItem={this.renderItem}
          />
        }
      </ScrollView>
    );
  }
}

export default SelectGroup;