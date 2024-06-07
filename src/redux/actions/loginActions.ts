import { Author, FormData } from '../../types';
import { CLEAR_FORM_DATA, INITIALIZE_AUTH, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes';

export const loginRequest = (user: FormData) => ({
  type: LOGIN_REQUEST,
  payload: user
});

export const loginSuccess = (user: FormData) => ({
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

export const clearFormData = () => ({
  type: CLEAR_FORM_DATA,
});

export const logout= (user: Author) => ({
  type: LOGOUT,
  payload: user
});
