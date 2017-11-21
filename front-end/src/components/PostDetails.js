import React, { Component } from 'react';
import Card from './Card';
import CommentCard from './CommentCard';

class PostDetails extends Component {
state ={
  comments:[]
}
  componentDidMount() {
    const url = `http://localhost:3001/posts/8xf0y6ziyjabvozdd253nd/comments`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' } })
      .then( (res) => { return(res.json()) })
      .then((data) => {
        this.setState({comments:data});
      });
  }
  render(){
    return(
      <div className="post-details">
        <Card />
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
