import React, { Component } from 'react';

class TaskForm extends Component {
    onExit = () => {
        this.props.exit();
    };

  render() {
    return (
        <div className="card">
            <h3 className="card-header" onClick={this.onExit}>Insert Task</h3>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="Name" />
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select className="form-control" name="status">
                            <option value="hide">Hide</option>                       
                            <option value="active">Active</option>                       
                        </select>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mr-3">
                            Save
                        </button>
                        <button type="button" className="btn btn-primary">
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
