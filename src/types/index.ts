import { NEWS_FAILED, NEWS_RECEIVED, NEWS_REQUESTED } from '../redux/constants/actionTypes';

export interface Tag {
  id: number;
  name: string;
}

export interface Author {
  id: number;
  login: string;
  avatarUrl: string | null;
  createdAt: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  tags: Tag[];
  author: Author;
}

export interface NewsRequestedAction {
  type: typeof NEWS_REQUESTED;
}
export interface NewsReceivedAction {
  type: typeof NEWS_RECEIVED;
  payload: Post[];
}

export interface NewsFailedAction {
  type: typeof NEWS_FAILED;
  error: string;
}

export type PostAction = NewsRequestedAction | NewsReceivedAction | NewsFailedAction;
