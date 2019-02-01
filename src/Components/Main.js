import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Containers/Login';
import HomePage from '../Containers/HomePage';
import Signup from '../Containers/Signup';
import Signout from '../Containers/Signout';
import Spinner from '../Containers/Spinner';
import Quota from '../Containers/Quota';
import Schedule from '../Containers/Schedule';


function Main() {
  return (
    <Switch>
      <Route exact path="/deportes/ui" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/signout" component={Signout} />
      <Route path="/spinner" component={Spinner} />
      <Route path="/quota" component={Quota} />
      <Route path="/schedule" component={Schedule} />
    </Switch>
  );
}

export default Main;
