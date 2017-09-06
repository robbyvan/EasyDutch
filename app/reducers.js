import { combineReducers } from 'redux';
import appReducer from './containers/App/reducer';
import myGroupsRecuder from './containers/Group/reducer';
import chosenGroupReducer from './containers/ChosenGroup/reducer';
import loginReducer from './containers/Login/reducer';

export default function createReducer() {
  return combineReducers({
    app: appReducer,
    myGroups: myGroupsRecuder,
    chosenGroup: chosenGroupReducer,
    login: loginReducer,
  });
}
