import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
// import createSagaMiddleware from 'redux-saga';

function* newChar( action ) {
    try {
        const charResponse = yield call( axios.post, '/char', action.payload );
        yield put({ type: 'FETCH_CHARS' })
    }
    catch ( error ) {
        console.log( 'Error in newChar', error );
    }
}

function* charList( action ) {
    try {
        const charResponse = yield call( axios.get, '/char' );
    }
    catch ( error ) {
        console.log( 'Error in charList', error );
    }
}

function* charSaga() {
    yield takeEvery( 'NEW_CHAR', newChar );
    yield takeEvery( 'FETCH_CHARS', charList );
}

export default charSaga;