/*
[Author] - Đỗ Trường Giang 
[Desc] - Đây là Component TaskList đùng để chứa các task của ngươi dùng dưới dạng table
*/
import React, { Component } from 'react';
import TaskItems from './TaskItems';
import {connect} from 'react-redux';
import * as actions from '../Actions/index';

class TasksList extends Component {
/*
  [Author] - Đỗ Trường Giang 
  [FunctionName] - onChange 
  [Desc] - Đây là hàm dùng để đặt giá trị cần lọc
  :param1: e - object
  :return: Trả về giá trị cần được lọc
*/
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

/*
        [Author] - Đỗ Trường Giang 
        [FunctionName] - Không có nhưng dưới dạng arrow function 
        [Desc] - Đây là hàm dùng để lọc trực tiếp ngay trên bảng
        :param1: taskItem - object
        :return: Trả về bảng task mới   
*/     
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

/*
        [Author] - Đỗ Trường Giang 
        [FunctionName] - Không có nhưng dưới dạng arrow function
        [Desc] - Đây là hàm dùng để tìm kiếm task sau khi lọc thu hẹp phạm vi cần tìm kiếm
        :param1: taskItem - object
        :return: Trả về giá trị lọc được      
*/ 
        if( search ) {
          tasks = tasks.filter( taskItem => {
            return taskItem.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
          } );
        };

/*
        [Author] - Đỗ Trường Giang 
        [FunctionName] - Không có nhưng dưới dạng arrow function
        [Desc] - Đây là hàm dùng để sắp xếp task sau khi lọc
        :param1: taskItem - object
        :return: Trả về bảng task mới sau khi sắp xếp       
*/ 
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

/*
  [Author] - Đỗ Trường Giang 
  [FunctionName] - stateToProps
  [Desc] - Đây là hàm dùng để chuyển state được lưu trữ trong store thành props
  :param1: state - array
  :return: Trả về các props: task, filter, search, sort
*/
const statesToProps = (state) => {
    return {
        tasks: state.tasks,
        filter: state.filterTask,
        search: state.searchTask,
        sort: state.sortTask
    };
};

/*
  [Author] - Đỗ Trường Giang 
  [FunctionName] - dispatchToProps 
  [Desc] - Đây là hàm dùng để chuyển các hành động của người dùng thành props
  :param1: dispatch - function
  :param2: props
  :return: Trả về các props: filterTask
*/
const dispatchToProps = (dispatch, props) => {
    return {
      filterTask: (filter) => {
        dispatch(actions.filterTask(filter));
      }
    };
  };

export default connect(statesToProps, dispatchToProps)(TasksList);