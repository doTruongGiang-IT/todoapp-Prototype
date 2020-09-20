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

  onGenerate = ()=> {
    let tasks = [
      {
        id: this.generateID(),
        name: "Learn Angular",
        status: true
      },
      {
        id: this.generateID(),
        name: "Go to school",
        status: false
      },
      {
        id: this.generateID(),
        name: "Dating",
        status: true
      },
    ];
    this.setState( {
      tasks: tasks
    } );
    localStorage.setItem("tasks", JSON.stringify(tasks));
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

  render() {
    let taskItems = this.state.tasks;
    let {isDisplay} = this.state;
    let showForm = isDisplay ? <TaskForm exit={this.onClose} /> : '';
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
                <button className="btn btn-outline-secondary" type="button" onClick={this.onGenerate}>Generate</button>
              </div>
            </div>            
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Search_Sort />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TasksList tasks={taskItems}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;