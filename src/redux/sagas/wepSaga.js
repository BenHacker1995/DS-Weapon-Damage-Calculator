import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* wepSaga() {
    yield takeEvery( 'FETCH_WEP_CATS', getCats );
    // yield takeEvery( 'FETCH_WEPS_FROM_CATS', getWepsFromCat );
    yield takeEvery( 'FETCH_WEP_LIST', getWepNames );
    yield takeEvery( 'FETCH_WEP_DETAIL', getWepDetails );
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

// function* getWepsFromCat( action ) {
//     try {
//         const wepResponse = yield call( axios.get, `/api/weps/cat/${ action.payload }`);
//         yield put({ type: 'SET_WEPS_FROM_CATS', payload: wepResponse.data });
//         console.log( 'wepnamesbycat', wepResponse.data )
//     }
//     catch ( error ) {
//         console.log( 'Error in getWeps', error );
//     }
// }

function* getWepNames( action ) {
    try {
        const wepResponse = yield call( axios.get, `/api/weps/list`);
        yield put({ type: 'SET_WEP_LIST', payload: wepResponse.data });
        // yield put({ type: 'GET_WEP_LISTS' });
        console.log( 'wepnames', wepResponse.data );
    }
    catch ( error ) {
        console.log( 'Error in getWeps', error );
    }
}

function* getWepDetails( action ) {
    try {
        const wepResponse = yield call( axios.get, `/api/weps/list/${ action.payload }`);
        // yield put({ type: 'FETCH_WEP_DETAIL', payload: wepResponse.data })
    }
    catch ( error ) {
        console.log( 'Error in getWeps', error );
    }
}

export default wepSaga;