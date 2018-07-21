import axios, { AxiosError } from 'axios';

const http = axios.create();

http.interceptors.request.use();

http.interceptors.response.use(
  res => res.data,
  (err: AxiosError) => {
    console.log(err.code);
    console.log(err.response);
    return Promise.reject(err);
  }
);

export { http };
