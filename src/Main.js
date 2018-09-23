import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Quota from './Quota';
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
