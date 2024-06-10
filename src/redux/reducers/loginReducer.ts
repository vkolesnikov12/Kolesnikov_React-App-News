import { AuthInitialState, LoginAction } from '../../types';
import { 
  LOGIN_FAILED, 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGOUT, 
  VERIFY_USER 
} from '../constants/actionTypes';

const initialState: AuthInitialState = {
  isAuth: false,
  isLoading: false,
  user: null, 
  error: null
};

const loginReducer = (state = initialState, action: LoginAction) => {
  switch (action.type) {
  case LOGIN_REQUEST: 
    return { ...state, isLoading: true, error: null };
  case LOGIN_SUCCESS: 
    return { 
      ...state, 
      isLoading: false, 
      isAuth: true, 
      user: action.payload,
      error: null
    };
  case LOGIN_FAILED: 
    return { 
      ...state, 
      isLoading: false, 
      isAuth: false, 
      error: action.payload 
    };
  case VERIFY_USER: 
    return { ...state, isAuth: false };
  case LOGOUT:
    return { ...state, isAuth: false, user: null };
  }
  return state;
};

export default loginReducer;
