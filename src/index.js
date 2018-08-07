import React from 'react';
import { StaticRouter, RouterContext } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import { renderRoutes, matchRoutes } from "react-router-config";
import {Provider} from 'react-redux';
import express from 'express';
import Helmet from 'react-helmet';

import configureStoreServer from './store/configureStoreServer';
import {routes} from './routes';

/* eslint-disable no-console */

const port = 8900;
const app = express();

app.get('/__webpack_hmr', function(req, res) {
  return "nothing";
});

app.use(express.static('public'));
app.use(express.static('build'));
app.use(express.static('dist'));

// SSR
app.get('/:candidateId', function(req, res) {
  const store = configureStoreServer(); // Setup store with reducers, etc
  const { url } = req;
  const context = {};
  // For each route that matches
  const promises = matchRoutes(routes, url).map(({route, match}) => {
    // Load the data for that route. Include match information
    // so route parameters can be passed through.
    if (route.loadData != null)
      return store.dispatch(route.loadData(match));
  });
 
  // Wait for all the data to load
  Promise.all(promises).then(() => {
    // Now render the component hierarchy using the store, 
    // include the routes
    const content = ReactDOMServer.renderToString( 
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          { renderRoutes(routes) }
        </StaticRouter>
      </Provider>
    );
 
    const helmet = Helmet.renderStatic();
    const serializedState = JSON.stringify(store.getState());
    return res.send(         
      `<!DOCTYPE html>
      <html lang="en">
        <head><link rel="stylesheet" href="styles.css">
          <title>My CV</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            ${helmet.meta.toString()}
            <link href="https://fonts.googleapis.com/css?family=Roboto">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        </head>
        <body>
          <div id="app">${content}</div>
          <script src="/bundle.js"></script>
          <script>
            window.__PRELOADED_STATE__ = ${serializedState}
          </script>
        </body>
      </html>`
    );
  }).catch((reason) => {console.log ("Error: " + reason);}); 
});

app.listen(process.env.PORT || port, function(err) {
  if (err) {
    console.log(err);
  }
});
