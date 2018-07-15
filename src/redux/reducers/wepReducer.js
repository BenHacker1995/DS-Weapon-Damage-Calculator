import { combineReducers } from 'redux';

const wepList = ( state = [], action ) => {
    switch ( action.type ) {
        case 'INITIALIZE_WEP_CATS' : state = []; return state;
        case 'SET_WEP_CATS' : return [ ...action.payload ];
        default:
            return state;
    }
}

const store = combineReducers({
    wepList
});

export default store;