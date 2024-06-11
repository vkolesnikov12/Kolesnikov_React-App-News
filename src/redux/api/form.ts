import { FormData } from '../../types';

import api from './api';

export const formData = async (data: FormData, path: string ) => {
  return await api.post<FormData>(path, data);
};
