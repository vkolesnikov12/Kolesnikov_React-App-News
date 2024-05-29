import { combineReducers } from 'redux';

import postReducer from './postReducer';
import modalReducer from './modalReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  modal: modalReducer,
  form: formReducer,
});

export default rootReducer;
