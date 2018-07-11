import { combineReducers } from 'redux';

const newChar = ( state = [], action ) => {
    switch ( action.type ) {
        case 'NEW_CHAR' : state.push( action.payload );
        return state;
        default:
            return state;
    }
}

const charList = ( state = [], action ) => {
    switch ( action.type ) {
        case 'SET_CHARS' : return [ ...action.payload ];
        default:
            return state;
    }
}

const store = combineReducers({
    newChar,
    charList
});

export default store;