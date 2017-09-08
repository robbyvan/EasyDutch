import { AsyncStorage, Alert } from 'react-native';
import * as at from '../../constants/actionTypes';
import Request from '../../utils/Request';
import { calculateBill } from '../../utils/Helper';

export async function setDefaultChosenGroup(chosenGroupID, user) {
  return async dispatch => {
    dispatch({ type: at.SET_CHOSEN_GROUP_ID, payload: chosenGroupID });
    let storedGroups = await AsyncStorage.getItem('storedGroups');
    storedGroups = JSON.parse(storedGroups);
    console.log(storedGroups, user);
    dispatch({ type: at.SET_CHOSEN_GROUP, payload: storedGroups[chosenGroupID] || {} });
    if (storedGroups && storedGroups[chosenGroupID] && storedGroups[chosenGroupID].expenses.length > 0) {
      const myBill = calculateBill(storedGroups[chosenGroupID].expenses, user);
      dispatch({ type: at.SET_MY_BILL, payload: myBill });
    } else {
      dispatch({ type: at.SET_MY_BILL, payload: {} });
    }
  };
}

export function fetchChosenGroup(chosenGroupID, user) {
  return async dispatch => {
    dispatch({ type: at.SET_CHOSEN_GROUP_ID, payload: chosenGroupID });
    dispatch({ type: at.SET_IS_FETCHING_CHOSEN_GROUP, payload: true });
    try {
      const response = await Request.get('/ezdutch/group_detail', { groupID: chosenGroupID });
      console.log(response);
      if (response && response.success) {
        dispatch({ type: at.SET_CHOSEN_GROUP, payload: response.data });

        if (response.data.expenses.length > 0) {
          const myBill = calculateBill(response.data.expenses, user);
          dispatch({ type: at.SET_MY_BILL, payload: myBill });
        } 
        else {
          dispatch({ type: at.SET_MY_BILL, payload: {} });
        }

        let storedGroups = await AsyncStorage.getItem('storedGroups');
        storedGroups = JSON.parse(storedGroups);
        if (!storedGroups) {
          storedGroups = {};
        }
        storedGroups[response.data.groupID] = response.data;
        const backup = JSON.stringify(storedGroups);
        AsyncStorage.setItem('storedGroups', backup);
      } else {
        // probably server got problem
        Alert.alert('Whoops', 'Seems something is wrong with server, try again later.');
      }
    } catch(e) {
      // got rejeted due to poor network
      Alert.alert(e);  
    }
    dispatch({ type: at.SET_IS_FETCHING_CHOSEN_GROUP, payload: false });
  };
}