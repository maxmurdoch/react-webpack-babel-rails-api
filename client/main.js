import './assets/app.css';
import './assets/menu.css';
import './assets/blabs.css';
import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});
