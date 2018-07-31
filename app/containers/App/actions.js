import { AsyncStorage, Alert } from 'react-native';
import * as at from '../../constants/actionTypes';
import Request from '../../utils/Request';

export function asyncAppStatus() {
  return async (dispatch) => {
    try {
        // Start syncing
      dispatch({ type: at.SET_APP_BOOTED, payload: false });
      // check if in local storage
      let user = await AsyncStorage.getItem('user');
      user = JSON.parse(user);
      // check if session expired
      if (user && user.token) {
        const checkExpiration = await Request.get('/ezdutch/expires', {token: 'sometoken'});
        if (!checkExpiration.success) {
          // expired
          AsyncStorage.removeItem('user');
          dispatch({ type: at.SET_USER_LOGIN_STATUS, payload: false });
          Alert.alert('Sorry', 'Your session has expired. Plese sign in again.');
        } else {
          // valid
          dispatch({ type: at.SET_USER, payload: user });
          dispatch({ type: at.SET_USER_LOGIN_STATUS, payload: true });
        }
      } else {
        // no data in local storage
        dispatch({ type: at.SET_USER_LOGIN_STATUS, payload: false });
      }
      // finish syncing
      dispatch({ type: at.SET_APP_BOOTED, payload: true });
    } catch(e) {
      Alert.alert(e);
    }
  }
}