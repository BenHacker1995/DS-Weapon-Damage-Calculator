import { combineReducers } from 'redux';

const charList = ( state = [], action ) => {
    switch ( action.type ) {
        case 'NEW_CHAR' : state.push( action.payload );
        return state;
        case 'INITIALIZE_CHARS' : state = []; return state;
        case 'SET_CHARS' : return [ ...action.payload ];
        case 'UPDATE_CHAR': console.log( 'PAYLOAD', action.payload);
        state = state.filter( char => char.id !== action.payload.id );
        return [ ...action.payload ];
        case 'DELETE_CHAR' :
        state = state.filter( char => char.id !== action.payload.id );
        return [ ...action.payload ];
        default:
            return state;
    }
}

const char = ( state = [], action ) => {
    switch( action.type ) {
        case 'SELECT_CHAR' : state = []; state.push( action.payload ); return state;
    default:
        return state;
    }
}

const store = combineReducers({
    charList,
    char
});

export default store;