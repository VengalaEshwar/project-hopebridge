import axios from 'axios';
const axiosInstance = axios.create({
  withCredentials: true, 
  baseURL: import.meta.env.VITE_BACKEND_URL //import.meta.env.BACKEND_URL// Set the base URL for the instance
});

export default axiosInstance;