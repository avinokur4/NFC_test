import axios from 'axios';

const API = axios.create({
  baseURL: 'https://cloud.staging.genexir.selinko.com',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Selinko-App': 'pk_GWYKSUt4+wBdwB0HEK8S',  
    Authorization: 'Bearer todo',
  },
  responseType: 'json',
});

export default API;
