import { NEWS_FAILED, NEWS_RECEIVED, NEWS_REQUESTED } from '../constants/actionTypes';
import { PostAction } from '../../types';

const defaultState = {
  news: [],
  isLoading: false,
  error: null,
};

const postReducer = (state = defaultState, action: PostAction) => {
  switch (action.type) {
    case NEWS_REQUESTED:
      return {...state, isLoading: true, error: null};
    case NEWS_RECEIVED:
      return {...state, isLoading: false, news: action.payload, error: null};
    case NEWS_FAILED:
      return {...state, isLoading: false, news: [], error: action.error};
    default: 
      return state;
  }
};

export default postReducer;