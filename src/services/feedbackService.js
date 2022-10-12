import axios from './axios';

export const getFeedbacks = () => {
  return axios.get('/feedbacks');
};

export const addFeedback = (data) => {
  return axios.post('/feedbacks/new', data);
};
