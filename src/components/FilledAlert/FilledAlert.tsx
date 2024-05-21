import Alert, { AlertColor } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import styles from './filledAlert.module.css';

interface FilledAlertProps {
 error: null | string;
 severity: AlertColor; 
}

const FilledAlerts = ({ error, severity }: FilledAlertProps) =>  {
  return (
    <Stack className={styles.stack} spacing={2}>
      <Alert variant="filled" severity={severity}>
        {error}
      </Alert>
    </Stack>
  );
};

export default FilledAlerts;
