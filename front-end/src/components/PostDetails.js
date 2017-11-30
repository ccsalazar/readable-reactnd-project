import React, { Component } from 'react';
import Card from './Card';
import CommentCard from './CommentCard';
import { connect } from 'react-redux';
import {getCommentsByPostID} from '../actions/comments';

class PostDetails extends Component {

  componentDidMount() {
    const postID = this.props.match.params.id
    this.props.getComments(postID);
  }

  render(){
    const {post,comments}=this.props;
    return(

      <div className="post-details">
        {
          post!== undefined &&
            <Card
            id={post.id}
            timestamp={post.timestamp}
            title={post.title}
            body={post.body}
            author={post.author}
            category={post.category}
            voteScore={post.voteScore}
            commentCount={post.commentCount}
          />
        }
        {
          comments!== undefined &&
          comments.map((comment,index)=>
          <CommentCard key={index}
            id={comment.id}
            timestamp={comment.timestamp}
            body={comment.body}
            author={comment.author}
            voteScore={comment.voteScore}
          />)
        }
      </div>
    );
  }
}

const mapStateToProps = ({posts,comments},ownProps) => {
  const postID = ownProps.match.params.id;
  const postsArr = Object.values(posts);
  const post = postsArr.filter(p => p.id===postID);

  const commentsArr = Object.values(comments);
  const filteredComments = commentsArr.filter(c=>c.parentId===postID);
  return {
    post:post[0],
    comments:filteredComments
  };
}
const mapDispatchToProps = dispatch => ({
  getComments:(id)=>dispatch(getCommentsByPostID(id))
});


export default connect(mapStateToProps,mapDispatchToProps)(PostDetails);
