import React, { Component } from 'react';
import TaskForm from './Components/TaskForm';
import SearchSort from './Components/Search&Sort';
import TasksList from './Components/TasksList';
import './App.css';
import {findIndex} from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplay: false,
      taskEditing: null,
      filter: {
        name: '',
        status: 2
      },
      search: '',
      sortBy: 'name',
      sortValue: 1
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
    if( this.state.isDisplay && this.state.taskEditing !== null ) {
      this.setState({
        isDisplay: true,
        taskEditing: null 
      });
    }else {
      this.setState({
        isDisplay: !this.state.isDisplay,
        taskEditing: null
      });
    }
  };

  onClose = () => {
    this.setState({
      isDisplay: false 
    });
  };

  onShow = () => {
    this.setState({
      isDisplay: true 
    });
  };

  submitForm = (data) => {
    var {tasks} = this.state;
    if( data.id === '' ) {
      data.id = this.generateID();
      tasks.push(data);
    }else {
      // var index = this.findIndex(data.id);
      let index = findIndex(tasks, (task) => {
        return task.id === data.id;
      });
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditing: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  onSetStatus = (id) => {
    var {tasks} = this.state;
    let index = findIndex(tasks, (task) => {
      return task.id === id;
    });
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
    let index = findIndex(tasks, (task) => {
      return task.id === id;
    });
    if( index !== -1 ) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  };

  onUpdate = (id) => {
    var {tasks} = this.state;
    let index = findIndex(tasks, (task) => {
      return task.id === id;
    });
    var taskEditing = tasks[index];
    // if( index !== -1 ) {
    this.setState({
      taskEditing: taskEditing
    });
    this.onShow();
    // }
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

  filterItem = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  };

  searchItem = (keywords) => {
    this.setState({
      search: keywords.toLowerCase()
    });
  };

  sortItem = (sortBy, sortValue) => {
    this.setState({
      sortBy,
      sortValue
    });
  };

  render() {
    let taskItems = this.state.tasks;
    let {isDisplay, taskEditing, filter, search, sortBy, sortValue} = this.state;
    if( filter ) {
      if( filter.name ) {
        taskItems = taskItems.filter( taskItem => {
          return taskItem.name.toLowerCase().indexOf(filter.name) !== -1;
        } );
      }
      taskItems = taskItems.filter( taskItem => {
        if( filter.status === 2 ) {
          return taskItem;
        }else {
          return taskItem.status === (filter.status === 1 ? true : false);
        }
      } );
    };
    if( search ) {
      taskItems = taskItems.filter( taskItem => {
        return taskItem.name.toLowerCase().indexOf(search) !== -1;
      } );
    };
    let showForm = isDisplay ? <TaskForm submit={this.submitForm} exit={this.onClose} edit={taskEditing} /> : '';
    if( sortBy === 'name' ) {
      taskItems.sort( (taskItem1, taskItem2) => {
        if( taskItem1.name > taskItem2.name ) return sortValue;
        else if( taskItem1.name < taskItem2.name ) return -sortValue;
        else return 0;
      } );
    }else {
      taskItems.sort( (taskItem1, taskItem2) => {
        if( taskItem1.status > taskItem2.status ) return -sortValue;
        else if( taskItem1.status < taskItem2.status ) return sortValue;
        else return 0;
      } );
    };

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
                <SearchSort search={this.searchItem} sort={this.sortItem} sortBy={sortBy} sortValue={sortValue} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TasksList tasks={taskItems} filter={this.filterItem} setStatus={this.onSetStatus} delete={this.onDelete} update={this.onUpdate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;