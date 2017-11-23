import * as ServerAPIUtil from '../utils/api';

export const GET_POSTS="GET_POSTS"
export const GET_COMMENTS="GET_COMMENTS"

export const receivePosts = posts => ({
  type:GET_POSTS,
  posts
});
export const receiveComments = comments => ({
  type:GET_COMMENTS,
  comments
});

export const initializePosts = ()=> dispatch =>(
  ServerAPIUtil
    .getALLPosts()
    .then(posts => dispatch(receivePosts(posts)))
);
