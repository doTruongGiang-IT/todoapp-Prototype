import * as types from '../Constsants/actionTypes';

let initialState = {
    id: '',
    name: '',
    status: false
};

let Reducer = (state = initialState, action) => {
    switch( action.type ) {
        case types.updateTask:
            return action.task;
        default:
            return state;
    }
};

export default Reducer;