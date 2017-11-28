import{
  GET_COMMENTS
} from '../actions/comments'


export default (state={},action)=>{
  switch(action.type){
    case GET_COMMENTS:
    const queuedItems = action.comments.map(a=>a.id);
    const newItems=state.filter(stateItem =>
      !queuedItems.includes(stateItem.id)
    );
    console.log('length:',newItems.length)
    return newItems.length===0 && state.length!==0 ?
      [...state]:[...state,...action.comments]
    default:
      return [...state]
  }
};
