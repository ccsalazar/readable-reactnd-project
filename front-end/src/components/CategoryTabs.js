import React,{ Component } from 'react';
import SortSelect from './SortSelect';
import {Link} from 'react-router-dom';

class CategoryTabs extends Component {
  render(){
    return (
        <div className="category-tabs">
          <div className="category">
            <Link to="/">
              All
            </Link>
          </div>
          <div className="category">
            <Link to="/react/posts">
              React
            </Link>
          </div>
          <div className="category">
            <Link to="/redux/posts">
              Redux
            </Link>
          </div>
          <div className="category">
            <Link to="/udacity/posts">
              Udacity
            </Link>
          </div>
          <div className="category">
            <SortSelect />
          </div>
        </div>
    );
  }
}

export default CategoryTabs;
