import React from 'react';
import { Link } from 'react-router-dom';
import {MdAccountCircle,MdMoreVert} from 'react-icons/lib/md'
import {TiThumbsUp,TiThumbsDown} from 'react-icons/lib/ti';

const Card = (props) => {

  let timeStamp = new Date(props.timestamp);
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
        {props.category}
      </div>
      <div className="post-card__details">
        <div className="post-card__user">
          <MdAccountCircle className="MdAccountCircle"/>
          <div className="post-card__user-log">
            <div className="post-card__author">
              {props.author}
            </div>
            <div className="post-card__timestamp">
              <span>{hours}:{minutes} {meridiem} on {dateString}</span>
            </div>
          </div>
        </div>
        <div className="post-card__controls">
          <MdMoreVert className="MdMoreVert icon-clickable"/>
        </div>
      </div>
      <div className="post-card__title">
        {props.title}
      </div>
      <div className="post-card__body">
        {props.body}
      </div>
      <div className="post-card__popularity">
        <div className="post-card__votes">
          <span className="TiThumbsUp icon-clickable"><TiThumbsUp/> </span>
          {props.voteScore}
          <span className="TiThumbsDown icon-clickable"> <TiThumbsDown/></span>
        </div>
        <div className="post-card__comments">
          <Link to={`/posts/${props.id}/comments`}>
          {props.commentCount} Comments
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card;
