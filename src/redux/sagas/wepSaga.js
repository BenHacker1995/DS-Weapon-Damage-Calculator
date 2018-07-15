import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* wepSaga() {
    yield takeEvery( 'FETCH_WEP_CATS', getCats );
}

function* getCats( action ) {
    try {
        const wepResponse = yield call( axios.get, '/api/weps');
        yield put({ type: 'SET_WEP_CATS', payload: wepResponse.data })
    }
    catch ( error ) {
        console.log( 'Error in getWeps', error );
    }
}

function* getWeps( action ) {
    try {
        const wepResponse = yield call( axios.get, `/api/weps/${ action.payload }`);
        yield put({ type: 'FETCH_', payload: wepResponse.data })
    }
    catch ( error ) {
        console.log( 'Error in getWeps', error );
    }
}

export default wepSaga;