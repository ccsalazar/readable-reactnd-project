import * as ServerAPIUtil from '../utils/api';

//TYPES
export const GET_POSTS="GET_POSTS"
export const ADD_POST="ADD_POST"
export const UPVOTE_POST="UPVOTE_POST"
export const DOWNVOTE_POST="DOWNVOTE_POST"

//ACTION CREATORS
export const receivePosts = posts => ({
  type:GET_POSTS,
  posts
});
export const addPost = posts => ({
  type:ADD_POST,
  posts
});
export const upVotePost = posts => ({
  type:UPVOTE_POST,
  posts
});
export const downVotePost = posts => ({
  type:DOWNVOTE_POST,
  posts
});


//THUNKS MIDDLEWARE ASYNC ACTIONS
export const initializePosts = ()=> dispatch =>(
  ServerAPIUtil
    .getALLPosts()
    .then(posts => dispatch(receivePosts(posts)))
);

export const createNewPost = (post)=> dispatch =>(
  ServerAPIUtil
    .addNewPost(post)
    .then(data => dispatch(addPost(data)))
);

export const voteOnPost = (id,item,vote)=> dispatch =>(
  ServerAPIUtil
    .voteItem(id,item,vote)
    .then(data =>vote==='upVote'?
    dispatch(upVotePost(data)):dispatch(downVotePost(data))
  )
);
