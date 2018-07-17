import axios from 'axios';

const http = axios.create();

http.interceptors.request.use();

http.interceptors.response.use(res => res, err => console.log(err));

export { http };
