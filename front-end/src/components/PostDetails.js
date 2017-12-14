import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router';
import Card from './Card';
import CommentCard from './CommentCard';
import { connect } from 'react-redux';
import {fetchPost} from '../actions/posts';
import {getCommentsByPostID} from '../actions/comments';
import AddComment from './AddComment';

class PostDetails extends Component {

  state ={
    pageNotFound:false
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    this.props.fetchPost(postId);
    this.props.getComments(postId);
  }

  componentWillReceiveProps(){
    if (!this.props.post){
      this.setState({pageNotFound:true});
    }
  }

  render(){
    const {post,comments}=this.props;
    const {pageNotFound}=this.state;
    return(
      <div className="post-details">
        {
          pageNotFound &&
          <Redirect to="/404" />
        }
        {
          post!==undefined &&
          <Card id={post.id}/>
        }
        {
          post!==undefined &&
          <AddComment id={post.id}/>
        }
        {
          comments!== undefined &&
          comments.map((comment,index)=>
          <CommentCard key={index}
            id={comment.id}
          />)
        }
      </div>
    );
  }
}
PostDetails.propTypes={
  post:PropTypes.object,
  comments:PropTypes.array.isRequired,
  fetchPost:PropTypes.func.isRequired,
  getComments:PropTypes.func.isRequired
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
