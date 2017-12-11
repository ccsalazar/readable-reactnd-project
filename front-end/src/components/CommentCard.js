import React,{Component} from 'react';
import {MdAccountCircle,MdDelete,MdEdit} from 'react-icons/lib/md';
import {editComment} from '../actions/comments';
import {connect} from 'react-redux';
import {deleteComment} from '../actions/comments';
import {fetchPost} from '../actions/posts';
import VoteScore from './VoteScore';

class CommentCard extends Component {

  state = {
    comment:{
      body:'',
      id:''
    },
    editButton:false
  }

  componentDidMount(){
    this.setState({
      comment:{
        body:this.props.comment.body,
        id:this.props.comment.id
      }
    });
  }

  handleEditButton(e){
    e.preventDefault();
    this.setState({editButton:true});
  }

  handleEditBody(e){
    e.preventDefault();
    this.setState({
      comment:{
        ...this.state.comment,
        body:e.target.value
      }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.editComment(this.state.comment)
    this.setState({editButton:false});
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteComment(this.props.id);
  }

  render(){
    console.log('comment',this.props);
    const {editButton,comment}=this.state
    const{timestamp,author,id,body,voteScore}=this.props.comment;

    let timeStamp = new Date(timestamp);
    let dateString = timeStamp.toDateString();
    let hours = timeStamp.getHours();
    let minutes =timeStamp.getMinutes();
    let meridiem = hours<12?'AM':'PM';
    hours = hours===0?hours+=12:hours;
    hours = hours>12?hours-=12:hours;
    minutes = ('0'+minutes).slice(-2);

    let postBody=null;
    if (editButton){
      postBody = <div className="post-card__body">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            name="body"
            value={comment.body}
            onChange={this.handleEditBody.bind(this)}
            type="text"/>
        </form>
      </div>;
    } else {
      postBody = <div className="post-card__body">{body}</div>;
    }

    return(
      <div className="post-card">
        <div className="post-card__details">
          <div className="post-card__user">
            <MdAccountCircle className="MdAccountCircle"/>
            <div className="post-card__user-log">
              <div className="post-card__author">
                {author}
              </div>
              <div className="post-card__timestamp">
                <span>{hours}:{minutes} {meridiem} on {dateString}</span>
              </div>
            </div>
          </div>
          <div className="post-card__controls">
            <MdDelete
              onClick={this.handleDelete.bind(this)}
              className="MdDelete"/>
          </div>
          <div
            onClick={this.handleEditButton.bind(this)}
            className="post-card__controls">
              <MdEdit className="MdEdit"/>Edit
          </div>
        </div>
        {postBody}
        <div className="post-card__popularity">
          <VoteScore
            id={id}
            voteItem="comments"
            voteScore={voteScore}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({comments},ownProps)=>{
  return {
    comment:comments[ownProps.id]
  }
}
const mapDispatchToProps = dispatch => {
  return{
    editComment:(data)=>dispatch(editComment(data)),
    deleteComment:(id)=>dispatch(deleteComment(id)),
    fetchPost:(id)=>dispatch(fetchPost(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentCard);
