import { Author } from '../../types';
import { INITIALIZE_AUTH, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes';

export const loginSuccess = (user: Author) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailed = (error: string) => ({
  type: LOGIN_FAILED,
  payload: error
});

export const initializeAuth = () => ({
  type: INITIALIZE_AUTH,
});

export const logout= (user: Author) => ({
  type: LOGOUT,
  payload: user
});
