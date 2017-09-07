import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ListItem, Button } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
// Actions
import * as SetOrderNameActions from '../../actions';
import style, { headerStyle, custom } from './style';

function mapStateToProps(store) {
  return {
    state: store.addOrder,
    myGroups: store.myGroups,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SetOrderNameActions, dispatch),
  };
}

let that;
@connect(mapStateToProps, matchDispatchToProps)
class SetOrderName extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static navigationOptions = ({ navigation }) => {
    const backAction = NavigationActions.back({
      key: navigation.state.key,
    });

    const SaveButton = (
      <TouchableOpacity
        onPress={() => {
          that.props.actions.setOrderName(that.props.state.tempOrderName)
          navigation.dispatch(backAction)
        }}
        style={style.headerRight}
      >
        <Text style={style.headerRightText}>Save</Text>
      </TouchableOpacity>
    );

    return {
      ...headerStyle,
      headerRight: SaveButton,
    };
  };

  constructor() {
    super();
    that = this;
  }

  componentDidMount() {
    const { actions, state } = this.props;
    actions.setTempOrderName(state.orderName);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <View style={style.container}>
        <ScrollView
          style={style.listContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={style.inputContainer}>
            <TextInput
              autoFocus
              // multiline
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              autoCorrect={false}
              defaultValue={state.orderName}
              keyboardType="default"
              maxLength={16}
              // onFocus={() => actions.setExplanationHintVisible(true)}
              // onBlur={() => actions.setExplanationHintVisible(false)}
              style={style.textStyle}
              onChangeText={text => actions.setTempOrderName(text)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SetOrderName;