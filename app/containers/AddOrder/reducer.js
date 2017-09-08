import * as at from '../../constants/actionTypes';
import moment from 'moment';

const initialState = {
  selectedGroup: null,
  orderName: '',
  tempOrderName: '',
  price: -1,
  tempPrice: -1,
  orderDate: moment().toDate(),
  showDatePicker: false,
  sharedBy: [], // ['Robby', 'Jon Snow', 'Daenerys', 'Sansa', 'Bran'],
  isSubmittingOrder: false,
};

const addOrderReducer = (state=initialState, action) => {
  switch (action.type) {
    case at.SET_SELECTED_GROUP:
      return { ...state, selectedGroup: action.payload };
    case at.SET_TEMP_ORDER_NAME:
      return { ...state, tempOrderName: action.payload };
    case at.SET_ORDER_NAME:
      return { ...state, orderName: action.payload };
    case at.SET_TEMP_PRICE:
      return { ...state, tempPrice: action.payload };
    case at.SET_PRICE:
      return { ...state, price: action.payload };
    case at.SET_DATE_PICKER_VISIBLE:
      return { ...state, showDatePicker: action.payload };
    case at.SET_ORDER_DATE:
      return { ...state, orderDate: action.payload };
    case at.RESET_SHARED_BY:
      return { ...state, sharedBy: [action.payload] };
    case at.EDIT_SHARED_BY:
      return {
        ...state,
        sharedBy: (state.sharedBy.indexOf(action.payload) === -1)
          ? [...state.sharedBy, action.payload]
          : state.sharedBy.filter(item => item !== action.payload),
      }
    case at.SET_IS_SUBMITTING_ORDER:
      return { ...state, isSubmittingOrder: action.payload };
    case at.RESET_ADD_ORDER_FORM:
      return { ...initialState };
    default:
      return state;
  }
};

export default addOrderReducer;