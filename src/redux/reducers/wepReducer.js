import { combineReducers } from 'redux';

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
        case 'SET_WEPS_FROM_CATS' : return action.payload;
        default:
            return state;
    }
}
const store = combineReducers({
    wepCats,
    wepList,
    wepsFromCats
});

export default store;