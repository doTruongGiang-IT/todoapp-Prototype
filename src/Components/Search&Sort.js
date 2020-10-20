// [Author] - Đỗ Trường Giang 
// [Desc] - Đây là Component SearchSort đùng để tìm kiếm và sắp xếp
import React, { Component } from 'react';
import * as actions from '../Actions/index';
import {connect} from 'react-redux';

class SearchSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  };

// [Author] - Đỗ Trường Giang 
// [FunctionName] - onSetKeywords 
// [Desc] - Đây là hàm dùng để đặt giá trị tìm kiếm cho khung search
// :param1: e - object
// :return: Trả về giá trị cần được tìm kiếm   
  onSetKeywords = (e) => {
    let value = e.target.value;
    this.setState({
      search: value
    });
  };

// [Author] - Đỗ Trường Giang 
// [FunctionName] - onSearch 
// [Desc] - Đây là hàm dùng để gửi giá trị cần được tìm kiếm lên reducer để xử lý
// :return: Trả về task sau khi tìm kiếm
  onSearch = () => {
    this.props.searchTask(this.state.search);
  };

// [Author] - Đỗ Trường Giang 
// [FunctionName] - onSort 
// [Desc] - Đây là hàm dùng để gửi giá trị cần được sort lên reducer để xử lý
// :param1: sortBy - string
// :param2: SortValue - number
// :return: Trả về list cac task sau khi sắp xếp
  onSort = (sortBy, sortValue) => {
    this.props.sortTask({
      by: sortBy,
      value: sortValue
    });
  };

  render() {
    let {search} = this.state;
    return (
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="input-group mb-3">
              <input type="text" className="form-control" value={search} onChange={this.onSetKeywords} />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={this.onSearch}>Search</button>
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                Sort
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#" onClick={() => this.onSort('name', 1)}>A-Z</a>
                <a className="dropdown-item" href="#" onClick={() => this.onSort('name', -1)}>Z-A</a>
                <a className="dropdown-item" href="#" onClick={() => this.onSort('status', 1)}>Active</a>
                <a className="dropdown-item" href="#" onClick={() => this.onSort('status', -1)}>Hide</a>
              </div>
            </div>
          </div>
        </div>  
    );
  }
}

// [Author] - Đỗ Trường Giang 
// [FunctionName] - stateToProps
// [Desc] - Đây là hàm dùng để chuyển state được lưu trữ trong store thành props
// :param1: state - array
// :return: Không có giá trị trả về  
const stateToProps = state => {
  return {};
};

// [Author] - Đỗ Trường Giang 
// [FunctionName] - dispatchToProps 
// [Desc] - Đây là hàm dùng để chuyển các hành động của người dùng thành props
// :param1: dispatch - function
// :param2: props
// :return: Trả về  cac props: searchTask, sortTask
const dispatchToProps = (dispatch, props) => {
  return {
    searchTask: (keyword) => {
      dispatch(actions.searchTask(keyword));
    },
    sortTask: (sort) => {
      dispatch(actions.sortTask(sort));
    }
  };
};

export default connect(stateToProps, dispatchToProps)(SearchSort);
