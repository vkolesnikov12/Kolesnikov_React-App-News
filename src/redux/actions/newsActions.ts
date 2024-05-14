import { Post } from '../../types';
import { NEWS_FAILED, NEWS_RECEIVED, NEWS_REQUESTED } from '../constants/actionTypes';


export const newsRequested = () => ({
  type: NEWS_REQUESTED,
});

export const newsReceived = (payload: Post[]) => ({
  type: NEWS_RECEIVED,
  payload,
});

export const newsFailed = (error: string) => ({
  type: NEWS_FAILED,
  error,
});