import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    accept: 'applications/json',
    'Content-type': 'applications/json',
  },
});

export default instance;
