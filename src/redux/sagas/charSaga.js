import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// import createSagaMiddleware from 'redux-saga';


function* charSaga() {
    yield takeEvery( 'NEW_CHAR', newChar );
    yield takeEvery( 'FETCH_CHARS', charList );
    yield takeEvery( 'UPDATE_CHAR', updateChar );
    yield takeEvery( 'DELETE_CHAR', deleteChar );
    // yield takeEvery( 'INITIALIZE_CHARS', initializeChars );
}

function* newChar( action ) {
    try {
        const charResponse = yield call( axios.post, '/api/chars', action.payload );
        yield put({ type: 'FETCH_CHARS' })
    }
    catch ( error ) {
        console.log( 'Error in newChar', error );
    }
}

function* charList( action ) {
    try {
        const charResponse = yield call( axios.get, `/api/chars/` );
        yield put({ type: 'SET_CHARS', payload: charResponse.data });
    }
    catch ( error ) {
        console.log( 'Error in charList', error );
    }
}

// function* initializeChars( action ) {
//     try {
//         const charResponse = yield call( axios.get, null );
//         // yield put({ type: 'FETCH_CHARS' });
//     }
//     catch ( error ) {
//         console.log( 'Error in charList', error );
//     }
// }

function* updateChar( action ) {
    let id = action.payload.id;
    try {
        const charResponse = yield call( axios.put, `/api/chars/${ id }`, action.payload );
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
        const charResponse = yield call( axios.delete, `/api/chars/${ id }`, action.payload );
        yield put({ type: 'FETCH_CHARS' })
    }
    catch ( error ) {
        console.log( 'Error in deleteChar', error );
    }
}


export default charSaga;