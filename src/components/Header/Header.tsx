import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useAppDispatch } from "../../hooks";
import { openModal, setModalType } from "../../redux/actions/modalActions";

import styles from './header.module.css';

const Header = () => {  
  const dispatch = useAppDispatch();
  const handleOpenModal = (type: string) => {
    dispatch(setModalType(type));
    dispatch(openModal());
  }
  
  return (
    <Box className={styles.box}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.typography}>
            News
          </Typography>
          <Button onClick={() => handleOpenModal('register')} className={styles.button} color="inherit">SIGN UP</Button>
          <Button onClick={() => handleOpenModal('login')} color="inherit">SIGN IN</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
