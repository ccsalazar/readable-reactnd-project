import React, { Component } from 'react';
import CategoryTabs from './CategoryTabs';
import Sort from './Sort';
import Card from './Card';

class DefaultPost extends Component {
  render(){
    return(
      <section className="default-post">
        <div className="btn">
          Create New Post
        </div>
        <CategoryTabs />
        <Card />
      </section>
    );
  }

}

export default DefaultPost;
