import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from '../Containers/Login';
import Signup from '../Containers/Signup';
import Signout from '../Containers/Signout';
import Quota from '../Containers/Quota';
import Schedule from '../Containers/Schedule';

function Main() {
  return (
    <Switch>
      <Route exact path="/deportes/ui" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
	    <Route path="/signout" component={Signout} />
      <Route path="/quota" component={Quota} />
      <Route path="/schedule" component={Schedule} />
    </Switch>
  );
}

export default Main;
