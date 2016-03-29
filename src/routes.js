import React from 'react';
import { Route, NoMatch } from 'react-router';

import App from './components/app';
import ExampleComponent from './components/example-component';

//do not keep this...it is only for example
const Greeting = () => {
  return <div>Hey there!</div>;
};


export default (
  <Route path='/' component={App}>
    <Route path="greet" component={Greeting} />
  </Route>
);
