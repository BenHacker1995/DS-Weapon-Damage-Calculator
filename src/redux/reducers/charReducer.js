import { combineReducers } from 'redux';

const charList = ( state1 = [], action ) => {
    switch ( action.type ) {
        case 'NEW_CHAR' : state1.push( action.payload );
        return state1;
        case 'INITIALIZE_CHARS' : state1 = []; return state1;
        case 'SET_CHARS' : return [ ...action.payload ];
        case 'UPDATE_CHAR': console.log( 'PAYLOAD', action.payload);
        state1 = state1.filter( char => char.id !== action.payload.id );
        return [ ...action.payload ];
        case 'DELETE_CHAR' :
        state1 = state1.filter( char => char.id !== action.payload.id );
        return [ ...action.payload ];
        default:
            return state1;
    }
}

const char = ( state2 = [], action ) => {
    switch( action.type ) {
        case 'SELECT_CHAR' : state2 = []; return state2;
        case 'SET_CHAR' : state2 = action.payload; return state2;
    default:
        return state2;
    }
}

const store = combineReducers({
    charList,
    char
});

export default store;