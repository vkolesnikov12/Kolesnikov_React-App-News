import { combineReducers } from 'redux';

import postReducer from './postReducer';
import modalReducer from './modalReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  modal: modalReducer,
  login: loginReducer
});

export default rootReducer;
