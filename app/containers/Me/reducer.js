import * as at from '../../constants/actionTypes';
import moment from 'moment';

const initialState = {
  myPurchases: [],
  isFetchingMyPurchases: false,
  isRefreshingMyPurchases: false,
};

const meReducer = (state=initialState, action) => {
  switch (action.type) {
    case at.SET_MY_PURCHASES:
      return { ...state, myPurchases: action.payload };
    case at.SET_IS_FETCHING_MY_PURCHASES:
      return { ...state, isFetchingMyPurchases: action.payload };
    case at.SET_IS_REFRESHING_MY_PURCHASES:
      return { ...state, isRefreshingMyPurchases: action.payload };
    default:
      return state;
  }
};

export default meReducer;