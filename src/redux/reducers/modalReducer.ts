import { InitialStateModal, ModalAction } from "../../types";
import { CLOSE_MODAL, OPEN_MODAL } from "../constants/actionTypes";

const initialState: InitialStateModal = {
  isOpenModal: false,
};
const modalReducer = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpenModal: true };
    case CLOSE_MODAL:
      return { ...state, isOpenModal: false };
  }
  return state;
};

export default modalReducer;
