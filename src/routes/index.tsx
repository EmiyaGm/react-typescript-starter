import React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { History } from 'history';

import Index from '../views/Index/Index';
import Detail from '../views/Detail/Detail';
import Login from '../views/Login/Login';

interface Props {
  history: History;
}

const Routes: React.SFC<Props> = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Redirect from={'/'} to={'/index'} exact />
      <Route path={'/index'} component={Index} />
      <Route path={'/detail'} component={Detail} />
      <Route path={'/login'} component={Login} />
    </Switch>
  </ConnectedRouter>
);

export default hot(module)(Routes);
