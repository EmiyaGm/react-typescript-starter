import axios, { AxiosError } from 'axios';

const http = axios.create();

http.interceptors.request.use();

http.interceptors.response.use(
  res => res.data,
  (err: AxiosError) => {
    console.log(err.code);
    return Promise.reject(err.response);
  }
);

export { http };