// [Author] - Đỗ Trường Giang 
// [Desc] - Đây là Component index đùng để khai báo các hành động của người dùng
import * as types from '../Constsants/actionTypes';

// [Author] - Đỗ Trường Giang 
// [FunctionName] - Viết dưới dạng arrow function 
// [Desc] - Đây là hàm dùng để khai báo hành động hiển thị list các task
// :return: Trả về loại của hành động là listTask
export const list = () => {
    return {
        type: types.listTask
    };
};

// [Author] - Đỗ Trường Giang 
// [FunctionName] - Viết dưới dạng arrow function
// [Desc] - Đây là hàm dùng để khai báo hành động lưu task mới bao gồm cả thêm và cập nhật
// :param1: task - object
// :return: Trả về  loại của hành động là saveTask và task cần được lưu 
export const saveTask = (task) => {
    return {
        type: types.saveTask,
        task
    }
};

// [Author] - Đỗ Trường Giang 
// [FunctionName] - Viết dưới dạng arrow function 
// [Desc] - Đây là hàm dùng để  khai báo hành động đóng và mở form
// :return: Trả về loại của hành động là toggleForm
export const toggleForm = () => {
    return {
        type: types.toggleForm
    };
};

// [Author] - Đỗ Trường Giang 
// [FunctionName] - Viết dưới dạng arrow function 
// [Desc] - Đây là hàm dùng để  khai báo hành động mở form
// :return: Trả về loại của hành động là openForm 
export const openForm = () => {
    return {
        type: types.openForm
    };
};

// [Author] - Đỗ Trường Giang 
// [FunctionName] - Viết dưới dạng arrow function 
// [Desc] - Đây là hàm dùng để  khai báo hành động đóng form
// :return: Trả về loại của hành động là closeForm 
export const closeForm = () => {
    return {
        type: types.closeForm
    };
};

// [Author] - Đỗ Trường Giang 
// [FunctionName] - Viết dưới dạng arrow function
// [Desc] - Đây là hàm dùng để khai báo hành động thay đổi status cho task
// :param1: id - string 
// :return: Trả về  loại của hành động là toggleStatus và id của task cần được thay đổi status 
export const toggleStatus = (id) => {
    return {
        type: types.toggleStatus,
        id
    };
};

// [Author] - Đỗ Trường Giang 
// [FunctionName] - Viết dưới dạng arrow function
// [Desc] - Đây là hàm dùng để khai báo hành động xóa task
// :param1: id - string
// :return: Trả về loại của hành động là deleteTask và id của task cần xóa
export const deleteTask = (id) => {
    return {
        type: types.deleteTask,
        id
    };
};

// [Author] - Đỗ Trường Giang 
// [FunctionName] - Viết dưới dạng arrow function
// [Desc] - Đây là hàm dùng để khai báo hành động cập nhật task
// :param1: task - object
// :return: Trả về loại của hành động là updateTask và id của task cần cập nhật
export const updateTask = (task) => {
    return {
        type: types.updateTask,
        task
    };
};

// [Author] - Đỗ Trường Giang 
// [FunctionName] - Viết dưới dạng arrow function
// [Desc] - Đây là hàm dùng để khai báo hành động lọc task
// :param1: filter - string(boolean)
// :return: Trả về loại của hành động là filterTask và kiểu lọc
export const filterTask = (filter) => {
    return {
        type: types.filterTask,
        filter
    }
};

// [Author] - Đỗ Trường Giang 
// [FunctionName] - Viết dưới dạng arrow function
// [Desc] - Đây là hàm dùng để khai báo hành động tìm kiếm task
// :param1: keyword - string
// :return: Trả về loại của hành động là searchTask và chuỗi cần tìm kiếm
export const searchTask = (keyword) => {
    return {
        type: types.searchTask,
        keyword
    };
};

// [Author] - Đỗ Trường Giang 
// [FunctionName] - Viết dưới dạng arrow function
// [Desc] - Đây là hàm dùng để khai báo hành động sắp xếp task
// :param1: sort - string(boolean)
// :return: Trả về loại của hành động là sortTask và điều kiện cần cho việc sắp xếp
export const sortTask = (sort) => {
    return {
        type: types.sortTask,
        sort
    };
};