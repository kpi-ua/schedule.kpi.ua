import axios from 'axios';
let headers = {};

export const Http = axios.create(
  {
    baseURL: "https://schedule.kpi.ua/api/",
    headers
  });


export default Http;