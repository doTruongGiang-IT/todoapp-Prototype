import React, { Component } from 'react';
import TaskItems from './TaskItems';

class TasksList extends Component {
  render() {
    let {tasks} = this.props;
    let elmTask = tasks.map( (task, index) => {
        return <TaskItems key={task.id} index={index} task={task} />
    } );
    return (  
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" className="form-control" name="filterName"></input>
                    </td>
                    <td>
                        <select className="form-control" name="filterStatus">
                            <option value="all">All</option>
                            <option value="active">Active</option>
                            <option value="hide">Hide</option>
                        </select>
                    </td>
                </tr>
                {elmTask}
            </tbody>
        </table>  
    );
  }
}

export default TasksList;