import { AsyncStorage, Alert } from 'react-native';
import * as at from '../../constants/actionTypes';
import Request from '../../utils/Request';

export function fetchGroupExpense(chosenGroup) {
  return async dispatch => {
    dispatch({ type: at.SET_IS_FETCHING_GROUP_EXPENSE, payload: true });
    const response = await Request.get('/ezdutch/expenses', { groupID: chosenGroup }); 
    if (response && response.success) {
      dispatch({ type: at.SET_SHOPPING_RECORDS, payload: response.data.records });
    } else {
      Alert.alert('Whoops', response.msg);
      dispatch({ type: at.SET_SHOPPING_RECORDS, payload: [] });
    }
    dispatch({ type: at.SET_IS_FETCHING_GROUP_EXPENSE, payload: false });
  };
}