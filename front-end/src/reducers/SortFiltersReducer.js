
import{
  SET_FILTER,
  REHYDRATE
} from '../actions/types'


export default (state={},action)=>{

  const {filter}=action;
  switch(action.type){
    case REHYDRATE:
      return action.payload.sort;
    case SET_FILTER:
      return {
        filter
      }
    default:
      return state
  }
};
