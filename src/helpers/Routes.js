import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import LeagueView from '../views/League';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={() => <Home />} />
      <Route
        exact
        path='/:id'
        component={(props) => <LeagueView {...props} />}
      />
    </Switch>
  );
}
