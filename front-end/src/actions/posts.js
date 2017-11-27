import * as ServerAPIUtil from '../utils/api';

export const GET_POSTS="GET_POSTS"
export const ADD_POST="ADD_POSTS"

export const receivePosts = posts => ({
  type:GET_POSTS,
  posts
});
export const addPost = posts => ({
  type:ADD_POST,
  posts
});


export const initializePosts = ()=> dispatch =>(
  ServerAPIUtil
    .getALLPosts()
    .then(posts => dispatch(receivePosts(posts)))
);

export const createNewPost = (postData)=> dispatch =>(
  ServerAPIUtil
    .addNewPost(postData)
    .then(data => console.log('DISPATCH',data))
);
