import React,{Component} from 'react';
import {TiThumbsUp,TiThumbsDown} from 'react-icons/lib/ti';
import {connect} from 'react-redux';
import {voteOnPost} from '../actions/posts';
import {voteOnComment} from '../actions/comments';

class VoteScore extends Component {


handleVoting (vote,e){
  const{id,voteItem,voteOnPost,voteOnComment}=this.props;
  voteItem==='posts'? voteOnPost(id,voteItem,vote):voteOnComment(id,voteItem,vote);
}

  render(){
    return (
      <div className="post-card__votes">
        <span
          className="TiThumbsUp icon-clickable"
          onClick={this.handleVoting.bind(this,'upVote')}><TiThumbsUp />
        </span>
        {this.props.voteScore}
        <span
          className="TiThumbsDown icon-clickable"
          onClick={this.handleVoting.bind(this,'downVote')}><TiThumbsDown/>
        </span>
      </div>
    )
  }
}

const mapStateToProps = ({posts,comments},ownProps)=>{
  return {
    posts,
    comments
  }
}
const mapDispatchToProps = dispatch => ({
  voteOnPost:(id,item,vote)=>dispatch(voteOnPost(id,item,vote)),
  voteOnComment:(id,item,vote)=>dispatch(voteOnComment(id,item,vote))
});

export default connect(mapStateToProps,mapDispatchToProps)(VoteScore);
