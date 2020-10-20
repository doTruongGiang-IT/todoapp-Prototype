// [Author] - Đỗ Trường Giang 
// [Desc] - Đây là Component isDisplay dùng để xử lý các hành động liên quan đến đóng và mở form
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