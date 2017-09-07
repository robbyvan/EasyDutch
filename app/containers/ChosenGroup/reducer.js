import * as at from '../../constants/actionTypes';
import moment from 'moment';

const mockchosenGroup = {
  groupID: '130000198905318650',
  name: 'Braavos',
  members: ['Robby', 'Anqi', 'Luyao'],
  expenses: [{
    whoPaid: 'Robby', 
    amount: 40,
    sharedWith: ['Robby', 'Anqi', 'Luyao'],
  },
  {
    whoPaid: 'Anqi', 
    amount: 28,
    sharedWith: ['Robby', 'Anqi'],
  },
  {
    whoPaid: 'Robby', 
    amount: 30,
    sharedWith: ['Robby', 'Luyao'],
  },
  {
    whoPaid: 'Luyao', 
    amount: 20,
    sharedWith: ['Robby', 'Luyao', 'Anqi'],
  }],
};

const initialState = {
  chosenGroupID: '',
  chosenGroup: {},
  isFetchingChosenGroup: false,
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