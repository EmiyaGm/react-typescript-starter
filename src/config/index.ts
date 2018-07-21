type env = 'development' | 'prod';
const enviroment = process.env.NODE_ENV as env;

type Config = {
  url: string;
};

const dev: Config = {
  url: 'http://localhost:3000'
};

const prod: Config = {
  url: 'http://localhost:3000'
};

export const isDev = enviroment === 'development';
export default (isDev ? dev : prod);
