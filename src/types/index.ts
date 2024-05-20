export interface Tag {
  id: number;
  name: string;
};

export interface Author {
  id: number;
  login: string;
  avatarUrl: string | null;
  createdAt: string;
};

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  tags: Tag[];
  author: Author;
};

export interface InitialState {
  posts: Post[],
  isLoading: boolean,
  error: null | string,
};

export interface PostAction {
  type: string;
  payload?: Post[];
  error?: string | null;
}
