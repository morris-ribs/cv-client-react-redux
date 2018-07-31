/*eslint-disable import/default */ 
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history';

import { ConnectedRouter } from 'connected-react-router';

import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore';
import routes from './routes';


const history = createBrowserHistory();
const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);