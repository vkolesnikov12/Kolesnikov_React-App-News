import { FormAction } from '../../types';
import { SET_FORM_DATA } from '../constants/actionTypes';

const initialState = {
  data: []
};

const formReducer = (state = initialState, action: FormAction) => {
  switch(action.type){
  case SET_FORM_DATA:
    return { ...state, data: action.payload };
  }
  return state;
};
export default formReducer;
