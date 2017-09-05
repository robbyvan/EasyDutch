import { combineReducers } from 'redux';
import appReducer from './containers/App/reducer';
import groupRecuder from './containers/Group/reducer';
import loginReducer from './containers/Login/reducer';

export default function createReducer() {
  return combineReducers({
    app: appReducer,
    group: groupRecuder,
    login: loginReducer,
  });
}
