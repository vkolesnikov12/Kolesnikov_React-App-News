import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { closeModal } from '../../redux/actions/modalActions';
import AuthForm from '../AuthForm/AuthForm';

import styles from './modal.module.css';
import FilledAlerts from '../FilledAlert/FilledAlert';

const ModalComponent = () => {
  const isModalOpen = useAppSelector(state => state.modal.isOpenModal);
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={() => dispatch(closeModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <FilledAlerts error={'error'} severity={'info'}/>
          <AuthForm/>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalComponent;
