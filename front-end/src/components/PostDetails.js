import React, { Component } from 'react';
import Card from './Card';
import CommentCard from './CommentCard';

class PostDetails extends Component {
state ={
  posts:[],
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
      const url2 = `http://localhost:3001/posts/8xf0y6ziyjabvozdd253nd`;
      console.log('fetching from url', url2);
      fetch(url2, { headers: { 'Authorization': 'whatever-you-want' } })
        .then( (res) => { return(res.json()) })
        .then((data) => {
          this.setState({posts:data});
        });
  }
  render(){
    return(
      <div className="post-details">
          <Card
            id={this.state.posts.id}
            timestamp={this.state.posts.timestamp}
            title={this.state.posts.title}
            body={this.state.posts.body}
            author={this.state.posts.author}
            category={this.state.posts.category}
            voteScore={this.state.posts.voteScore}
            commentCount={this.state.posts.commentCount}
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
