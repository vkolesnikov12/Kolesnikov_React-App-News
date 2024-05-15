import axios from 'axios';

const REACT_APP_API_URL = 'http://localhost:3000';

const api = axios.create({ baseURL: REACT_APP_API_URL });
 
export default api;

