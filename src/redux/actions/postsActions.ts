import { Post } from '../../types';
import { POSTS_FAILED, POSTS_RECEIVED, POSTS_REQUESTED } from '../constants/actionTypes';

export const postsRequested = () => ({
  type: POSTS_REQUESTED,
});

export const postsReceived = (payload: Post[]) => ({
  type: POSTS_RECEIVED,
  payload,
});

export const postsFailed = (error: string) => ({
  type: POSTS_FAILED,
  error,
});
