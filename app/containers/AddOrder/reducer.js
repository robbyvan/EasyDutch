import * as at from '../../constants/actionTypes';
import moment from 'moment';

const initialState = {
  selectedGroup: {
    groupID: "12346",
    lastUpdated: moment().toDate(),
    members: ["Robby", "Anqi", "Luyao"],
    name: "Braavos",
  },
  orderName: '',
  tempOrderName: '',
  orderDate: moment().toDate(),
  sharedWith: ['Anqi', 'Luyao'],
  price: 30,
};

const addOrderReducer = (state=initialState, action) => {
  switch (action.type) {
    case at.SET_SELECTED_GROUP:
      return { ...state, selectedGroup: action.payload };
    default:
      return state;
  }
};

export default addOrderReducer;