import * as ServerAPIUtil from '../utils/api';

export const GET_COMMENTS="GET_COMMENTS"
export const ADD_COMMENTS="ADD_COMMENTS"
export const EDIT_COMMENTS="EDIT_COMMENTS"
export const UPVOTE_COMMENT="UPVOTE_COMMENT"
export const DOWNVOTE_COMMENT="DOWNVOTE_COMMENT"


export const receiveComments = comments => ({
  type:GET_COMMENTS,
  comments
});
export const addComment = comments => ({
  type:ADD_COMMENTS,
  comments
});
export const upVoteComment = comments => ({
  type:UPVOTE_COMMENT,
  comments
});
export const downVoteComment = comments => ({
  type:DOWNVOTE_COMMENT,
  comments
});

//THUNK MIDDLEWARE ASYNC ACTIONS
export const getCommentsByPostID = (id)=> dispatch =>(
  ServerAPIUtil
    .getCommentsByPostID(id)
    .then(comments => dispatch(receiveComments(comments)))
);

export const voteOnComment = (id,item,vote)=> dispatch =>(
  ServerAPIUtil
    .voteItem(id,item,vote)
    .then(data => vote==='upVote'?
    dispatch(upVoteComment(data)):dispatch(downVoteComment(data))
  )
);

export const createNewComment = (data)=> dispatch =>(
  ServerAPIUtil
    .addNewComment(data)
    .then(data =>dispatch(addComment(data)))
);
