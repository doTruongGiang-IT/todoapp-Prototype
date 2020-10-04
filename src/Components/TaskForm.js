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
            this.clearForm();
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

    setTask = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if( name === 'status' ) {
            value = e.target.value === 'true' ? true : false;
        }
        this.setState( {
            [name]: value
        } );
    };

    onExit = () => {
        this.props.closeForm();
    };

    submitForm = (e) => {
        e.preventDefault();
        this.props.saveTask(this.state);
        this.clearForm();
        this.onExit();
    };

    clearForm = () => {
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
                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" onChange={this.setTask} value={this.state.name} />
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select className="form-control" name="status" value={this.state.status} onChange={this.setTask}>
                            <option value={false}>Hide</option>                       
                            <option value={true}>Active</option>                       
                        </select>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mr-3">
                            Save
                        </button>
                        <button type="reset" className="btn btn-primary" onClick={this.clearForm}>
                            Abort
                        </button>
                   </div>
                </form>
            </div>
        </div>
    );
  }
}

const stateToProps = state => {
    return {
        isDisplay: state.isDisplay,
        taskEditing: state.taskEditing
    };
};

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
