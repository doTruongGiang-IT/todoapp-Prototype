import * as types from '../Constsants/actionTypes';

let initialState = '';

let Reducer = (state = initialState, action) => {
    switch( action.type ) {
        case types.searchTask:
            return action.keyword;
        default:
            return state;
    }
};

export default Reducer;