import * as at from '../../constants/actionTypes';
import moment from 'moment';

const initialState = {
  chosenGroupID: '',
  chosenGroup: {},
  isFetchingChosenGroup: false,
  // isFetchingChosenGroup: false,
  myBill: {}, // After calculating
};

const chosenGroupReducer = (state=initialState, action) => {
  switch (action.type) {
    case at.SET_CHOSEN_GROUP_ID:
      return { ...state, chosenGroupID: action.payload };
    case at.SET_CHOSEN_GROUP:
      return { ...state, chosenGroup: action.payload };
    case at.SET_MY_BILL:
      return { ...state, myBill: action.payload };
    case at.SET_IS_FETCHING_CHOSEN_GROUP:
      return { ...state, isFetchingChosenGroup: action.payload };
    default:
      return state;
  }
};

export default chosenGroupReducer;