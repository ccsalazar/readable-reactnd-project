import{
  GET_POST,
  GET_POSTS,
  ADD_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
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
    case ADD_POST:
      console.log(posts);
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
    default:
      return {...state}
  }
};
