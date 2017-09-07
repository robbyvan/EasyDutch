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