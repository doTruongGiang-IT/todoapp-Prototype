import React, { Component } from 'react';
import TaskForm from './Components/TaskForm';
import Search_Sort from './Components/Search&Sort';
import TasksList from './Components/TasksList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplay: false
    };
  }

  componentWillMount() {
    if( localStorage && localStorage.getItem("tasks") ) {
      let items = JSON.parse(localStorage.getItem("tasks"));
      this.setState( {
        tasks: items
      } );
    }
  };

  encode() {
    return Math.floor( (1+Math.random()) * 0x10000 ).toString(16).substring(1);
  };

  generateID() {
    return this.encode() + this.encode() + this.encode() + " - " + this.encode() + this.encode();
  };

  toggleForm = () => {
    this.setState({
      isDisplay: !this.state.isDisplay 
    });
  };

  onClose = () => {
    this.setState({
      isDisplay: false 
    });
  };

  submitForm = (data) => {
    data.id = this.generateID();
    var {tasks} = this.state;
    tasks.push(data);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  onSetStatus = (id) => {
    var {tasks} = this.state;
    let index = this.findIndex(id);
    if( index !== -1 ) {
      tasks[index].status =  !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  };

  onDelete = (id) => {
    var {tasks} = this.state;
    let index = this.findIndex(id);
    if( index !== -1 ) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  };

  findIndex = (id) => {
    var {tasks} = this.state;
    var result = -1;
    tasks.forEach( (task, index) => {
      if( task.id === id ) {
        result = index;
      }
    } );
    return result;
  };

  render() {
    let taskItems = this.state.tasks;
    let {isDisplay} = this.state;
    let showForm = isDisplay ? <TaskForm submit={this.submitForm} exit={this.onClose} /> : '';
    return (
      <div className="App">
        <div className="text-center">
          <h1>Tasks Management</h1>
        </div>
        <div className="row">
          <div className={isDisplay ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {showForm}
          </div>
          <div className={isDisplay ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button className="btn btn-outline-secondary mr-2" type="button" onClick={this.toggleForm}>Add more task</button>
              </div>
            </div>            
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Search_Sort />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TasksList tasks={taskItems} setStatus={this.onSetStatus} delete={this.onDelete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;