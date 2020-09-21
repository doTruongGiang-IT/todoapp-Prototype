import React, { Component } from 'react';

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
        if( this.props.edit ) {
            this.setState({
                id: this.props.edit.id,
                name: this.props.edit.name,
                status: this.props.edit.status
            });
        }
    };

    componentWillReceiveProps(nextProps) {
        if( nextProps && nextProps.edit ) {
            this.setState({
                id: nextProps.edit.id,
                name: nextProps.edit.name,
                status: nextProps.edit.status
            });
        }else if( !nextProps.edit ) {
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
        this.props.exit();
    };

    submitForm = (e) => {
        e.preventDefault();
        this.props.submit(this.state);
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
    return (
        <div className="card">
            <h3 className="card-header" onClick={this.onExit}>{this.props.edit !== null ? 'Edit Task' : 'Insert Task'}</h3>
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

export default TaskForm;
