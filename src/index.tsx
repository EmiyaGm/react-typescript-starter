import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './models/store';
import Root from './root';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Root />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
