import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { openModal, setModalType } from '../../redux/actions/modalActions';

import styles from './header.module.css';
import ImageAvatar from '../Avatar/ImageAvatar';
import { logout } from '../../redux/actions/loginActions';

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.login?.user);
  const handleOpenModal = (type: string) => {
    dispatch(setModalType(type));
    dispatch(openModal());
  };

  const handleLogout = () => {
    dispatch(logout(user));
    localStorage.removeItem('token');
  };
  console.log(user);
  return (
    <Box className={styles.box}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.typography}>
            News
          </Typography>
          {user ? (
            <>
              <ImageAvatar />
              <Button onClick={handleLogout}  className={styles.button} color="inherit">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => handleOpenModal('register')} className={styles.button} color="inherit">SIGN UP</Button>
              <Button onClick={() => handleOpenModal('login')} color="inherit">SIGN IN</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
