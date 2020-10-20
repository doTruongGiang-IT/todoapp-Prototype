// [Author] - Đỗ Trường Giang 
// [Desc] - Đây là Component taskEditing dùng để xử lý các hành động liên quan đến cập nhât task
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