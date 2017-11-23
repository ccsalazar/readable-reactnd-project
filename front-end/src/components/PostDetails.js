import React, { Component } from 'react';
import Card from './Card';
import CommentCard from './CommentCard';
import { connect } from 'react-redux';
import {getCommentsByPostID} from '../actions';

class PostDetails extends Component {

  componentDidMount() {
    const postID = this.props.match.params.id
    this.props.getComments(postID);
  }
  render(){
    return(
      <div className="post-details">
          {/* <Card
            id={posts.id}
            timestamp={posts.timestamp}
            title={posts.title}
            body={posts.body}
            author={posts.author}
            category={posts.category}
            voteScore={posts.voteScore}
            commentCount={posts.commentCount}
          /> */}
        {
          this.props.comments.map((comment,index)=>
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

const mapStateToProps = ({posts,comments}) => {
  return {
    posts,
    comments
  };
}
const mapDispatchToProps = dispatch => ({
  getComments:(id)=>dispatch(getCommentsByPostID(id))
});


export default connect(mapStateToProps,mapDispatchToProps)(PostDetails);
