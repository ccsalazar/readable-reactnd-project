import React, { Component } from 'react';
import Card from './Card';
import CommentCard from './CommentCard';

class PostDetails extends Component {
  render(){
    return(
      <div className="post-details">
        <Card />
        <CommentCard />
      </div>
    );
  }
}

export default PostDetails;
