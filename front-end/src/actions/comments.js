import * as ServerAPIUtil from '../utils/api';

export const GET_COMMENTS="GET_COMMENTS"
export const INIT_COMMENTS="INIT_COMMENTS"


export const initComments = () => ({
  type:INIT_COMMENTS,
  comments: []
});

export const receiveComments = comments => ({
  type:GET_COMMENTS,
  comments
});

//THUNK MIDDLEWARE ASYNC ACTIONS
export const getCommentsByPostID = (id)=> dispatch =>(
  ServerAPIUtil
    .getCommentsByPostID(id)
    .then(comments => dispatch(receiveComments(comments)))
    //
);

// export const voteOnComment = (id,item,vote)=> dispatch =>(
//   ServerAPIUtil
//     .voteItem(id,,item,vote)
//     .then(data => dispatch(addPost(data)))
// );
