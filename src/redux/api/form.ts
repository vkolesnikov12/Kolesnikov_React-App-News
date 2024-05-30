import { FormData } from '../../types';

import api from './api';

export const formData = async (data: FormData) => {
  return await api.post<FormData>('/auth/register', data);
};
