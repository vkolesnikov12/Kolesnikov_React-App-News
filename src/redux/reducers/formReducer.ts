import { FormAction } from '../../types';
import { SET_FORM_DATA, SET_FORM_DATA_FAILED, SET_FORM_DATA_SUCCESS } from '../constants/actionTypes';

const initialState = {
  data: []
};

const formReducer = (state = initialState, action: FormAction) => {
  switch(action.type){
  case SET_FORM_DATA:
    return { ...state, data: action.payload };
  case SET_FORM_DATA_SUCCESS: 
    return { ...state, data: action.payload, error: null };
  case SET_FORM_DATA_FAILED:
    return { ...state, error: action.payload };
  }
  return state;
};
export default formReducer;
