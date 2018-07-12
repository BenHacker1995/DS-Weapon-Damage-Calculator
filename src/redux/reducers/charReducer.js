import { combineReducers } from 'redux';

const charList = ( state = [], action ) => {
    switch ( action.type ) {
        case 'NEW_CHAR' : state.push( action.payload );
        return state;
        case 'SET_CHARS' : return [ ...state, ...action.payload ];
        case 'UPDATE_CHAR': Object.keys( action.payload ).forEach(function(id) {
            if (action.payload[id]) delete state[id];
          });
        // let info = state.filter( test => test = action.payload );
        console.log( action.payload );
        return [ ...state, ...action.payload ]
        default:
            return state;
    }
}

const store = combineReducers({
    // newChar,
    charList
});

export default store;