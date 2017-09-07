import * as at from '../../constants/actionTypes';

const initialState = {
  joinMethod: 'search',
  canSwipe: false,
};

const joinGroupReducer = (state=initialState, action) => {
  switch (action.type) {
    case at.SET_JOIN_METHOD:
      return { ...state, joinMethod: action.payload };
    case at.SET_CAN_SWIPE:
      return { ...state, canSwipe: action.payload };
    default:
      return state;
  }
};

export default joinGroupReducer;