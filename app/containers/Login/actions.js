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

// export async function signin(username, password) {
//   return async (dispatch) => {
//     const response = await Request.signin('/auth/login', {
//       username,
//       password,
//     });
//     if (!response.token) {
//       // 登录失败
//       const msg = response.message.split('！').join(''); // 去掉默认提示消息结尾的感叹号
//       Alert.alert('登录失败', msg);
//       dispatch({
//         type: at.SET_IS_SIGNING_IN,
//         payload: false,
//       });
//       dispatch({
//         type: at.SET_USER_SIGNIN_STATUS,
//         payload: false,
//       });
//     } else {
//       // 登录成功
//       const userWithToken = {
//         ...response.data,
//         token: response.token,
//       };
//       const userStr = JSON.stringify(userWithToken);
//       await AsyncStorage.setItem('user', userStr);
//       dispatch({
//         type: at.SET_USER,
//         payload: userWithToken,
//       });
//       dispatch({
//         type: at.SET_IS_SIGNING_IN,
//         payload: false,
//       });
//       dispatch({
//         type: at.SET_USER_SIGNIN_STATUS,
//         payload: true,
//       });
//     }
//   };
// }

export async function signout() {
  return async (dispatch) => {
    await AsyncStorage.removeItem('myReport');
    await AsyncStorage.removeItem('staffList');
    await AsyncStorage.removeItem('localReport');
    await AsyncStorage.removeItem('user');
    dispatch({
      type: at.SET_USER,
      payload: {},
    });
    dispatch({
      type: at.SET_USER_SIGNIN_STATUS,
      payload: false,
    });
  };
}
