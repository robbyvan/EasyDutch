import * as at from '../../constants/actionTypes';

const initialState = {
  isLogging: false,
  username: '',
  password: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case at.SET_USERNAME:
      return { ...state, username: action.payload };
    case at.SET_PASSWORD:
      return { ...state, password: action.payload };
    case at.SET_IS_LOGGING:
      return { ...state, isLogging: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
