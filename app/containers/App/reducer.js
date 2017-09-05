import * as at from '../../constants/actionTypes';

const initialState = {
  user: {},
  userLoginStatus: false,
  booted: false,
};

const appReducer = (state=initialState, action) => {
  switch (action.type) {
    case at.SET_APP_BOOTED:
      return { ...state, booted: action.payload };
    default:
      return state;
  }
};

export default appReducer;