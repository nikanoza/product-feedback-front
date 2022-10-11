import axios from './axios';

export const getStatuses = () => {
  return axios.get('/status');
};
