import { combineReducers } from 'redux';
import posts from './PostsReducer';
import comments from './CommentsReducer';

const rootReducer = combineReducers({
  posts,
  comments
});

export default rootReducer;
