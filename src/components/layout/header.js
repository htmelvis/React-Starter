import React, { Component } from 'react';
import { Link } from 'react-router';
import Collapse from 'bootstrap-styl/js/collapse';


export default class Header extends Component {
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
        <div className="navbar-default navbar navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="/" className="brand">
                {/* <img src="./img/logo.png" alt="htmelvis erie web design" /> */}
                <span className="navbar-brand">htmelvis</span>
              </a>
            </div>
            <div className="navbar-collapse collapse" id="main-navbar">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
Header.contextTypes = {
  store: React.PropTypes.object
};