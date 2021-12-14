import axios from 'axios';
let headers = {};

export const Http = axios.create(
  {
    baseURL: 'http://167.172.103.72:5000/',
    headers
  });


export default Http;