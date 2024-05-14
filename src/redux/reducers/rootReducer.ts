import { combineReducers } from 'redux';

import postReducer from './postReducer';

const rootReducer = combineReducers({
  news: postReducer,
 });

export default rootReducer;
