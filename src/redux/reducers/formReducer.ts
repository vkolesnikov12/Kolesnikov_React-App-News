import { FormAction } from '../../types';
import { CLEAR_FORM_DATA, SET_FORM_DATA, SET_FORM_DATA_FAILED, SET_FORM_DATA_SUCCESS } from '../constants/actionTypes';

const initialState = {
  data: [],
  error: null
};

const formReducer = (state = initialState, action: FormAction) => {
  switch(action.type){
  case SET_FORM_DATA:
    return { ...state, data: action.payload };
  case SET_FORM_DATA_SUCCESS: 
    return { ...state, data: action.payload, error: null };
  case SET_FORM_DATA_FAILED:
    return { ...state, data: [], error: action.error };
  case CLEAR_FORM_DATA:
    return { ...state, error: null };
  }
  return state;
};
export default formReducer;
