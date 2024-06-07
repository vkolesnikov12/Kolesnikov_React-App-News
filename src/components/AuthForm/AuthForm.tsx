import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import FilledAlerts from '../FilledAlert/FilledAlert';
import { loginRequest } from '../../redux/actions/loginActions';

import styles from './authForm.module.css';

const AuthForm = () => {  
  const modalType = useAppSelector(state => state.modal.modalType);
  const hasError = useAppSelector(state => state.login.error);
  const dispatch = useAppDispatch();
  const modalTypeRegister = modalType === 'register';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      {hasError && <FilledAlerts error={hasError} severity='error'/>}
      <Typography variant="h5" component="h2" gutterBottom>
        {modalTypeRegister ? 'Регистрация' : 'Авторизация'}
      </Typography>
      {modalTypeRegister &&
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
        {modalTypeRegister ? 'Зарегистрироваться' : 'Авторизоваться'}
      </Button>
    </Box>
  );
};
export default AuthForm;
