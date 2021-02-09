import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import Error from './Error';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/profile" component={Profile} exact />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
