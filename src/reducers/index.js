import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

const reducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export default reducer;
