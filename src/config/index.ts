type env = 'development' | 'prod';
export const enviroment = process.env.NODE_ENV as env;