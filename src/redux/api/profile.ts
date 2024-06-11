import api from './api';

import { Author } from '../../types';

export const profileData = async () => {
  return await api.get<Author>('auth/profile');
};
