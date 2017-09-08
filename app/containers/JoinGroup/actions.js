import { AsyncStorage, Alert } from 'react-native';
import Request from '../../utils/Request';
import * as at from '../../constants/actionTypes';

export function setJoinMethod(method) {
  return {
    type: at.SET_JOIN_METHOD,
    payload: method,
  };
}

export function setCanSwipe(status) {
  return {
    type: at.SET_CAN_SWIPE,
    payload: status,
  };
}

export function setGroupName(name) {
  return {
    type: at.SET_GROUP_NAME,
    payload: name,
  };
}

export function setGroupID(ID) {
  return {
    type: at.SET_GROUP_ID,
    payload: ID,
  };
}

export function createGroup(groupName) {
  return async dispatch => {
    dispatch({ type: at.SET_IS_JOINING_GROUP, payload: true });
    try {
      const response = await Request.post('/ezdutch/create_group', { groupName });
      console.log(response);
      if (response && response.success) {
        // Success
        dispatch({ type: at.SET_MY_GROUPS, payload: response.data.myGroups });
        const backup = JSON.stringify(response.data.myGroups)
        console.log(backup);
        AsyncStorage.setItem('myGroups', backup);
        dispatch({ type: at.SET_GROUP_NAME, payload: '' });
        dispatch({ type: at.SET_GROUP_ID, payload: '' });
        Alert.alert('Success!');
      } else {
        // probably server got problem
        Alert.alert('Whoops', 'Seems something is wrong with server, try again later.');
      }
    } catch(e) {
      // got rejeted due to poor network
      Alert.alert(e);  
    }
    dispatch({ type: at.SET_IS_JOINING_GROUP, payload: false });
  };
}

export function searchGroup(groupID) {
  return async dispatch => {
    dispatch({ type: at.SET_IS_JOINING_GROUP, payload: true });
    try {
      const response = await Request.post('/ezdutch/search_group', { groupName });
      console.log(response);
      if (response && response.success) {
        // Success
        dispatch({ type: at.SET_MY_GROUPS, payload: response.data.myGroups });
        const backup = JSON.stringify(response.data.myGroups)
        console.log(backup);
        AsyncStorage.setItem('myGroups', backup);
        dispatch({ type: at.SET_GROUP_NAME, payload: '' });
        dispatch({ type: at.SET_GROUP_ID, payload: '' });
        Alert.alert('Success!');
      } else {
        // probably server got problem
        Alert.alert('Whoops', 'Seems something is wrong with server, try again later.');
      }
    } catch(e) {
      // got rejeted due to poor network
      Alert.alert(e);  
    }
    dispatch({ type: at.SET_IS_JOINING_GROUP, payload: false });
  };
}