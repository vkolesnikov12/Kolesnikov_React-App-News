import { FormData } from '../../types';
import { SET_FORM_DATA, SET_FORM_DATA_FAILED, SET_FORM_DATA_SUCCESS } from '../constants/actionTypes';

export const setFormData = (data: FormData) => ({
  type: SET_FORM_DATA,
  payload: data,
});

export const setFormDataSuccess = (data: FormData) => ({
  type: SET_FORM_DATA_SUCCESS,
  payload: data
});

export const setFormDataFailed = (error: string) => ({
  type: SET_FORM_DATA_FAILED,
  error
});
