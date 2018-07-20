import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import CalcModule from '../../components/modules/calc.module';

function* wepSaga() {
    yield takeEvery( 'FETCH_WEP_CATS', getCats );
    yield takeEvery( 'FETCH_WEP_LIST', getWepNames );
    yield takeEvery( 'FETCH_WEP_DETAIL', getWepDetails );
    // yield takeEvery( 'FETCH_DAMAGES', getWepDamage );
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
        // yield put({ type: 'GET_WEP_LISTS' });
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
        // yield put({ type: 'SET_DAMAGES', payload: CalcModule });
        } else {
            console.log( 'weapon not found' )
        }
        
    }
    catch ( error ) {
        console.log( 'Error in getWeps', error );
    }
}

function* getWepDamage( action ) {
    try {
    }
    catch ( error ) {
        console.log( 'Error in getWepDamage', error )
    }
}
    

export default wepSaga;