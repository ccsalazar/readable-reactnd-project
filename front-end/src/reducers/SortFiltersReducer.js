
import{
  SET_FILTER,
  REHYDRATE
} from '../actions/types'


export default (state={},action)=>{

  const {filter}=action;
  switch(action.type){
    case REHYDRATE:
    const saveData = action.payload?action.payload.sort:state
      return saveData;
    case SET_FILTER:
      return {
        filter
      }
    default:
      return state
  }
};
