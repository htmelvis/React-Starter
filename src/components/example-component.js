import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ExampleComponent extends Component {
   constructor(props){
     super(props);
     //bind methods to this in the constructor of each component for reuse
     this.updateStatus = this.updateStatus.bind(this);
     this.specialInit = this.specialInit.bind(this);
   }

  specialInit () {
    this.props.updateStatus ('initializing...');
    this._statusInput.value = "";
    setTimeout(function(){ this.props.initApp()}.bind(this), 2400);
  }

   updateStatus(e){
      this.props.updateStatus(this._statusInput.value);
   }
   render() {
     const { store } = this.context;
     const state = store.getState();

    return (
      <div>
        <h1>Header</h1>
        <div className="navbar-default navbar">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
ExampleComponent.contextTypes = {
  store: React.PropTypes.object
};