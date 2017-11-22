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
    console.log('post id:',this.props.match.params.id);
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
