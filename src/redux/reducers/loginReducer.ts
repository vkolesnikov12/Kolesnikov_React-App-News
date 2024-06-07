import { InitialStateLogin, LoginAction } from '../../types';
import { INITIALIZE_AUTH, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes';

const initialState: InitialStateLogin = {
  isAuth: false,
  user: null
};

const loginReducer = (state = initialState, action: LoginAction) => {
  switch (action.type) {
  case LOGIN_SUCCESS: 
    return { ...state, isAuth: true, user: action.payload };
  case LOGIN_FAILED: 
    return { ...state, isAuth: false, error: action.payload };
  case INITIALIZE_AUTH: 
    return { ...state, isAuth: true };
  case LOGOUT:
    return { ...state, isAuth: false, user: null };
  }
  return state;
};

export default loginReducer;
