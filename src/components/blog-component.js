import React from 'react';
require('./blog-style.styl');

export default function BlogComponent(){
  return (
    <div className="container blog-container">
      <div className="row blog-post blog-post--newest">
        <article className="col-xs-12">
          <header>
            <h2>About the Thing is super cool</h2>
            <p>Good Golly Miss Molly Good Golly </p>
            <date>February 22, 2017</date>
          </header>
          <div className="content">
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolorum, nisi obcaecati placeat saepe ullam! Aliquid deserunt distinctio ex fuga laborum maxime, nemo, nesciunt nobis obcaecati odit, optio quis rem.</span><span>Atque culpa deleniti eaque esse exercitationem facere laborum minima perspiciatis qui saepe. Consequatur dicta dignissimos error facere fuga illo, numquam officiis optio placeat quas quisquam sed totam unde! Aliquid, cumque!</span><span>Beatae cum, exercitationem, expedita fuga incidunt itaque, magni molestias optio perspiciatis quam quis repudiandae rerum. Aliquam cum cupiditate harum id ipsam, nesciunt non perferendis possimus praesentium, rerum sit tempora veritatis.</span></p>
          </div>
          <footer>
            <ul className="link-list">
              <li><a href="#">Footer link</a></li>
              <li><a href="#">Other link</a></li>
              <li><a href="#">Some link</a></li>
            </ul>
          </footer>
        </article>
      </div>
    </div>
  );
};