import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import './index.css';
import { configureStore } from './models/store';
import registerServiceWorker from './registerServiceWorker';
import App from './views/App';

const Root = hot(module)(App);

ReactDOM.render(
  <Provider store={configureStore()}>
    <Root />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
