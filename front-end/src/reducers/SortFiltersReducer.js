
import{
  SET_FILTER
} from '../actions/index'


export default (state={},action)=>{

  const {filter}=action;
  switch(action.type){
    case SET_FILTER:
      return {
        filter
      }
    default:
      return state
  }
};
