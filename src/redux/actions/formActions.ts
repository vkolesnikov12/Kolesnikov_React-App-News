import { SET_FORM_DATA } from '../constants/actionTypes';

export const setFormData = (data) => ({
  type: SET_FORM_DATA,
  payload: data,
});
