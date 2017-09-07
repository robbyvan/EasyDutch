import * as at from '../../constants/actionTypes';
import moment from 'moment';

const initialState = {
  selectedGroup: 'The North',
  orderName: 'detergent',
  orderDate: moment().toDate(),
  sharedWith: ['Anqi', 'Luyao'],
  price: 30,
};

const addOrderReducer = (state=initialState, action) => {
  switch (action.type) {
    case at.SET_ORDER:
      return { ...state, order: action.payload };
    default:
      return state;
  }
};

export default addOrderReducer;