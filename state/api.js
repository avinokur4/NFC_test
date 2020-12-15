import axios from 'axios';

const API = axios.create({
  baseURL: 'https://cloud.staging.genexir.selinko.com',
  headers: {
    Authorization: 'Bearer todo',
  },
  responseType: 'json',
});

export default API;
