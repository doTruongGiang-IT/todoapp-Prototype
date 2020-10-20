// [Author] - Đỗ Trường Giang 
// [Desc] - Đây là Component filterTask dùng để  xử lý các hành đông liên quan đến lọc task
import * as types from '../Constsants/actionTypes';

let initialState = {
    name: '',
    status: 2
};

let Reducer = (state = initialState, action) => {
    switch( action.type ) {
        case types.filterTask:
            action.filter.status = parseInt(action.filter.status, 10);
            return action.filter;
        default:
            return state;
    }
};

export default Reducer;