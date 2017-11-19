import React,{ Component } from 'react';
import Sort from './Sort';

class CategoryTabs extends Component {
  render(){
    return (
        <div className="category-tabs">
          <div className="category">
            ALL
          </div>
          <div className="category">
            React
          </div>
          <div className="category">
            Redux
          </div>
          <div className="category">
            Udacity
          </div>
          <div className="category">
            <Sort />
          </div>
        </div>
    );
  }
}

export default CategoryTabs;
