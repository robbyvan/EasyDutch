import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
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
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SetOrderNameActions, dispatch),
  };
}

let that;
@connect(mapStateToProps, matchDispatchToProps)
class SetPrice extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static navigationOptions = ({ navigation }) => {
    const backAction = NavigationActions.back({
      key: navigation.state.key,
    });

    const handleSave = (str) => {
      // check if number
      if (/^\d+(\.{0,1}\d+){0,1}$/.test(that.props.state.tempPrice)) {
        const num = Number(that.props.state.tempPrice);
        that.props.actions.setPrice(num);
        navigation.dispatch(backAction);
      } else {
        Alert.alert('Whoops', 'Price should be non-negative numbers');
      }
    };

    const SaveButton = (
      <TouchableOpacity
        onPress={() => handleSave()}
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
    actions.setTempPrice(state.price);
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
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              autoCorrect={false}
              defaultValue={state.price >= 0 && `${state.price}` || ''}
              keyboardType="default"
              maxLength={10}
              style={style.textStyle}
              onChangeText={text => actions.setTempPrice(text)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SetPrice;