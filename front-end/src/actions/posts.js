import * as ServerAPIUtil from '../utils/api';
import {deleteComment} from './comments';

//TYPES
export const GET_POST="GET_POST"
export const GET_POSTS="GET_POSTS"
export const GET_POSTS_BY_CATEGORY="GET_POSTS_BY_CATEGORY"
export const ADD_POST="ADD_POST"
export const EDIT_POST="EDIT_POST"
export const UPVOTE_POST="UPVOTE_POST"
export const DOWNVOTE_POST="DOWNVOTE_POST"
export const DELETE_POST="DELETE_POST"
export const SORT_POSTS="SORT_POSTS"


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

export const voteOnPost = (id,item,vote)=> dispatch =>(
  ServerAPIUtil
    .voteItem(id,item,vote)
    .then(data =>vote==='upVote'?
    dispatch(upVotePost(data)):dispatch(downVotePost(data))
  )
);

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
