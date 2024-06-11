import { Author, FormData } from '../../types';
import { 
  LOGIN_FAILED, 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGOUT, 
  VERIFY_USER 
} from '../constants/actionTypes';

export const loginRequest = (user: FormData) => ({
  type: LOGIN_REQUEST,
  payload: user
});

export const loginSuccess = (user: Author) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailed = (error: string) => ({
  type: LOGIN_FAILED,
  payload: error
});

export const verifyUser = () => ({
  type: VERIFY_USER,
});

export const logout= () => ({
  type: LOGOUT,
});
