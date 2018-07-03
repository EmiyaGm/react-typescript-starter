import { enviroment } from '../config';

import dev from './store.dev';
import prod from './store.prod';

export function configureStore() {
  return enviroment === 'development'
    ? dev
    : prod;
}