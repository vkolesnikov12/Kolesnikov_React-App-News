import { InitialStateLogin, LoginAction } from '../../types';
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes';

const initialState: InitialStateLogin = {
  isAuth: false,
  user: null
};

const loginReducer = (state = initialState, action: LoginAction) => {
  switch (action.type) {
  case LOGIN_SUCCESS: 
    return { ...state, isAuth: true, user: action.payload };
  case LOGIN_FAILED: 
    return { ...state, isAuth: false };
  case LOGOUT:
    return { ...state, isAuth: false, user: null };
  }
  return state;
};

export default loginReducer;
