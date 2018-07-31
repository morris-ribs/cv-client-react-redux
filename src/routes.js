import React from 'react';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';

import CandidatePage from './components/candidate/CandidatePage';

export default (
  <Switch>
    <Route exact path='/' component={CandidatePage} />
    <Route path='/:candidateId' component={CandidatePage} />
  </Switch>
);