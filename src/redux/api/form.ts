import { FormData } from '../../types';

import api from './api';

export const formData = async (data: FormData, auth: string ) => {
  return await api.post<FormData>(auth, data);
};
