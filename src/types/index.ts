export interface Tag {
  id: number;
  name: string;
}

export interface Author {
  id: number;
  login: string;
  email: string;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  tags: Tag[];
  author: Author;
}

export interface FormData {
  login?: string;
  email?: string;
  password?: string;
}

export interface InitialState {
  posts: Post[];
  isLoading: boolean;
  error: null | string;
}

export interface PostAction {
  type: string;
  payload?: Post[];
  error?: string;
}
export interface FormAction {
  type: string;
  payload: FormData;
  error?: string
}
export interface LoginAction {
  type: string;
  payload: FormData | string;
}
export interface ModalAction {
  type: string;
  isOpenModal: boolean;
  payload?: string;
}

export enum ModalType {
  Unknown = 'unknown',
  Register = 'register',
  Login = 'login',
}
export interface InitialStateModal {
  isOpenModal: boolean;
  modalType: ModalType;
}
export interface AuthInitialState {
  isAuth: boolean;
  isLoading: boolean;
  user: null | Author;
  error: null | string;
}
