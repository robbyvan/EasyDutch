import { AsyncStorage } from 'react-native';
import moment from 'moment';
import * as at from '../../constants/actionTypes';

// const mockGroups = [{
//   groupID: 'odasdfina21ha',
//   name: 'Braavos',
//   createdAt: moment().toDate(),
//   lastUpdated: moment().toDate(),
//   members: ['Robby', 'Anqi', 'Luyao'],
// }, {
//   groupID: 'asadfanfadisd',
//   name: 'The North',
//   createdAt: moment().toDate(),
//   lastUpdated: moment().toDate(),
//   members: ['Robby', 'Anqi', 'Luyao'],
// }, {
//   groupID: 'vsnofdnveorie',
//   name: 'Kingslanding',
//   createdAt: moment().toDate(),
//   lastUpdated: moment().toDate(),
//   members: ['Robby', 'Anqi', 'Luyao'],
// }
// ];

const initialState = {
  myGroups: [],
  isFetchingMyGroups: false,
  isRefreshingMyGroups: false,
};

const groupReducer = (state=initialState, action) => {
  switch (action.type) {
    case at.SET_MY_GROUPS:
      return { ...state, myGroups: action.payload };
    case at.SET_IS_FETCHING_MY_GROUPS:
      return { ...state, isFetchingMyGroups: action.payload };
    case at.SET_IS_REFRESHING_MY_GROUPS:
      return { ...state, isRefreshingMyGroups: action.payload };
    default:
      return state;
  }
};

export default groupReducer;

