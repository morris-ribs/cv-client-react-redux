import React from 'react';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';

import CandidatePage from './components/candidate/CandidatePage';
import {routes} from './routes';


// export default (
//   <Switch>
//     <Route exact path='/' component={CandidatePage} />
//     <Route path='/:candidateId' component={CandidatePage} /> 
//   </Switch>
// );

export default (
  <Switch>
    {routes.map(route => (
      <Route key="T" {...route}/>
    ))}
  </Switch>
);