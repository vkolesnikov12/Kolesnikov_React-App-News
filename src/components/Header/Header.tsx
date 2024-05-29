import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useAppDispatch } from "../../hooks";
import { openModal } from "../../redux/actions/modalActions";

import styles from './header.module.css';

const Header = () => {  
  const dispatch = useAppDispatch();

  return (
    <Box className={styles.box}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.typography}>
            News
          </Typography>
          <Button onClick={() => dispatch(openModal())} className={styles.button} color="inherit">SIGN UP</Button>
          <Button onClick={() => dispatch(openModal())} color="inherit">SIGN IN</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
