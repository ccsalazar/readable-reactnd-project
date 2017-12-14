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
} from '../actions/types'


export default (state={},action)=>{

  const {posts}=action;
  switch(action.type){
    case "persist/REHYDRATE":
      return action.payload.posts;
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
    case SORT_POSTS:
      const sortedState = Object.values(state)
      .sort((a,b)=>{
        if (action.filter==="mostPopular")
          return b.voteScore - a.voteScore;
        if (action.filter==="leastPopular")
          return a.voteScore - b.voteScore;
        if (action.filter==="latestPost")
          return b.timestamp - a.timestamp;
        return 0;
      });
      const newSorted = sortedState.reduce((byId,post)=>{
        return {...byId,[post.id]:post}
      },{})
      return{
        ...newSorted
      }
    default:
      return {...state}
  }
};
