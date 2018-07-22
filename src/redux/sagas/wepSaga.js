import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* wepSaga() {
    yield takeEvery( 'FETCH_WEP_CATS', getCats );
    yield takeEvery( 'FETCH_WEP_LIST', getWepNames );
    yield takeEvery( 'FETCH_WEP_DETAIL', getWepDetails );

    yield takeEvery( 'NEW_CHAR', newChar );
    yield takeEvery( 'FETCH_CHARS', charList );
    yield takeEvery( 'UPDATE_CHAR', updateChar );
    yield takeEvery( 'DELETE_CHAR', deleteChar );
    yield takeEvery( 'SELECT_CHAR', selectChar );
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
    let id = action.payload.id || action.payload;
    try {
        const charResponse = yield call( axios.put, `/api/char/${ id }`, action.payload );
        yield put({ type: 'FETCH_CHARS' });
        yield put({ type: 'SELECT_CHAR', payload: id })
    }
    catch ( error ) {
        console.log( 'Error in updateChar', error );
    }
}

function* deleteChar( action ) {
    let id = action.payload.id;
    try {
        const charResponse = yield call( axios.delete, `/api/char/${ id }` );
        yield put({ type: 'FETCH_CHARS' })
    }
    catch ( error ) {
        console.log( 'Error in deleteChar', error );
    }
}

function* selectChar( action ) {
    try {
        const charResponse = yield call( axios.get, `/api/char/${ action.payload }` );
        yield put({ type: 'SET_CHAR', payload: charResponse.data });
    }
    catch ( error ) {
        console.log( 'Error in charList', error );
    }
}

function* getCats( action ) {
    try {
        const wepResponse = yield call( axios.get, '/api/weps/cat');
        yield put({ type: 'SET_WEP_CATS', payload: wepResponse.data });
        yield put({ type: 'FETCH_WEP_LIST' })
    }
    catch ( error ) {
        console.log( 'Error in getWeps', error );
    }
}

function* getWepNames( action ) {
    try {
        const wepResponse = yield call( axios.get, `/api/weps/list`);
        yield put({ type: 'SET_WEP_LIST', payload: wepResponse.data });
        console.log( 'wepnames', wepResponse.data );
    }
    catch ( error ) {
        console.log( 'Error in getWeps', error );
    }
}

function* getWepDetails( action ) {

    try {
        const wepResponse = yield call( axios.get, `/api/weps/list/${ action.payload.id }`);
        console.log( wepResponse )
        if( wepResponse.data.length > 0 ) {
        yield put({ type: 'SET_WEP_DETAIL', payload: { details: wepResponse.data[0], char: action.payload.char[0] }});
        } else {
            console.log( 'weapon not found' )
        }
        
    }
    catch ( error ) {
        console.log( 'Error in getWeps', error );
    }
}   

export default wepSaga;