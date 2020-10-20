/*
[Author] - Đỗ Trường Giang 
[Desc] - Đây là Component TaskForm đùng để thao tác các hành động thêm task và cập nhật task
*/
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../Actions/index';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
    };

    componentWillMount() {
        if( this.props.taskEditing ) {
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status
            });
        }else {
            this.onClearForm();
        }
    };

    componentWillReceiveProps(nextProps) {
        if( nextProps && nextProps.taskEditing ) {
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status
            });
        }else if( !nextProps.taskEditing ) {
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    };

/*
    [Author] - Đỗ Trường Giang 
    [FunctionName] - onSetKTask 
    [Desc] - Đây là hàm dùng để đặt giá trị cần cập nhật
    :param1: e - object
    :return: Trả về giá trị cần được cập nhật   
*/  
    onSetTask = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if( name === 'status' ) {
            value = e.target.value === 'true' ? true : false;
        }
        this.setState( {
            [name]: value
        } );
    };

/*
    [Author] - Đỗ Trường Giang 
    [FunctionName] - onExit
    [Desc] - Đây là hàm dùng để đóng form
    :return: Không có giá trị trả về     
*/
    onExit = () => {
        this.props.closeForm();
    };

/*
    [Author] - Đỗ Trường Giang 
    [FunctionName] - onSubmitForm
    [Desc] - Đây là hàm dùng để thêm task mới
    :param1: e - object
    :return: Trả về list các task mới sau khi đã thêm task mới
*/
    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.saveTask(this.state);
        this.onClearForm();
        this.onExit();
    };

/*
    [Author] - Đỗ Trường Giang 
    [FunctionName] - onClearForm
    [Desc] - Đây là hàm dùng để clear form
    :return: Không có giá trị trả về 
*/
    onClearForm = () => {
        this.setState({
            name: '',
            status: false
        });
    };

  render() {
    if( !this.props.isDisplay ) return '';  
    return (
        <div className="card">
            <h3 className="card-header" onClick={this.onExit}>{!this.state.id ? 'Insert Task' : 'Edit Task'}</h3>
            <div className="card-body">
                <form onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" onChange={this.onSetTask} value={this.state.name} />
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select className="form-control" name="status" value={this.state.status} onChange={this.onSetTask}>
                            <option value={false}>Hide</option>                       
                            <option value={true}>Active</option>                       
                        </select>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mr-3">
                            Save
                        </button>
                        <button type="reset" className="btn btn-primary" onClick={this.onClearForm}>
                            Abort
                        </button>
                   </div>
                </form>
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
    :return: Trả về các props: saveTask, closeForm
*/
const dispatchToProps = (dispatch, props) => {
    return {
        saveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        closeForm: () => {
          dispatch(actions.closeForm());
        }
    };
};

export default connect(stateToProps, dispatchToProps)(TaskForm);
