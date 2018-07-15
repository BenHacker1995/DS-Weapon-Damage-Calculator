import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import char from './charReducer';
import wep from './wepReducer';

const store = combineReducers({
  user,
  login,
  char,
  wep
});

export default store;
