import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Index from '../views/Index/Index';

const Routes = () => (
  <Router>
    <Switch>
      <Redirect from={'/'} to={'/index'} exact />
      <Route exact path={'/index'} component={Index} />
    </Switch>
  </Router>
);

export default Routes;
