import * as at from '../../constants/actionTypes';
import moment from 'moment';

const initialState = {
  chosenGroup: null,
  isFetchingGroupExpense: false,
  isRefreshingGroupExpense: false,
  rawRecords: [],
  bills: [],
};

const expenseReducer = (state=initialState, action) => {
  switch (action.type) {
    case at.SET_CHOSEN_GROUP:
      return { ...state, chosenGroup: action.payload };
    case at.SET_RAW_RECORDS:
      return { ...state, rawRecords: action.payload };
    case at.SET_IS_FETCHING_GROUP_EXPENSE:
      return { ...state, isFetchingGroups: action.payload };
    case at.SET_IS_REFRESHING_GROUP_EXPENSE:
      return { ...state, isRefreshingGroupExpense: action.payload };
    default:
      return state;
  }
};

export default expenseReducer;