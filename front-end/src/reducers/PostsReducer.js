import{
  GET_POSTS,
  ADD_POST
} from '../actions/posts'


// const postsReducerDefaultState = {};

export default (state={},action)=>{

  // const {posts}=action;
  switch(action.type){
    case GET_POSTS:
      return [
        ...state,
        ...action.posts
      ]
    case ADD_POST:
      return [
        ...state,
        action.posts
      ]
    default:
      return [...state]
  }
};
