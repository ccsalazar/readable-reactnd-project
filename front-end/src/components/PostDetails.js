import React, { Component } from 'react';
import Card from './Card';
import CommentCard from './CommentCard';
import { connect } from 'react-redux';
import {fetchPost} from '../actions/posts';
import {getCommentsByPostID} from '../actions/comments';
import AddComment from './AddComment';

class PostDetails extends Component {

  componentDidMount() {
    const postId = this.props.match.params.id;
    this.props.fetchPost(postId);
    this.props.getComments(postId);
  }

  render(){
    const {post,comments}=this.props;
    return(

      <div className="post-details">
        {
          post!== undefined &&
            <Card
            id={post.id}
          />
        }
        <AddComment id={this.props.match.params.id}/>
        {
          comments!== undefined &&
          comments.map((comment,index)=>
          <CommentCard key={index}
            id={comment.id}
            parentId={comment.parentId}
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
  const commentsArr = Object.values(comments);
  const filteredComments = commentsArr.filter(c=>c.parentId===postID);

  return {
    post:posts[postID],
    comments:filteredComments
  };
}
const mapDispatchToProps = dispatch => ({
  fetchPost:(id)=>dispatch(fetchPost(id)),
  getComments:(id)=>dispatch(getCommentsByPostID(id))
});


export default connect(mapStateToProps,mapDispatchToProps)(PostDetails);
