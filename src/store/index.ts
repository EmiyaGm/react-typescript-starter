import { enviroment } from '../config';

export async function configureStore() {
  return enviroment === 'development'
    ? await import('./store.dev')
    : await import('./store.prod');
}