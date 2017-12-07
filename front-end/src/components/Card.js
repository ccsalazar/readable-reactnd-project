import React,{Component} from 'react';
import { Link} from 'react-router-dom';
import {MdAccountCircle,MdDelete,MdEdit,MdComment} from 'react-icons/lib/md'
import VoteScore from './VoteScore';
import {deletePost} from '../actions/posts';
import {connect} from 'react-redux';

class Card extends Component {


  handleDelete(id,e){
    e.preventDefault();
    this.props.deletePost(id);
  }

  render(){
    const {timestamp,category,author,id,title,body,voteScore,commentCount}=this.props;
    let timeStamp = new Date(timestamp);
    let dateString = timeStamp.toDateString();
    let hours = timeStamp.getHours();
    let minutes =timeStamp.getMinutes();
    let meridiem = hours<12?'AM':'PM';
    hours = hours===0?hours+=12:hours;
    hours = hours>12?hours-=12:hours;
    minutes = ('0'+minutes).slice(-2);

    return (
      <div className="post-card">
        <div className="post-card__category">
          {category}
        </div>
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
          <div
              onClick={this.handleDelete.bind(this,id)}
              className="post-card__controls">
              <MdDelete className="MdDelete"/>
          </div>
          <div className="post-card__controls">
            <Link to={`/posts/${id}/edit`}>
              <MdEdit className="MdEdit"/>Edit
            </Link>
          </div>
          <div className="post-card__controls">
            <MdComment className="MdComment"/>Comment
          </div>
        </div>
        <div className="post-card__title">
          {title}
        </div>
        <div className="post-card__body">
          {body}
        </div>
        <div className="post-card__popularity">
          <VoteScore
          id={id}
          voteItem="posts"
          voteScore={voteScore}
          />
          <div className="post-card__comments">
            <Link to={`/posts/${id}/comments`}>
            {commentCount} Comments
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({posts}) =>{
  return{
    posts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deletePost:(id)=>dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);
