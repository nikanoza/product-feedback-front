import axios from './axios';

export const getFeedbacks = () => {
  return axios.get('/feedbacks');
};

export const addFeedback = (data) => {
  return axios.post('/feedbacks/new', data);
};

export const getSingleFeedback = (id) => {
  return axios.get('/feedbacks/' + id);
};

export const addComment = (data) => {
  return axios.post('/comment', data);
};

export const addReplay = (data) => {
  return axios.post('/replay', data);
};

export const editFeedback = (data) => {
  return axios.put('/feedback', data);
};

export const deleteFeedback = (id) => {
  return axios.delete('/feedbacks/' + id);
};
