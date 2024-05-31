import { FormData } from '../../types';

import api from './api';

export const formData = async (data: FormData, auth ) => {
  console.log(auth);
  return await api.post<FormData>(auth, data);
};
