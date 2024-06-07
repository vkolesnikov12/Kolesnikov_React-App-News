import { InitialStateLogin, LoginAction } from '../../types';
import { CLEAR_FORM_DATA, INITIALIZE_AUTH, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes';

const initialState: InitialStateLogin = {
  isAuth: false,
  user: null, 
  error: null
};

const loginReducer = (state = initialState, action: LoginAction) => {
  switch (action.type) {
  case LOGIN_REQUEST: 
    return { ...state, user: action.payload };
  case LOGIN_SUCCESS: 
    return { ...state, isAuth: true, user: action.payload };
  case LOGIN_FAILED: 
    return { ...state, isAuth: false, error: action.payload };
  case INITIALIZE_AUTH: 
    return { ...state, isAuth: false };
  case CLEAR_FORM_DATA:
    return { ...state, error: null };
  case LOGOUT:
    return { ...state, isAuth: false, user: null };
  }
  return state;
};

export default loginReducer;
