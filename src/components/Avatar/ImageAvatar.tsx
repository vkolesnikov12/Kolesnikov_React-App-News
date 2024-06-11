import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { useAppSelector } from '../../hooks';

export default function ImageAvatar() {
  const userAvatar = useAppSelector(state => state.login.user.avatarUrl);
  
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Avatar" src={userAvatar} />
    </Stack>
  );
}
