import * as at from '../../constants/actionTypes';

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case at.SET_ORDERS:
      return { ...state, orders: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
