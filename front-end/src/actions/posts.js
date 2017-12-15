import * as ServerAPIUtil from '../utils/api';
import {deleteComment} from './comments';

import{
  GET_POST,
  GET_POSTS,
  ADD_POST,
  EDIT_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  DELETE_POST,
  GET_POSTS_BY_CATEGORY,
  SORT_POSTS
} from './types'

//ACTION CREATORS
export const receivePost = posts => ({
  type:GET_POST,
  posts
});
export const receivePosts = posts => ({
  type:GET_POSTS,
  posts
});
export const receivePostsByCategory = posts => ({
  type:GET_POSTS_BY_CATEGORY,
  posts
});
export const addPost = posts => ({
  type:ADD_POST,
  posts
});
export const receiveEditPost = posts => ({
  type:EDIT_POST,
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
export const delPost = posts => ({
  type:DELETE_POST,
  posts
});

export const sortPosts = filter =>({
  type:SORT_POSTS,
  filter
})


//THUNKS MIDDLEWARE ASYNC ACTIONS
export const fetchPost = (id)=> (dispatch,getState) =>{
  ServerAPIUtil
    .getPostsById(id)
    .then(posts =>dispatch(receivePost(posts))
  )
};
export const fetchAllPosts = ()=> (dispatch,getState) =>{
  const {sort} = getState();
  ServerAPIUtil
    .getALLPosts()
    .then(posts =>{
      dispatch(receivePosts(posts))
      dispatch(sortPosts(sort.filter))
    })
};

export const fetchPostsByCategory = (category)=> (dispatch,getState) =>{
  const {sort}=getState();
  ServerAPIUtil
    .getPostsByCategory(category)
    .then(posts => {
      dispatch(receivePostsByCategory(posts))
      dispatch(sortPosts(sort.filter))
    })
};

export const createNewPost = (post)=> dispatch =>(
  ServerAPIUtil
    .addNewPost(post)
    .then(data => dispatch(addPost(data)))
);
export const editPost = (post)=> dispatch =>(
  ServerAPIUtil
    .editPost(post)
    .then(data => dispatch(receiveEditPost(data)))
);

export const voteOnPost = (id,item,vote)=> (dispatch,getState) =>{
  const {sort}=getState();
  ServerAPIUtil
    .voteItem(id,item,vote)
    .then(data =>{
      vote==='upVote'?dispatch(upVotePost(data)):dispatch(downVotePost(data))
      dispatch(sortPosts(sort.filter))
    })
};

//DELETE POST AND ALL CHILD COMMENTS
export const deletePostAndComments = (id)=> dispatch =>{
  ServerAPIUtil
    .deletePost(id)
    .then(data =>dispatch(delPost(data)));
  ServerAPIUtil
    .getCommentsByPostID(id)
    .then(comments =>{
      comments.forEach(comment=>{
        if (comment.parentDeleted){
          dispatch(deleteComment(comment.id))
        }
      })
    });
};
