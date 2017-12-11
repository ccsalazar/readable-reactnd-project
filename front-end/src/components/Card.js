import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
import {MdAccountCircle,MdDelete,MdEdit,MdComment} from 'react-icons/lib/md'
import VoteScore from './VoteScore';
import {deletePostAndComments} from '../actions/posts';
import {connect} from 'react-redux';

class Card extends Component {


  handleDelete(id,e){
    e.preventDefault();
    this.props.dispatch(deletePostAndComments(id));
  }

  render(){
    const {timestamp,category,author,id,title,body,voteScore,commentCount}=this.props.post;
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
                {/* {timestamp} */}
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
            {commentCount} <MdComment className="MdComment"/>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  id:PropTypes.string.isRequired,
  post:PropTypes.object.isRequired,
  dispatch:PropTypes.func.isRequired
}

const mapStateToProps = ({posts,comments},ownProps) =>{
  return{
    post:posts[ownProps.id]
  }
}

export default connect(mapStateToProps)(Card);
