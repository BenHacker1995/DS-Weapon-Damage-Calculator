import { combineReducers } from 'redux';
import CalcModule from '../../components/modules/calc.module';

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
    wepCats,
    wepList,
    wepsFromCats,
    // wepDamages,
    wepDetails
});

export default store;