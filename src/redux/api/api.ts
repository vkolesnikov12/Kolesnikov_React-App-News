import axios, { InternalAxiosRequestConfig } from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL }); 

const checkTokenInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};
api.interceptors.request.use(checkTokenInterceptor);

export default api;
