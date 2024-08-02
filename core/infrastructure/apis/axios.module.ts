import { baseUrl } from '@/core/domain/constants/constants';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 100000,
  headers: {}
});

export default axiosInstance;
