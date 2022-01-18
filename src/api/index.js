import axios from 'axios';
let headers = {};

export const Http = axios.create(
  {
    baseURL: 'http://schedule.kpi.ua:5000/',
    headers
  });


export default Http;