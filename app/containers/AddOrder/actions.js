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