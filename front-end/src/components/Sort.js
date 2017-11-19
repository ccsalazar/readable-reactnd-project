import React,{ Component } from 'react';

class Sort extends Component {
  render(){
    return(
      <div className="sort">
        <select className="sort-menu" defaultValue="mostPopular" name="sortValue" id="sort-control">
          <option value="mostPopular">Most Popular</option>
          <option value="latestPost">Latest Post </option>
          <option value="leastPopular">Least Popular</option>
        </select>
      </div>
    );
  }
}

export default Sort;
