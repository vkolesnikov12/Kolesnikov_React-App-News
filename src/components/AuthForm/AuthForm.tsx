import { Box, Button, TextField, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks";

const AuthForm = () => {
  const modalType = useAppSelector(state => state.modal.modalType)
  console.log(modalType);
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Регистрация
      </Typography>
      <TextField
        label="Login"
        variant="outlined"
        name="login"
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        required
      />
      <TextField
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
        sx={{ mt: 2 }}
      >
        Зарегистрироваться
      </Button>
    </Box>
  );
};
export default AuthForm;
//
