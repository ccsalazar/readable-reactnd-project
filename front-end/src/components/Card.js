import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import {MdAccountCircle,MdDelete,MdEdit,MdComment} from 'react-icons/lib/md'
import VoteScore from './VoteScore';
import {deletePostAndComments} from '../actions/posts';
import {connect} from 'react-redux';
import {DateStamp} from '../utils/helpers';

class Card extends Component {

state={
  redirect:false
}

  handleDelete(id,e){
    e.preventDefault();
    this.props.dispatch(deletePostAndComments(id));
    this.setState({redirect:true});
  }

  render(){
    const {timestamp,category,author,id,title,body,voteScore,commentCount}=this.props.post;
    const{redirect}=this.state;
    const {dateString,hours,minutes,meridiem}=DateStamp(timestamp);


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
              <MdEdit className="MdEdit"/>
            </Link>
          </div>
        </div>
        <div className="post-card__title">
          <Link
            className="title-link"
            to={`/${category}/${id}`}>
            {title}
          </Link>
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
            <Link to={`/${category}/${id}`}>
            {commentCount} <MdComment className="MdComment"/>
            </Link>
          </div>
        </div>
        {
          redirect && (
            <Redirect to="/" />
          )
        }
      </div>
    )
  }
}

Card.propTypes = {
  id:PropTypes.string.isRequired,
  post:PropTypes.object.isRequired,
  dispatch:PropTypes.func.isRequired
}

const mapStateToProps = ({posts},ownProps) =>{
  return{
    post:posts[ownProps.id]
  }
}

export default connect(mapStateToProps)(Card);
