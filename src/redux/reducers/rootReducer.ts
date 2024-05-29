import { combineReducers } from "redux";

import postReducer from "./postReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  modal: modalReducer,
});

export default rootReducer;
