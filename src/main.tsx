import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { configureStore } from './models/store';
import Root from './routes';
import './global.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={configureStore(history)}>
    <Root history={history} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
