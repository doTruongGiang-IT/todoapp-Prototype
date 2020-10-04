import * as types from '../Constsants/actionTypes';

let initialState = false;

let Reducer = (state = initialState, action) => {
    switch( action.type ) {
        case types.toggleForm:
            return !state; 
        case types.closeForm:
            return false;
        case types.openForm:
            return true;
        default:
            return state;
    }
};

export default Reducer;