import React from 'react';
import { StaticRouter } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import { renderRoutes, matchRoutes } from "react-router-config";
import {Provider} from 'react-redux';
import fs from 'fs';
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import configureStoreServer from '../src/store/configureStoreServer';
import {routes} from '../src/routes';

/* eslint-disable no-console */

const port = 8800;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, 'public')));

// SSR
app.get('*', function(req, res) {
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
    )
 
    const serializedState = JSON.stringify(store.getState());
    const indexFile = path.resolve('./dist/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }

      return res.send(
        data.replace('<div id="app"></div>', 
        `<div id="app">${content}</div><script>
          window.__PRELOADED_STATE__ = ${serializedState}
        </script>`)
      );
    });
  }).catch((reason) => {console.log ("Error: " + reason);}); 
});


// only client
// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, '../src/index.html'));
// });

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
});
