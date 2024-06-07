import api from './api';

export const profileData = async () => {
  return await api.get('auth/profile');
};
