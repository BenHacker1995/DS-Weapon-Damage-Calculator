import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import charSaga from './charSaga';
import wepSaga from './wepSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    charSaga(),
    wepSaga()
    // watchIncrementAsync()
  ]);
}
