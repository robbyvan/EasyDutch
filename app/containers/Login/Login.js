import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, TextInput, Text, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'react-native-elements';

// Actions
import * as LoginActions from './actions';
// Styles
import style from './style';

function mapStateToProps(store) {
  return {
    state: store.login,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch),
  };
}

@connect(mapStateToProps, matchDispatchToProps)
class Login extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
  };

  handleLogin(username, password) {
    const { state, actions } = this.props;
    if (state.isLogging) {
      return;
    }

    actions.setIsLogging(true);

    if (!username || !password) {
      actions.setIsLogging(false);
      Alert.alert('Sorry', 'Please fill in your username and password.');
      return;
    }

    actions.login(username, password);
  }

  render() {
    const { actions, state } = this.props;
    return (
      <View style={style.container}>
        <View style={style.logo}>
          <Text style={style.logoText}>EasyDutch</Text>
        </View>

        <View style={style.inputContainer}>
          <View style={style.nameContainer}>
            <TextInput
              placeholder="Your Username"
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
              style={style.username}
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              onChangeText={username => actions.setUsername(username)}
            />
          </View>

          <View style={style.pwContainer}>
            <TextInput
              placeholder="Your Password"
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'default'}
              secureTextEntry
              style={style.password}
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              onChangeText={password => actions.setPassword(password)}
            />
          </View>
        </View>

        <View style={style.loginContainer}>
          {
            state.isLogging
              ? <Button
                disabled
                buttonStyle={style.buttonStyle}
                title="Please Wait..."
                borderRadius={6}
                fontSize={20}
              />
              : <Button
                buttonStyle={style.buttonStyle}
                title="Sign In"
                borderRadius={6}
                fontSize={20}
                onPress={() => this.handleLogin(state.username, state.password)}
              />
          }
        </View>

        <View style={style.loginHint}>
          <TouchableOpacity>
            <Text style={style.hintText}>Sign In With Problems?</Text>
          </TouchableOpacity>
        </View>

        {
          state.isLogging
            ? <ActivityIndicator style={style.indicatorStyle} color="#000" />
            : null
        }
      </View>
    );
  }
}

export default Login;
