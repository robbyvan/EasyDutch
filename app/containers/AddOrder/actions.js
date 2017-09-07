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