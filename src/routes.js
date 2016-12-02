import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import CandidatePage from './components/candidate/CandidatePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={CandidatePage} />
    </Route>
);