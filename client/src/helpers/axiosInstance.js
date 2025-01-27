import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:4455/", // Set the base URL for the instance
});

export default axiosInstance;