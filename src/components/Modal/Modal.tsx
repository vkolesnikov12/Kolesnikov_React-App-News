import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { closeModal } from '../../redux/actions/modalActions';
import AuthForm from '../AuthForm/AuthForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalComponent = () => {
  const isModalOpen = useAppSelector(state => state.modal.isOpenModal)
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={() => dispatch(closeModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AuthForm/>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalComponent;
