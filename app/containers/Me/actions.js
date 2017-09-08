import { AsyncStorage, Alert } from 'react-native';
import * as at from '../../constants/actionTypes';
import Request from '../../utils/Request';

export function fetchMyPurchases(user) {
  return async dispatch => {
    dispatch({ type: at.SET_IS_FETCHING_MY_PURCHASES, payload: true });
    try {
      const response = await Request.get('/ezdutch/orders', { token: user.token });
      if (response && response.success) {
        dispatch({ type: at.SET_MY_PURCHASES, payload: response.data.myPurchases });
        const backup = JSON.stringify(response.data.myPurchases)
        AsyncStorage.setItem('myPurchases', backup);
      } else {
        // probably server got problem
        Alert.alert('Whoops', 'Seems something is wrong with server, try again later.');
      }
    } catch(e) {
      // got rejeted due to poor network
      Alert.alert(e);  
    }
    dispatch({ type: at.SET_IS_FETCHING_MY_PURCHASES, payload: false });
  };
}

export function refreshMyPurchases(user) {
  return async dispatch => {
    dispatch({ type: at.SET_IS_REFRESHING_MY_PURCHASES, payload: true });
    dispatch({ type: at.SET_IS_FETCHING_MY_PURCHASES, payload: true });
    try {
      const response = await Request.get('/ezdutch/orders', { token: user.token });
      if (response && response.success) {
        dispatch({ type: at.SET_MY_PURCHASES, payload: response.data.myPurchases });
        const backup = JSON.stringify(response.data.myPurchases)
        AsyncStorage.setItem('myPurchases', backup);
      } else {
        // probably server got problem
        Alert.alert('Whoops', 'Seems something is wrong with server, try again later.');
      }
    } catch(e) {
      // got rejeted due to poor network
      Alert.alert(e);  
    }
    dispatch({ type: at.SET_IS_FETCHING_MY_PURCHASES, payload: false });
    dispatch({ type: at.SET_IS_REFRESHING_MY_PURCHASES, payload: false });
  };
}