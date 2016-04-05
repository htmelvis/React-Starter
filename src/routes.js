import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './components/layout/default-layout';
import Blog from './components/blog-component';
export default (
  <Route path='/' component={App}>
    <IndexRoute component={Index} />
    <Route path="blog" component={Blog} />
    <Route path="blog/:article" component={Blog} />
  </Route>
);
