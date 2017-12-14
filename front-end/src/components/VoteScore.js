import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {TiArrowUpThick,TiArrowDownThick} from 'react-icons/lib/ti';
import {connect} from 'react-redux';
import {voteOnPost} from '../actions/posts';
import {voteOnComment} from '../actions/comments';

class VoteScore extends Component {

//CHECK IF VOTING ON COMMENTS OR POSTS
handleVoting (vote,e){
  const{id,voteItem,dispatch}=this.props;
  voteItem==='posts'?
    dispatch(voteOnPost(id,voteItem,vote))
    :dispatch(voteOnComment(id,voteItem,vote));
}

  render(){
    return (
      <div className="post-card__votes">
        <span
          className="TiThumbsUp icon-clickable"
          onClick={this.handleVoting.bind(this,'upVote')}><TiArrowUpThick />
        </span>
        {this.props.voteScore}
        <span
          className="TiThumbsDown icon-clickable"
          onClick={this.handleVoting.bind(this,'downVote')}><TiArrowDownThick/>
        </span>
      </div>
    )
  }
}

VoteScore.propTypes = {
  id:PropTypes.string,
  voteItem:PropTypes.string.isRequired,
  voteScore:PropTypes.number,
  dispatch:PropTypes.func.isRequired
}

export default connect()(VoteScore);
