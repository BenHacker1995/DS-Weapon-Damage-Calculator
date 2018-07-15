import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* charSaga() {
    yield takeEvery( 'NEW_CHAR', newChar );
    yield takeEvery( 'FETCH_CHARS', charList );
    yield takeEvery( 'UPDATE_CHAR', updateChar );
    yield takeEvery( 'DELETE_CHAR', deleteChar );
}

function* newChar( action ) {
    try {
        const charResponse = yield call( axios.post, '/api/char', action.payload );
        yield put({ type: 'FETCH_CHARS' })
    }
    catch ( error ) {
        console.log( 'Error in newChar', error );
    }
}

function* charList( action ) {
    try {
        const charResponse = yield call( axios.get, `/api/char/` );
        yield put({ type: 'SET_CHARS', payload: charResponse.data });
    }
    catch ( error ) {
        console.log( 'Error in charList', error );
    }
}

function* updateChar( action ) {
    let id = action.payload.id;
    try {
        const charResponse = yield call( axios.put, `/api/char/${ id }`, action.payload );
        yield put({ type: 'FETCH_CHARS' })
    }
    catch ( error ) {
        console.log( 'Error in updateChar', error );
    }
}

function* deleteChar( action ) {
    console.log( action.payload );
    let user = action.payload.username;
    let id = action.payload.id;
    try {
        const charResponse = yield call( axios.delete, `/api/char/${ id }` );
        yield put({ type: 'FETCH_CHARS' })
    }
    catch ( error ) {
        console.log( 'Error in deleteChar', error );
    }
}

export default charSaga;