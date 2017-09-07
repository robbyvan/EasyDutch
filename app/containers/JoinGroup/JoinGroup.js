import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import Swiper from 'react-native-swiper';
import CreateGroup from './components/CreateGroup';
import SearchGroup from './components/SearchGroup';
import * as AppActions from './actions';
import style, { custom, headerStyle } from './style';

function mapStateToProps(store) {
  return {
    state: store.joinGroup,
    user: store.app.user,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch),
  };
}

@connect(mapStateToProps, matchDispatchToProps)
class JoinGroup extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static navigationOptions = ({ navigation }) => ({ ...headerStyle });

  handlePress(method) {
    this._swiper.scrollBy(1);
    this.props.actions.setJoinMethod(method);
    this.props.actions.setCanSwipe(true);
  }

  render() {
    const { state, navigation } = this.props;
    const backAction = NavigationActions.back({
      key: navigation.state.key,
    });
    return (
      <Swiper
        style={style.wrapper}
        showsButtons={false}
        showsPagination={false}
        loop={false}
        removeClippedSubviews={false}
        loadMinimal={true}
        scrollEnabled={state.canSwipe}
        index={0}
        ref={swiper => {this._swiper = swiper;}}
        onIndexChanged={ index => index === 0 ? this.props.actions.setCanSwipe(false) : null}
      >
        <View style={style.slide1}>
          <View style={style.joinTitleContainer}>
            <Text style={style.joinTitle}>Join a Group</Text>
          </View>
          <View style={style.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.handlePress('create')}
              activeOpacity={0.6}
            >
              <Text style={[style.buttonText, {color: '#be7358', borderColor: '#be7358'}]}>Create New</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.handlePress('search')}
              activeOpacity={0.6}
              style={{marginTop: 30}}
            >
              <Text style={[style.buttonText, {color: '#b09f85', borderColor: '#b09f85'}]}>Search Existing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.dispatch(backAction)}
              activeOpacity={0.6}
            >
              <Text style={style.backButton}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.slide2}>
          {state.joinMethod === 'create' && <CreateGroup navigation={navigation} />}
          {state.joinMethod === 'search' && <SearchGroup navigation={navigation} />}
        </View>
      </Swiper>
    );
  }
}

export default JoinGroup;