import React, {Component} from 'react';
import ExampleContainer from '../containers/example-container';

export default class App extends Component {
  render() {
    return (
      <div className="component-name-space">
        {this.props.children}
        <ExampleContainer />
      </div>
    );
  }
}
