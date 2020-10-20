// [Author] - Đỗ Trường Giang 
// [Desc] - Đây là Component tasks dùng để xử lý các hành động liên quan đến task
import * as types from '../Constsants/actionTypes';
import {findIndex} from 'lodash';

// [Author] - Đỗ Trường Giang 
// [FunctionName] - Viết dưới dạng arrow function
// [Desc] - Đây là hàm dùng để tạo chuỗi mã hóa
// :return: Trả về chuỗi mã hóa
let encode = () => {
    return Math.floor( (1+Math.random()) * 0x10000 ).toString(16).substring(1);
};

// [Author] - Đỗ Trường Giang 
// [FunctionName] - Viết dưới dạng arrow function
// [Desc] - Đây là hàm dùng để đặt id cho task
// :return: Trả về id cho task 
let generateID = () => {
    return encode() + encode() + encode() + " - " + encode() + encode();
};

let dataTasks = JSON.parse(localStorage.getItem('tasks'));
let initialState = dataTasks ? dataTasks : [];

let Reducer = (state = initialState, action) => {
    switch( action.type ) {
        case types.listTask:
            return state;
        case types.saveTask:
            let newTask = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status
            }
            if( !newTask.id ) {
                newTask.id = generateID();
                state.push(newTask);
            }else {
                let indexUpdate = findIndex(state, (task) => {
                    return task.id === action.task.id;
                });
                state[indexUpdate] = newTask;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];    
        case types.toggleStatus:
            let index = findIndex(state, (task) => {
                return task.id === action.id;
            });
            if( index !== -1 ) {
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                }
                localStorage.setItem('tasks',JSON.stringify(state));
            }
            return [...state];
        case types.deleteTask:
            let indexDelete = findIndex(state, (task) => {
                return task.id === action.id;
            });
            if( indexDelete !== -1 ) {
                state.splice(indexDelete,1);
                localStorage.setItem('tasks',JSON.stringify(state));
            }
            return [...state];        
        default:
            return state;
    }
};

export default Reducer;