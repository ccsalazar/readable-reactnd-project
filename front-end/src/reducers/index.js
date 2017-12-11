import { combineReducers } from 'redux';
import posts from './PostsReducer';
import comments from './CommentsReducer';
import sort from './SortFiltersReducer';

const rootReducer = combineReducers({
  posts,
  comments,
  sort
});

export default rootReducer;
