import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Quote from './Quote';
import Error from './Error';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={App} exact />
      <Route path="/quote" component={Quote} exact />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
