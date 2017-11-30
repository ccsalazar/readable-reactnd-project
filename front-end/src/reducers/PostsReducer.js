import{
  GET_POSTS,
  ADD_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from '../actions/posts'


// const postsReducerDefaultState = {};

export default (state={},action)=>{

  const {posts}=action;
  switch(action.type){
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
      // state.map((item,index)=>action.posts.id===item.id?
      // console.log('UpDATED',item.voteScore+1):console.log('no match'))
      return{...state,
      }
    case DOWNVOTE_POST:
      return {...state}
    default:
      return {...state}
  }
};
