import Alert, { AlertColor } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface Props {
 error: null | string;
 severity: AlertColor; 
}

const FilledAlerts: React.FC<Props> = ({error, severity}) =>  {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity={severity}>
        {error}
      </Alert>
    </Stack>
  );
};

export default FilledAlerts;