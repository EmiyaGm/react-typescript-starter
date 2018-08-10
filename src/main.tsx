import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { init } from './lib/init';
import { configureStore } from './models/store';
import Root from './routes';
import './global.css';

init();

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={configureStore(history)}>
    <LocaleProvider locale={zh_CN}>
      <Root history={history} />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
