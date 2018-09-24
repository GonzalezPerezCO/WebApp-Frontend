import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from '../Containers/Login';
import Signup from '../Containers/Signup';
import Quota from '../Containers/Quota';
import Schedule from './Schedule';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/quota" component={Quota} />
      <Route path="/schedule" component={Schedule} />
    </Switch>
  );
}

export default Main;
