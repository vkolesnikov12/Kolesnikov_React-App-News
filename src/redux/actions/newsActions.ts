import { NEWS_FAILED, NEWS_RECEIVED, NEWS_REQUESTED } from '../constants/actionTypes';

import { Post } from '../../types';

export const newsRequested = () => ({
  type: NEWS_REQUESTED,
});

export const newsReceived = (payload: Post[]) => ({
  type: NEWS_RECEIVED,
  payload,
});

export const newsFailed = (error: string | null) => ({
  type: NEWS_FAILED,
  error,
});