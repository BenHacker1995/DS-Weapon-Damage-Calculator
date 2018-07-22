import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import wep from './wepReducer';

const store = combineReducers({
  user,
  login,
  wep
});

export default store;
