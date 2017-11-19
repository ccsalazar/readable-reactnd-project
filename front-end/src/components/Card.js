import React from 'react';
import {MdAccountCircle,MdMoreVert} from 'react-icons/lib/md'
import {TiThumbsUp,TiThumbsDown} from 'react-icons/lib/ti';

const Card = () => {
  return (
    <div className="post-card">
      <div className="post-card__category">
        React
      </div>
      <div className="post-card__details">
        <div className="post-card__user">
          <MdAccountCircle className="MdAccountCircle"/>
          <div className="post-card__user-log">
            <div className="post-card__author">
              John Smith
            </div>
            <div className="post-card__timestamp">
              Nov 15, 2017
            </div>
          </div>
        </div>
        <div className="post-card__controls">
          <MdMoreVert className="MdMoreVert icon-clickable"/>
        </div>
      </div>
      <div className="post-card__title">
        Post Title
      </div>
      <div className="post-card__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quis, facere consequatur earum, at aut! Sed fugit, aspernatur voluptates ipsa molestias sit. Provident temporibus cupiditate, illo sequi est modi architecto!</p>
      </div>
      <div className="post-card__popularity">
        <div className="post-card__votes">
          <span className="TiThumbsUp icon-clickable"><TiThumbsUp/> </span>
          1.2K
          <span className="TiThumbsDown icon-clickable"> <TiThumbsDown/></span>
        </div>
        <div className="post-card__comments">
          <a href="#">3 Comments</a>
        </div>
      </div>
    </div>
  )
}

export default Card;
