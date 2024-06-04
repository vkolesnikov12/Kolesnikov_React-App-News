import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import avatarUrl from '../../public/images/avatar.avif';

export default function ImageAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={avatarUrl} />
    </Stack>
  );
}
