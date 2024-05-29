import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_MODAL_TYPE,
} from '../constants/actionTypes';

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const setModalType = (modalType: string) => ({
  type: SET_MODAL_TYPE,
  payload: modalType,
});
