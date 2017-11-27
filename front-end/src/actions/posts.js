import * as ServerAPIUtil from '../utils/api';

export const GET_POSTS="GET_POSTS"

export const receivePosts = posts => ({
  type:GET_POSTS,
  posts
});

export const initializePosts = ()=> dispatch =>(
  ServerAPIUtil
    .getALLPosts()
    .then(posts => dispatch(receivePosts(posts)))
);
