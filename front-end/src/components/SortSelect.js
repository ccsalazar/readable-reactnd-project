import React,{ Component } from 'react';
import {connect} from 'react-redux';
// import {fetchAllPosts} from '../actions/posts';
import {setFilterAndSort} from '../actions/index';

class SortSelect extends Component {
  state={
    filter:'mostPopular'
  }

  componentDidMount(){
    this.props.dispatch(setFilterAndSort(this.state.filter));
  }

  handleChange(e){
    const filter=e.target.value;
    this.setState({filter});
    this.props.dispatch(setFilterAndSort(filter));
  }


  render(){
    return(
      <div className="sort">
        <select
          className="sort-menu"
          name="sortValue"
          value={this.state.filter}
          onChange={this.handleChange.bind(this)}
          id="sort-control">
          <option value="mostPopular">Most Popular</option>
          <option value="latestPost">Latest Post </option>
          <option value="leastPopular">Least Popular</option>
        </select>
      </div>
    );
  }
}

export default connect()(SortSelect);
