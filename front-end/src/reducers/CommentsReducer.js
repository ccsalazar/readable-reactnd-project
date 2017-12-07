import{
  GET_COMMENTS,
  ADD_COMMENTS,
  EDIT_COMMENTS,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../actions/comments'


export default (state={},action)=>{
  const {comments}=action;
  switch(action.type){
    case GET_COMMENTS:
      const newComments = comments.reduce((byId,comment)=>{
        return {...byId,[comment.id]:comment}
      },{});
      return {
        ...state,
        ...newComments
      }
    case ADD_COMMENTS:
      return{
        ...state,
        [comments.id]:comments
      }
    case EDIT_COMMENTS:
      return{
        ...state,
        [comments.id]:comments
      }
    case UPVOTE_COMMENT:
      return{
        ...state,
        [comments.id]:comments
      }
    case DOWNVOTE_COMMENT:
      return {
        ...state,
        [comments.id]:comments
      }
    default:
      return {...state}
  }
};
