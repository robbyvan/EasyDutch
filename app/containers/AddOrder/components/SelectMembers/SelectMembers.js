import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ListItem, Button } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
// Actions
import * as SelectMembersActions from '../../actions';
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
    actions: bindActionCreators(SelectMembersActions, dispatch),
  };
}

let that;
@connect(mapStateToProps, matchDispatchToProps)
class SelectMembers extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static navigationOptions = () => ({ ...headerStyle });

  constructor() {
    super();
    that = this;
  }

  componentDidMount() {
    this.props.actions.resetSharedBy(this.props.user.username);
  }

  handlePress(pressedMember) {
    this.props.actions.editSharedBy(pressedMember);
  }

  renderItem({ item, index }) {
    console.log('??', item);
    const { state, navigation, user } = that.props;
    const avatarColors = ['#A3BFB2', '#AAB7BF', '#B09F85', '#BABF95', '#BE7358'];
    const textAvatar = (
      <View style={[style.iconWrapper, { backgroundColor: avatarColors[index % 5] }]}>
        <Text style={style.iconText}>
          {item.trim().charAt(0).toUpperCase()}
        </Text>
      </View>
    );
    const rowContent = (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={[style.nameText, {flex: 1, alignSelf: 'center'}]}>
          {item.trim()}
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
        key={item}
        title={rowContent}
        leftIcon={textAvatar}
        rightIcon={checkMark}
        hideChevron={state.sharedBy.indexOf(item) === -1}
      />
    );
  }

  render() {
    const { myGroups, state } = this.props;
    return (
      <ScrollView>
        {state.selectedGroup &&
          <FlatList
            data={state.selectedGroup.members}
            extraData={state.sharedBy}
            keyExtractor={item => item}
            renderItem={this.renderItem}
          />
        }
      </ScrollView>
    );
  }
}

export default SelectMembers;