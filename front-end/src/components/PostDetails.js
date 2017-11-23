import React, { Component } from 'react';
import Card from './Card';
import CommentCard from './CommentCard';

class PostDetails extends Component {

  componentDidMount() {

  }
  render(){
    // console.log('post id:',this.props.match.params.id);
    const {posts} = this.state;
    return(
      <div className="post-details">
          <Card
            id={posts.id}
            timestamp={posts.timestamp}
            title={posts.title}
            body={posts.body}
            author={posts.author}
            category={posts.category}
            voteScore={posts.voteScore}
            commentCount={posts.commentCount}
          />
        {
          this.state.comments.map((comment,index)=>
          <CommentCard key={index}
            timestamp={comment.timestamp}
            body={comment.body}
            author={comment.author}
            voteScore={comment.voteScore}
          />
        )}
      </div>
    );
  }
}


export default PostDetails;
