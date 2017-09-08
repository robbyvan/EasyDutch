import { combineReducers } from 'redux';
import appReducer from './containers/App/reducer';
import loginReducer from './containers/Login/reducer';
import myGroupsRecuder from './containers/Group/reducer';
import chosenGroupReducer from './containers/ChosenGroup/reducer';
import ordersReducer from './containers/Orders/reducer';
import addOrderReducer from './containers/AddOrder/reducer';
import joinGroupReducer from './containers/JoinGroup/reducer';
import meReducer from './containers/Me/reducer';

export default function createReducer() {
  return combineReducers({
    app: appReducer,
    login: loginReducer,
    me: meReducer,
    myGroups: myGroupsRecuder,
    chosenGroup: chosenGroupReducer,
    orders: ordersReducer,
    addOrder: addOrderReducer,
    joinGroup: joinGroupReducer,
  });
}
