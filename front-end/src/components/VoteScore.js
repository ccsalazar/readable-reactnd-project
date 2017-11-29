import React from 'react';
import {TiThumbsUp,TiThumbsDown} from 'react-icons/lib/ti';
import {connect} from 'react-redux';

const VoteScore = (props) => {

console.log(props);
  return (
    <div className="post-card__votes">
      <span className="TiThumbsUp icon-clickable"><TiThumbsUp/> </span>
      {props.voteScore}
      <span className="TiThumbsDown icon-clickable"> <TiThumbsDown/></span>
    </div>
  )
}

export default VoteScore;
