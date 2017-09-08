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

  constructor() {
    super();
  }

  handleCreate() {
    const { state, actions, navigation } = this.props;
    if (!state.groupName) {
      Alert.alert('Whoops', 'You need to give your group a name.');
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
            <Text style={style.joinTitle}>I want to name it...</Text>
          </View>
        <View style={style.contentContainer}>
          <View style={style.inputContainer}>
            <TextInput
              // autoFocus
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              autoCorrect={false}
              placeholder="Choose a good name"
              defaultValue={state.groupName}
              keyboardType="default"
              maxLength={16}
              style={style.textStyle}
              returnKeyType="done"
              onSubmitEditing={() => this.handleCreate()}
              onChangeText={text => actions.setGroupName(text)}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default CreateGroup;