import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './loading.module.css';

const Loading = () => {
  return (
    <Box className={styles.box}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
