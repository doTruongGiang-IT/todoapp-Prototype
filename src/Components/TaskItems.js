import React, { Component } from 'react';

class TaskItems extends Component {
    setStatus = () => {
        this.props.setStatus(this.props.task.id);
    };

    deleteItem = () => {
        this.props.delete(this.props.task.id);
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
                    <button type="submit" className="btn btn-primary mr-3">
                        Update
                    </button>
                    <button type="button" className="btn btn-primary" onClick={this.deleteItem}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItems;