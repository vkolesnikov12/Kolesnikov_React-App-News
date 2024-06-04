import { combineReducers } from 'redux';

import postReducer from './postReducer';
import modalReducer from './modalReducer';
import formReducer from './formReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  modal: modalReducer,
  form: formReducer,
  login: loginReducer
});

export default rootReducer;
