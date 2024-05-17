import { NEWS_FAILED, NEWS_RECEIVED, NEWS_REQUESTED } from '../constants/actionTypes';
import { NewsFailedAction, NewsReceivedAction, NewsRequestedAction } from '../../types';

export const newsRequested = (): NewsRequestedAction => ({
  type: NEWS_REQUESTED,
});

export const newsReceived = (payload: NewsReceivedAction) => ({
  type: NEWS_RECEIVED,
  payload,
});

export const newsFailed = (error: NewsFailedAction) => ({
  type: NEWS_FAILED,
  error,
});