import { POSTS_FAILED, POSTS_RECEIVED, POSTS_REQUESTED } from '../constants/actionTypes';
import { InitialState, PostAction } from '../../types';

const initialState: InitialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postReducer = (state = initialState, action: PostAction) => {
  switch (action.type) {
  case POSTS_REQUESTED:
    return { ...state, isLoading: true, error: null };
  case POSTS_RECEIVED:
    return { 
      ...state, 
      isLoading: false, 
      posts: action.payload, 
      error: null 
    };
  case POSTS_FAILED:
    return { 
      ...state, 
      isLoading: false, 
      posts: [], 
      error: action.error 
    };
  default: 
    return state;
  };
};

export default postReducer;
