import React from 'react';
import {MdAccountCircle,MdMoreVert,MdDelete,MdEdit} from 'react-icons/lib/md';
import {Link} from 'react-router-dom';
// import {TiThumbsUp,TiThumbsDown} from 'react-icons/lib/ti';
import VoteScore from './VoteScore';


const CommentCard = (props) => {

  let timeStamp = new Date(props.timestamp);
  let dateString = timeStamp.toDateString();
  let hours = timeStamp.getHours();
  let minutes =timeStamp.getMinutes();
  let meridiem = hours<12?'AM':'PM';
  hours = hours===0?hours+=12:hours;
  hours = hours>12?hours-=12:hours;
  minutes = ('0'+minutes).slice(-2);

    return(
      <div className="post-card">
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
          {/* <div className="post-card__controls">
            <MdMoreVert className="MdMoreVert icon-clickable"/>
          </div> */}
          <div className="post-card__controls">
              <MdDelete className="MdDelete"/>
          </div>
          <div className="post-card__controls">
            <Link to={`/posts/${props.id}/edit`}>
              <MdEdit className="MdEdit"/>Edit
            </Link>
          </div>
        </div>
        <div className="post-card__body">
          {props.body}
        </div>
        <div className="post-card__popularity">
          <VoteScore
          id={props.id}
          voteItem="comments"
          voteScore={props.voteScore}
          />
        </div>
      </div>
    );
}

export default CommentCard;
