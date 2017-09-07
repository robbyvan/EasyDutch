import * as at from '../../constants/actionTypes';

const initialState = {
  joinMethod: 'search',
  canSwipe: false,
  groupName: '',
  groupID: '',
  isJoiningGroup: false,
};

const joinGroupReducer = (state=initialState, action) => {
  switch (action.type) {
    case at.SET_JOIN_METHOD:
      return { ...state, joinMethod: action.payload };
    case at.SET_CAN_SWIPE:
      return { ...state, canSwipe: action.payload };
    case at.SET_GROUP_NAME:
      return { ...state, groupName: action.payload };
    case at.SET_GROUP_ID:
      return { ...state, groupID: action.payload };
    case at.SET_IS_JOINING_GROUP:
      return { ...state, isJoiningGroup: action.payload };
    default:
      return state;
  }
};

export default joinGroupReducer;