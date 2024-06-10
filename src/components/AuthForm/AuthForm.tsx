import { 
  Box, 
  Button, 
  TextField, 
  Typography 
} from '@mui/material';
import { SyntheticEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import FilledAlerts from '../FilledAlert/FilledAlert';
import { loginRequest } from '../../redux/actions/loginActions';

import styles from './authForm.module.css';

const AuthForm = () => {  
  const modalType = useAppSelector(state => state.modal.modalType);
  const loginError = useAppSelector(state => state.login.error);
  const dispatch = useAppDispatch();
  const isModalTypeRegister = modalType === 'register';
  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    const formData: { [key: string]: string } = {};
    const formElements = (e.target as HTMLFormElement).elements as HTMLCollectionOf<HTMLInputElement>;

    for (const element of formElements) {
      if (element.name) {
        formData[element.name] = (element as HTMLInputElement).value;
      }
    }
    dispatch(loginRequest(formData));
  };
  return (
    <Box
      component="form"
      className={styles.box}
      onSubmit={handleSubmit}
    >
      {loginError && <FilledAlerts error={loginError} severity='error'/>}
      <Typography variant="h5" component="h2" gutterBottom>
        {isModalTypeRegister ? 'Регистрация' : 'Авторизация'}
      </Typography>
      {isModalTypeRegister &&
        <TextField
          className={styles.textField}
          label="Login"
          variant="outlined"
          name="login"
          required
        />
      } 
      <TextField
        className={styles.textField}
        label="Email"
        variant="outlined"
        name="email"
        type='email'
        required
      />
      <TextField
        className={styles.textField}
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        required
      />      
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={styles.button}
      >
        {isModalTypeRegister ? 'Зарегистрироваться' : 'Авторизоваться'}
      </Button>
    </Box>
  );
};
export default AuthForm;
