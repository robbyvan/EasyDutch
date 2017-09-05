import { AsyncStorage, Alert } from 'react-native';
import * as at from '../../constants/actionTypes';
import Request from '../../utils/Request';

export function setDefaultGroups() {
  return async dispatch => {
    let storedGroups = await AsyncStorage.getItem('myGroups');
    storedGroups = JSON.parse(storedGroups);
    dispatch({ type: at.SET_MY_GROUPS, payload: storedGroups });
  };
}

export function fetchMyGroups() {
  return async dispatch => {
    dispatch({ type: at.SET_IS_FETCHING_MY_GROUPS, payload: true });
    try {
      const response = await Request.get('/ezdutch/groups');
      if (response && response.success) {
        dispatch({ type: at.SET_MY_GROUPS, payload: response.data.myGroups });
        const backup = JSON.stringify(response.data.myGroups)
        AsyncStorage.setItem('myGroups', backup);
      } else {
        // probably server got problem
        Alert.alert('Whoops', 'Seems something is wrong with server, try again later.');
      }
    } catch(e) {
      // got rejeted due to poor network
      Alert.alert(e);  
    }
    dispatch({ type: at.SET_IS_FETCHING_MY_GROUPS, payload: false });
  };
}

export function refreshMyGroups() {
  return async dispatch => {
    dispatch({ type: at.SET_IS_REFRESHING_MY_GROUPS, payload: true });
    dispatch({ type: at.SET_IS_FETCHING_MY_GROUPS, payload: true });
    try {
      const response = await Request.get('/ezdutch/groups');
      if (response && response.success) {
        dispatch({ type: at.SET_MY_GROUPS, payload: response.data.myGroups });
        const backup = JSON.stringify(response.data.myGroups)
        AsyncStorage.setItem('myGroups', backup);
      } else {
        // probably server got problem
        Alert.alert('Whoops', 'Seems something is wrong with server, try again later.');
      }
    } catch(e) {
      // got rejeted due to poor network
      Alert.alert(e);  
    }
    dispatch({ type: at.SET_IS_FETCHING_MY_GROUPS, payload: false });
    dispatch({ type: at.SET_IS_REFRESHING_MY_GROUPS, payload: false });
  };
}