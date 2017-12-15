import{
  GET_COMMENTS,
  ADD_COMMENTS,
  EDIT_COMMENTS,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  DELETE_COMMENT,
  REHYDRATE
} from '../actions/types'


export default (state={},action)=>{
  const {comments}=action;
  switch(action.type){
    case REHYDRATE:
      const saveData = action.payload?action.payload.comments:state;
      return saveData;
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
    case DELETE_COMMENT:
      const stateArray = Object.values(state);
      const removeDeletedComment=stateArray.filter(item=>item.id!==comments.id);
      const newObject = removeDeletedComment.reduce((byId,comment)=>{
        return {...byId,[comment.id]:comment}
      },{})
      return {
        ...newObject
      }
    default:
      return {...state}
  }
};
