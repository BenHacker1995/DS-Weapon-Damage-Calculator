import { combineReducers } from 'redux';
import CalcModule from '../../components/modules/calc.module';

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

const wepList = ( state = [], action ) => {
    switch ( action.type ) {
        case 'INITIALIZE_WEP_LIST' : state = []; return state;
        case 'SET_WEP_LIST' : return action.payload;
        default:
        return state;
    }
}

const wepCats = ( state = [], action ) => {
    switch ( action.type ) {
        case 'INITIALIZE_WEP_CATS' : state = []; return state;
        case 'SET_WEP_CATS' : return [ ...action.payload ];
        default:
            return state;
    }
}

const wepsFromCats = ( state = [], action ) => {
    switch ( action.type ) {
        case 'GET_WEP_LISTS' : return action.payload;
        default:
            return state;
    }
}

const wepDetails = ( state = {}, action ) => {
    console.log( action.payload );
    switch ( action.type ) {        
        case 'SET_WEP_DETAIL' : const calc = new CalcModule( action.payload.details, action.payload.char  );
        console.log( calc.damages() )
        return calc.damages();

        default:
            return state;
    }
}

const store = combineReducers({
    charList,
    char,
    wepCats,
    wepList,
    wepsFromCats,
    wepDetails
});

export default store;