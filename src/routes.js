import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

//do not keep this...it is only for example
const Index = () => {
  return (
    <div class="container">
      <div className="row">
        <div className="col-xs-12">
          <header>
            <h2>Some Article Title Thing</h2>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem consectetur consequatur debitis dicta dolorum eos laborum, magnam molestias non nostrum, qui quia quibusdam quidem ratione sapiente vel voluptate voluptatum!</span><span>Blanditiis debitis dolore eligendi excepturi explicabo harum itaque labore libero praesentium quam quasi, quod reprehenderit temporibus ullam unde. Adipisci culpa exercitationem id in pariatur quis reiciendis unde vero? Assumenda, voluptatibus?</span><span>Dolorum ipsum minus nam, natus odit voluptate. Alias, aspernatur distinctio eligendi et expedita fugiat hic iure minima necessitatibus pariatur perferendis placeat quia, quibusdam! Aliquam aspernatur fugit reiciendis temporibus ut, voluptatum?</span></p>
          </header>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div class="container">
      <div className="row">
        <div className="col-xs-12">
          <header>
            <h2>About the Thing is super cool</h2>
            <p>Good Golly Miss Molly Good Golly Miss Molly Good Golly Miss Molly Good Golly Miss Molly Good Golly Miss Molly</p>
          </header>
        </div>
      </div>
    </div>
  );
};


export default (
  <Route path='/' component={App}>
    <IndexRoute component={Index} />
    <Route path="about" component={About} />
  </Route>
);
