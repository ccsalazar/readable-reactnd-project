import{
  GET_COMMENTS
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
      // const queuedItems = action.comments.map(a=>a.id);
      // const newItems=state.filter(stateItem =>
      //   !queuedItems.includes(stateItem.id)
      // );
      // return newItems.length===0 && state.length!==0 ?
      //   [...state]:[...state,...action.comments]
    default:
      return {...state}
  }
};
