// [Author] - Đỗ Trường Giang 
// [Desc] - Đây là Component TaskItem đùng để hiển thị các task mà người dùng đã thêm vào
import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../Actions/index';

class TaskItems extends Component {

// [Author] - Đỗ Trường Giang 
// [FunctionName] - onSetStatus
// [Desc] - Đây là hàm dùng để cập nhật lại status mới cho task
// :return: Không có giá trị trả về  
    onSetStatus = () => {
        this.props.toggleStatus(this.props.task.id);
    };

// [Author] - Đỗ Trường Giang 
// [FunctionName] - onDeleteItem
// [Desc] - Đây là hàm dùng để xóa task
// :return: Không có giá trị trả về  
    onDeleteItem = () => {
        this.props.deleteTask(this.props.task.id);
        this.props.closeForm();
    };

// [Author] - Đỗ Trường Giang 
// [FunctionName] - onUpdateItem
// [Desc] - Đây là hàm dùng để cập nhật lại task 
// :return: Không có giá trị trả về      
    onUpdateItem = () => {
        this.props.openForm();
        this.props.updateTask(this.props.task);
    };

    render() {
        let {task, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center" onClick={this.onSetStatus}>
                    <span className="label label-danger"> {(task.status === true ? 'Active' : 'Hide')} </span>
                </td>
                <td className="text-center">
                    <button type="submit" className="btn btn-primary mr-3" onClick={this.onUpdateItem}>
                        Update
                    </button>
                    <button type="button" className="btn btn-primary" onClick={this.onDeleteItem}>
                        Finish
                    </button>
                </td>
            </tr>
        );
    }
}

// [Author] - Đỗ Trường Giang 
// [FunctionName] - stateToProps
// [Desc] - Đây là hàm dùng để chuyển state được lưu trữ trong store thành props
// :param1: state - array
// :return: Không có giá trị trả về  
const stateToProps = state => {
    return {};
};

// [Author] - Đỗ Trường Giang 
// [FunctionName] - dispatchToProps 
// [Desc] - Đây là hàm dùng để chuyển các hành động của người dùng thành props
// :param1: dispatch - function
// :param2: props
// :return: Trả về  các props: toggleStatus, deleteTask, closeForm, openForm, updateTask
const dispatchToProps = (dispatch, props) => {
    return {
        toggleStatus: (id) => {
            dispatch(actions.toggleStatus(id));
        },
        deleteTask: (id) => {
            dispatch(actions.deleteTask(id));
        },
        closeForm: () => {
          dispatch(actions.closeForm());
        },
        openForm: () => {
            dispatch(actions.openForm());
        },
        updateTask: (task) => {
            dispatch(actions.updateTask(task));
        }
    };
};

export default connect(stateToProps, dispatchToProps)(TaskItems);