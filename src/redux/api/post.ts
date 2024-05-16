import api from './api';

export const postsData = async () => {
  return await api.get('/posts');
};
