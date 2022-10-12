import axios from './axios';

export const addFeedback = (data) => {
  return axios.post('/feedbacks/new', data);
};
