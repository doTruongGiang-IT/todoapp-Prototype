// [Author] - Đỗ Trường Giang 
// [Desc] - Đây là Component index dùng để tổng hợp tất cả các reducer lại thành 1 và đưa lên store quản lý
import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplay from './isDisplay';
import taskEditing from './taskEditing';
import filterTask from './filterTask';
import searchTask from './searchTask';
import sortTask from './sortTask';

const Reducer = combineReducers({
    tasks,
    isDisplay,
    taskEditing,
    filterTask,
    searchTask,
    sortTask
});

export default Reducer;