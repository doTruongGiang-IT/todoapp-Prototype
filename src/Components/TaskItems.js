import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../Actions/index';

class TaskItems extends Component {
    setStatus = () => {
        this.props.toggleStatus(this.props.task.id);
    };

    deleteItem = () => {
        this.props.deleteTask(this.props.task.id);
        this.props.closeForm();
    };

    updateItem = () => {
        this.props.openForm();
        this.props.updateTask(this.props.task);
    };

    render() {
        let {task, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center" onClick={this.setStatus}>
                    <span className="label label-danger"> {(task.status === true ? 'Active' : 'Hide')} </span>
                </td>
                <td className="text-center">
                    <button type="submit" className="btn btn-primary mr-3" onClick={this.updateItem}>
                        Update
                    </button>
                    <button type="button" className="btn btn-primary" onClick={this.deleteItem}>
                        Finish
                    </button>
                </td>
            </tr>
        );
    }
}

const stateToProps = state => {
    return {};
};

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