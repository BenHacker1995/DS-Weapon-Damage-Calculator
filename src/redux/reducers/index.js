import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import char from './charReducer';

const store = combineReducers({
  user,
  login,
  char
});

export default store;
