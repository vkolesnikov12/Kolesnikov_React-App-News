import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { closeModal } from '../../redux/actions/modalActions';
import AuthForm from '../AuthForm/AuthForm';

import styles from './modal.module.css';
import { clearFormData } from '../../redux/actions/formActions';

const ModalComponent = () => {
  const isModalOpen = useAppSelector(state => state.modal.isOpenModal);
  const dispatch = useAppDispatch();

  const closeModalForm = () => {
    dispatch(closeModal());
    dispatch(clearFormData());
  };
  
  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={closeModalForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <AuthForm/>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalComponent;
