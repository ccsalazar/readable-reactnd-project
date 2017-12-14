import * as ServerAPIUtil from '../utils/api';
import {fetchPost} from './posts';

import{
  GET_COMMENTS,
  ADD_COMMENTS,
  EDIT_COMMENTS,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  DELETE_COMMENT
} from './types'


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
export const receiveEditComment = comments => ({
  type:EDIT_COMMENTS,
  comments
});
export const delComment = comments => ({
  type:DELETE_COMMENT,
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

//ADD NEW COMMENT AND UPDATE PARENT POST VOTESCORE
export const createNewComment = (data)=> dispatch =>{
  ServerAPIUtil
    .addNewComment(data)
    .then(data =>{
      dispatch(addComment(data))
      dispatch(fetchPost(data.parentId))
    });
};

export const editComment = (data)=> dispatch =>(
  ServerAPIUtil
    .editComment(data)
    .then(data =>dispatch(receiveEditComment(data)))
);

//DELETE COMMENT AND UPDATE PARENT POST VOTESCORE
export const deleteComment = (id)=> dispatch =>{
  ServerAPIUtil
    .deleteComment(id)
    .then(data =>{
      dispatch(delComment(data))
      if(!data.parentDeleted)
        {
          dispatch(fetchPost(data.parentId))
        }
    });
};
