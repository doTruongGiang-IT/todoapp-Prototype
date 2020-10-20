/*
[Author] - Đỗ Trường Giang 
[Desc] - Đây là Component App hiển thi giao diện chính cho app
*/
import React, { Component } from 'react';
import TaskForm from './Components/TaskForm';
import SearchSort from './Components/Search&Sort';
import TasksList from './Components/TasksList';
import {connect} from 'react-redux';
import './App.css';
import * as actions from './Actions/index';

class App extends Component {
/*
  [Author] - Đỗ Trường Giang 
  [FunctionName] - onToggleForm
  [Desc] - Đây là hàm dùng để đóng và mở form
  :return: Không có giá trị trả vể  
*/
  onToggleForm = () => {
    let {taskEditing} = this.props;
    if( taskEditing && taskEditing.id !== '' ) {
      this.props.openForm();
    }else {
      this.props.toggleForm();
    };
    this.props.clearTask({
      id: '',
      name: '',
      status: false
    });
  };

  // onShow = () => {
  //   this.setState({
  //     isDisplay: true 
  //   });
  // };

  render() {
    let {isDisplay} = this.props;

    return (
      <div className="App">
        <div className="text-center">
          <h1>Tasks Management</h1>
        </div>
        <div className="row">
          <div className={isDisplay ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            <TaskForm />
          </div>
          <div className={isDisplay ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button className="btn btn-outline-secondary mr-2" type="button" onClick={this.onToggleForm}>Add more task</button>
              </div>
            </div>            
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <SearchSort />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TasksList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
  [Author] - Đỗ Trường Giang 
  [FunctionName] - stateToProps
  [Desc] - Đây là hàm dùng để chuyển state được lưu trữ trong store thành props
  :param1: state - array
  :return: Trả về các props: isDisplay, taskEditing
*/
const stateToProps = state => {
  return {
    isDisplay: state.isDisplay,
    taskEditing: state.taskEditing
  };
};

/*
  [Author] - Đỗ Trường Giang 
  [FunctionName] - dispatchToProps 
  [Desc] - Đây là hàm dùng để chuyển các hành động của người dùng thành props
  :param1: dispatch - function
  :param2: props
  :return: Trả về các props: toggleForm, clearTask, openForm
*/
const dispatchToProps = (dispatch, props) => {
  return {
    toggleForm: () => {
      dispatch(actions.toggleForm());
    },
    clearTask: (task) => {
        dispatch(actions.updateTask(task));
    },
    openForm: () => {
        dispatch(actions.openForm());
    }
  };
};

export default connect(stateToProps, dispatchToProps)(App);