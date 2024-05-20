import Alert, { AlertColor } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface FilledAlertProps {
 error: null | string;
 severity: AlertColor; 
}

const stackStyles = {
  width: '100%'
};

const FilledAlerts = ({error, severity} :FilledAlertProps) =>  {
  return (
    <Stack sx={stackStyles} spacing={2}>
      <Alert variant="filled" severity={severity}>
        {error}
      </Alert>
    </Stack>
  );
};

export default FilledAlerts;
