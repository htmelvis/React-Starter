import React from 'react';
export default function DefaultLayout() {
    return (
      <div className="app-content">
        <div className="row">
          <div className="col-xs-12">
            <header className="jumbotron">
              <div className="container">
                <h1>Creative Front End Web Designer/Developer </h1>
                <p>I love my beautiful family &amp; teaching creatives how to work with the internet. </p>
              </div>
            </header>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="col-xs-12">
              <h2>Some information about me</h2>
              <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis delectus exercitationem explicabo inventore iusto nemo obcaecati tempore voluptate voluptatem. A cupiditate expedita facere minus praesentium quasi quod repellendus sequi!</span><span>Ab amet aspernatur consequatur cumque deleniti dignissimos dolorum ducimus ea earum enim est hic illo in labore magnam nemo nulla quae reiciendis sapiente sed, sint tenetur veritatis voluptate? Magnam, tenetur.</span><span>Eligendi eum nemo non nulla officiis quas similique tempora, voluptatum. Accusantium at commodi consequatur delectus, eaque fuga ipsum laborum laudantium libero, magnam maiores minus molestiae odio perspiciatis, placeat sint voluptas!</span>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <img src="http://placehold.it/300x200" className="img-responsive img-center" alt="Something" />
              <h2 className="text-center">Item 1</h2>
            </div>
            <div className="col-xs-4">
              <img src="http://placehold.it/300x200" className="img-responsive img-center" alt="Something" />
              <h2 className="text-center">Item 2</h2>
            </div>
            <div className="col-xs-4">
              <img src="http://placehold.it/300x200" className="img-responsive img-center" alt="Something" />
              <h2 className="text-center">Item 3</h2>
            </div>
          </div>
        </div>
      </div>
    );
};