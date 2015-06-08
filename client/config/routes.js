import React from 'react';
import {DefaultRoute, Route} from 'react-router';
import App from '../components/layout/App';
import View from '../components/blabs/View';
import AboutView from '../components/static/AboutView';

export default (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="blabs" handler={View} />
    <Route name="about" handler={AboutView} />
  </Route>
);
