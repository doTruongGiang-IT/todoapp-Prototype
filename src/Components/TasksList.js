import React, { Component } from 'react';
import TaskItems from './TaskItems';

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: 2
        };
    };
    
    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.props.filter(name === 'filterName' ? value : this.state.filterName, name === 'filterStatus' ? value : this.state.filterStatus);
        this.setState({
            [name]: value
        });
    };

    render() {
        let {tasks} = this.props;
        let {filterName, filterStatus} = this.state;
        let elmTask = tasks.map( (task, index) => {
            return <TaskItems key={task.id} index={index} task={task} setStatus={this.props.setStatus} delete={this.props.delete} update={this.props.update} />
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
                            <input type="text" className="form-control" name="filterName" value={filterName} onChange={this.onChange}></input>
                        </td>
                        <td>
                            <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onChange}>
                                <option value={2}>All</option>
                                <option value={1}>Active</option>
                                <option value={0}>Hide</option>
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