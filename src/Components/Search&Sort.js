import React, { Component } from 'react';

class Search_Sort extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="input-group mb-3">
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                Sort
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">A-Z</a>
                <a className="dropdown-item" href="#">Z-A</a>
                <a className="dropdown-item" href="#">Active</a>
                <a className="dropdown-item" href="#">Hide</a>
              </div>
            </div>
          </div>
        </div>  
    );
  }
}

export default Search_Sort;
