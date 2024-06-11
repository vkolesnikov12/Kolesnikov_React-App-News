import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { openModal, setModalType } from '../../redux/actions/modalActions';
import ImageAvatar from '../Avatar/ImageAvatar';
import { logout, verifyUser } from '../../redux/actions/loginActions';

import styles from './header.module.css';

const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.login.isAuth);
  const token = localStorage.getItem('token');
  const handleOpenModal = (type: string) => {
    dispatch(setModalType(type));
    dispatch(openModal());
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };

  useEffect(() => {
    if(token) {
      dispatch(verifyUser());
    }
  }, []);
  
  return (
    <Box className={styles.box}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.typography}>
            News
          </Typography>
          {isAuth ? (
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
