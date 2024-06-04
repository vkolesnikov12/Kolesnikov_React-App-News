import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailed = (error: string) => ({
  type: LOGIN_FAILED,
  error: error
});

export const logout= (user) => ({
  type: LOGOUT,
  payload: user
});
