import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Entypo from 'react-native-vector-icons/Entypo';
import style, { custom } from './style';

import * as JoinGroupActions from '../../actions';

function mapStateToProps(store) {
  return {
    state: store.joinGroup,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(JoinGroupActions, dispatch),
  };
}

@connect(mapStateToProps, matchDispatchToProps)
class CreateGroup extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  handleJoin(){
    const { state, actions, navigation } = this.props;
    console.log(state.groupID);
    if (!state.groupID) {
      Alert.alert('Whoops', 'You need the ID to join a group.');
      return;
    }
    actions.createGroup(state.groupName);
    const backAction = NavigationActions.back({
      key: navigation.state.key,
    });
    navigation.dispatch(backAction);
  }

  render() {
    const { state, actions } = this.props;
    return(
      <View style={style.container}>
        <View style={style.joinTitleContainer}>
            <Text style={style.joinTitle}>The group ID is...</Text>
          </View>
        <View style={style.contentContainer}>
          <View style={style.inputContainer}>
            <TextInput
              // autoFocus
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              autoCorrect={false}
              placeholder='Type the unique group ID here'
              defaultValue={state.orderName}
              keyboardType="default"
              returnKeyType="done"
              maxLength={16}
              style={style.textStyle}
              onChangeText={text => actions.setGroupID(text)}
              onSubmitEditing={() => this.handleJoin()}
            />
          </View>
          <TouchableOpacity
            onPress={() => null}
            activeOpacity={0.6}
          >
            <Text style={{ textAlign: 'center', color: 'gray', marginTop: 40}}>Need Help?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CreateGroup;