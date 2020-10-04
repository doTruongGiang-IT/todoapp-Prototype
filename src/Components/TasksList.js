import React, { Component } from 'react';
import TaskItems from './TaskItems';
import {connect} from 'react-redux';
import * as actions from '../Actions/index';

class TasksList extends Component {
    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let filter = {
            name: name === 'filterName' ? value :  '',
            status: name === 'filterStatus' ? value : 2
        };
        this.props.filterTask(filter);
    };

    render() {
        let {tasks, filter, search, sort} = this.props;

        if( filter ) {
          if( filter.name ) {
            tasks = tasks.filter( taskItem => {
              return taskItem.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
            } );
          }
          tasks = tasks.filter( taskItem => {
            if( filter.status === 2 ) {
              return taskItem;
            }else {
              return taskItem.status === (filter.status === 1 ? true : false);
            }
          } );
        };

        if( search ) {
          tasks = tasks.filter( taskItem => {
            return taskItem.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
          } );
        };

        if( sort ) {
          if( sort.by === 'name' ) {
            tasks.sort( (taskItem1, taskItem2) => {
              if( taskItem1.name > taskItem2.name ) return sort.value;
              else if( taskItem1.name < taskItem2.name ) return -sort.value;
              else return 0;
            } );
          }else {
            tasks.sort( (taskItem1, taskItem2) => {
              if( taskItem1.status > taskItem2.status ) return -sort.value;
              else if( taskItem1.status < taskItem2.status ) return sort.value;
              else return 0;
            } );
          };
        }

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
                            <input type="text" className="form-control" name="filterName" value={filter.name} onChange={this.onChange}></input>
                        </td>
                        <td>
                            <select className="form-control" name="filterStatus" value={filter.status} onChange={this.onChange}>
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

const statesToProps = (state) => {
    return {
        tasks: state.tasks,
        filter: state.filterTask,
        search: state.searchTask,
        sort: state.sortTask
    };
};

const dispatchToProps = (dispatch, props) => {
    return {
      filterTask: (filter) => {
        dispatch(actions.filterTask(filter));
      }
    };
  };

export default connect(statesToProps, dispatchToProps)(TasksList);