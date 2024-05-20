import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const stylesLoading = { display: 'flex' };

const Loading = () => {
  return (
    <Box sx={stylesLoading}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
