import{
  GET_POST,
  GET_POSTS,
  ADD_POST,
  EDIT_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  DELETE_POST,
  GET_POSTS_BY_CATEGORY
} from '../actions/posts'


// const postsReducerDefaultState = {};

export default (state={},action)=>{

  const {posts}=action;
  switch(action.type){
    case GET_POST:
    return{
      ...state,
      [posts.id]:posts
    }
    case GET_POSTS:
      const newPosts = posts.reduce((byId,post)=>{
        return {...byId,[post.id]:post}
      },{})
      return {
        ...state,
        ...newPosts
      }
    case GET_POSTS_BY_CATEGORY:
      const newPostsByCategory = posts.reduce((byId,post)=>{
        return {...byId,[post.id]:post}
      },{})
      return {
        ...newPostsByCategory
      }
    case ADD_POST:
      return {
        ...state,
        [posts.id]:posts
      }
    case EDIT_POST:
      return {
        ...state,
        [posts.id]:posts
      }
    case UPVOTE_POST:
      return{
        ...state,
        [posts.id]:posts
      }
    case DOWNVOTE_POST:
      return {
        ...state,
        [posts.id]:posts
      }
    case DELETE_POST:
      const stateArray = Object.values(state);
      const removeDeletedPost=stateArray.filter(item=>item.id!==posts.id);
      const newObject = removeDeletedPost.reduce((byId,post)=>{
        return {...byId,[post.id]:post}
      },{})
      return {
        ...newObject
      }
    default:
      return {...state}
  }
};
