import {combineReducers} from 'redux';

import todoReducer from './todo';
import commentReducer from './comment';

export default combineReducers({
  todos: todoReducer,
  comments: commentReducer,
});
