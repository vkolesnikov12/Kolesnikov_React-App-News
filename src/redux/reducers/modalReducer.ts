import { InitialStateModal, ModalAction } from '../../types';
import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_MODAL_TYPE,
} from '../constants/actionTypes';

const initialState: InitialStateModal = {
  isOpenModal: false,
  modalType: 'unknown',
};
const modalReducer = (state = initialState, action: ModalAction) => {
  switch (action.type) {
  case OPEN_MODAL:
    return { ...state, isOpenModal: true };
  case CLOSE_MODAL:
    return { ...state, isOpenModal: false };
  case SET_MODAL_TYPE:
    return { ...state, modalType: action.payload };
  }
  return state;
};

export default modalReducer;
