import { Alert, AsyncStorage } from 'react-native';
import * as at from '../../constants/actionTypes';
import Request from '../../utils/Request';

export function setUsername(username) {
  return {
    type: at.SET_USERNAME,
    payload: username,
  };
}

export function setPassword(password) {
  return {
    type: at.SET_PASSWORD,
    payload: password,
  };
}

export function setIsLogging(status) {
  return {
    type: at.SET_IS_LOGGING,
    payload: status,
  };
}

export function login(username, password) {
  return async (dispatch) => {
    const response = await Request.login('/ezdutch/login', {
      username,
      password,
    });
    if (!response.data.token) {
      // 登录失败
      Alert.alert('Login Failed', 'Please check if your username and password are correct.');
      dispatch({
        type: at.SET_IS_LOGGING,
        payload: false,
      });
      dispatch({
        type: at.SET_USER_LOGIN_STATUS,
        payload: false,
      });
    } else {
      // 登录成功
      const userWithToken = response.data;
      const userStr = JSON.stringify(userWithToken);
      await AsyncStorage.setItem('user', userStr);
      dispatch({
        type: at.SET_USER,
        payload: userWithToken,
      });
      dispatch({
        type: at.SET_IS_LOGGING,
        payload: false,
      });
      dispatch({
        type: at.SET_USER_LOGIN_STATUS,
        payload: true,
      });
    }
  };
}

export async function logout() {
  return async (dispatch) => {
    await AsyncStorage.removeItem('user');
    dispatch({
      type: at.SET_USER,
      payload: {},
    });
    dispatch({
      type: at.SET_USER_LOGIN_STATUS,
      payload: false,
    });
  };
}
