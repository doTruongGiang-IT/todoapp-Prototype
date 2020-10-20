/*
[Author] - Đỗ Trường Giang 
[Desc] - Đây là Component sortTask dùng để xử lý các hành động liên quan đến sắp xếp task
*/
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