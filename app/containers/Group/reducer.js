import * as at from '../../constants/actionTypes';

const initialState = {
  groups: []
};

const groupReducer = (state=initialState, action) => {
  switch (action.type) {
    case at.SET_GROUPS:
      return { ...state, groups: action.payload };
    default:
      return state;
  }
};

export default groupReducer;