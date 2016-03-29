import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class ExampleComponent extends Component {
   constructor(props){
     super(props);
      console.log(this.props.store)
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
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <label>{state.reducers.status}</label>
          <input ref={(c) => this._statusInput = c} onChange={this.updateStatus} />
          <button onClick={this.props.initApp}>Run Action</button>
          <button onClick={this.specialInit}>Initialize</button>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
ExampleComponent.contextTypes = {
  store: React.PropTypes.object
};