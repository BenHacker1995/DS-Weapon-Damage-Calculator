import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// import createSagaMiddleware from 'redux-saga';


function* charSaga() {
    yield takeEvery( 'NEW_CHAR', newChar );
    yield takeEvery( 'FETCH_CHARS', charList );
    yield takeEvery( 'UPDATE_CHAR', updateChar );
}

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
        const charResponse = yield call( axios.get, `/char/${ action.payload }` );
        yield put({ type: 'SET_CHARS', payload: charResponse.data });
    }
    catch ( error ) {
        console.log( 'Error in charList', error );
    }
}

function* updateChar( action ) {
    console.log( 'PAYLOAD:', action.payload );
    let user = action.payload.username;
    let id = action.payload.id;
    try {
        const charResponse = yield call( axios.put, `/char/${ user }`, action.payload );
        yield put({ type: 'FETCH_CHARS' })
    }
    catch ( error ) {
        console.log( 'Error in updateChar', error );
    }
}


export default charSaga;