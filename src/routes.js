import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

//do not keep this...it is only for example
const Greeting = () => {
  return <div>Hey there!</div>;
};

export default (
  <Route path='/' component={App}>
    <Route path="greet" component={Greeting} />
  </Route>
);
