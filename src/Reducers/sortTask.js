import * as types from '../Constsants/actionTypes';

let initialState = {
    by: 'name',
    status: 1
};

let Reducer = (state = initialState, action) => {
    switch( action.type ) {
        case types.sortTask:
            return action.sort;
        default:
            return state;
    }
};

export default Reducer;