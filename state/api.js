import axios from 'axios';

const API = axios.create({
  baseURL: '',
  headers: {
    Authorization: 'Bearer todo',
  },
  responseType: 'json',
});

export default API;
