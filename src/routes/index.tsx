import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import List from '../pages/List/index';

interface Props {
  toggleTheme(): void;
}

const Routes: React.FC<Props> = ({ toggleTheme }) => (
  <Switch>
    <Route
      path="/"
      exact
      component={() => <Home toggleTheme={toggleTheme} />}
    />
    <Route path="/list" component={List} />
  </Switch>
);

export default Routes;
