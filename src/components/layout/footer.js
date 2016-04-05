import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
  constructor(props){
    super(props);
    //bind methods to this in the constructor of each component for reuse
  }

  render() {
    const { store } = this.context;
    const state = store.getState();

    return (
      <div>
        <h2>Footer</h2>
        <Link to="/">Back Home</Link>
        <small className="text-center">&copy; 2016</small>
      </div>
    )
  }
}
Footer.contextTypes = {
  store: React.PropTypes.object
};