import React from 'react';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';

import {routes} from './routes';

export default (
  <Switch>
    {routes.map(route => (
      <Route key="T" {...route}/>
    ))}
  </Switch>
);