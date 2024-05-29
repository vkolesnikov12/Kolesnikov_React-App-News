import { Box, Button, TextField, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks';

import styles from './authForm.module.css';
import { setFormData } from '../../redux/actions/formActions';

const AuthForm = () => {  
  const modalType = useAppSelector(state => state.modal.modalType);
  const formUserData = useAppSelector(state => state.form.data);
  const dispatch = useAppDispatch();
  const modalTypeRegister = modalType === 'register';

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      login: e.target[0].value,
      email: e.target[2].value,
      password: e.target[4].value
    };
    dispatch(setFormData(formData));
  };
  console.log(formUserData);
  
  return (
    <Box
      component="form"
      className={styles.box}
      onSubmit={handleSubmit}
    >
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
