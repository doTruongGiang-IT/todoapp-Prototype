import React, { Component } from 'react';

class SearchSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  setKeywords = (e) => {
    let value = e.target.value;
    this.setState({
      search: value
    });
  };

  search = () => {
    this.props.search(this.state.search);
  };

  sort = (sortBy, sortValue) => {
    this.props.sort(sortBy, sortValue);
  };

  render() {
    let {search} = this.state;
    return (
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="input-group mb-3">
              <input type="text" className="form-control" value={search} onChange={this.setKeywords} />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={this.search}>Search</button>
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                Sort
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#" onClick={() => this.sort('name', 1)}>A-Z</a>
                <a className="dropdown-item" href="#" onClick={() => this.sort('name', -1)}>Z-A</a>
                <a className="dropdown-item" href="#" onClick={() => this.sort('status', 1)}>Active</a>
                <a className="dropdown-item" href="#" onClick={() => this.sort('status', -1)}>Hide</a>
              </div>
            </div>
          </div>
        </div>  
    );
  }
}

export default SearchSort;
