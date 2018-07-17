import axios, { AxiosError } from 'axios';

const http = axios.create();

http.interceptors.request.use();

http.interceptors.response.use(
  res => res,
  (err: AxiosError) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export { http };
