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