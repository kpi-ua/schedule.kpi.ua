import axios from "axios";
let headers = {};

export const Http = axios.create({
  baseURL: "https://api.campus.kpi.ua/",
  headers,
});

export default Http;
