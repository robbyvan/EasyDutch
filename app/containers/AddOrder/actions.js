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