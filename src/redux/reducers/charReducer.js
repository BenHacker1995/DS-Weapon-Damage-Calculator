import { combineReducers } from 'redux';

const char = ( state = [], action ) => {
    switch ( action.type ) {
        case 'NEW_CHAR' : return [ ...state, ...action.payload];
        case 'FETCH_CHARS' : return state;
        default:
            return state;
    }
}

const store = combineReducers({
    char
});

export default store;