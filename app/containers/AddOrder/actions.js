import { Alert } from 'react-native';
import Request from '../../utils/Request';
import * as at from '../../constants/actionTypes';

export function setSelectedGroup(group) {
  return {
    type: at.SET_SELECTED_GROUP,
    payload: group,
  };
}

export function setTempOrderName(name) {
  return {
    type: at.SET_TEMP_ORDER_NAME,
    payload: name,
  };
}

export function setOrderName(name) {
  return {
    type: at.SET_ORDER_NAME,
    payload: name,
  };
}

export function setTempPrice(price) {
  return {
    type: at.SET_TEMP_PRICE,
    payload: price,
  };
}

export function setPrice(price) {
  return {
    type: at.SET_PRICE,
    payload: price,
  };
}

export function setDatePickerVisible(status) {
  return {
    type: at.SET_DATE_PICKER_VISIBLE,
    payload: status,
  };
}

export function setOrderDate(date) {
  return {
    type: at.SET_ORDER_DATE,
    payload: date,
  };
}

export function resetSharedBy(username) {
  return {
    type: at.RESET_SHARED_BY,
    payload: username,
  };
}

export function editSharedBy(member) {
  return {
    type: at.EDIT_SHARED_BY,
    payload: member,
  };
}

export function submitNewOrder(newOrder) {
  return async dispatch => {
    dispatch({ type: at.SET_IS_SUBMITTING_ORDER, payload: true });
    console.log(newOrder);
    try {
      const response = await Request.post('/ezdutch/edit_order', { newOrder });
      console.log('???', response);
      if (response && response.success) {
        // Success
        dispatch({ type: at.RESET_ADD_ORDER_FORM });
        Alert.alert('Success!');
      } else {
        // probably server got problem
        Alert.alert('Whoops', 'Seems something is wrong with server, try again later.');
      }
    } catch(e) {
      // got rejeted due to poor network
      Alert.alert(e);  
    }
    dispatch({ type: at.SET_IS_SUBMITTING_ORDER, payload: false });
  }
}
