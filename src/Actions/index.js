import * as types from '../Constsants/actionTypes';

export const list = () => {
    return {
        type: types.listTask
    };
};

export const saveTask = (task) => {
    return {
        type: types.saveTask,
        task
    }
};

export const toggleForm = () => {
    return {
        type: types.toggleForm
    };
};

export const openForm = () => {
    return {
        type: types.openForm
    };
};

export const closeForm = () => {
    return {
        type: types.closeForm
    };
};

export const toggleStatus = (id) => {
    return {
        type: types.toggleStatus,
        id
    };
};

export const deleteTask = (id) => {
    return {
        type: types.deleteTask,
        id
    };
};

export const updateTask = (task) => {
    return {
        type: types.updateTask,
        task
    };
};

export const filterTask = (filter) => {
    return {
        type: types.filterTask,
        filter
    }
};

export const searchTask = (keyword) => {
    return {
        type: types.searchTask,
        keyword
    };
};

export const sortTask = (sort) => {
    return {
        type: types.sortTask,
        sort
    };
};