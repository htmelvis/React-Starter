import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ExampleContainer from '../containers/example-container';
import Footer from '../components/footer';
export default class App extends Component {
  render() {
    return (
      <div className="component-name-space">

        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <ExampleContainer />
          {this.props.children}
          <Footer />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
