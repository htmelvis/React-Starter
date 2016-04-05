import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Blog from '../containers/blog-container';
import Footer from '../components/layout/footer';

export default class App extends Component {
  render() {
    return (
      <div className="component-name-space">
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <Blog />
          {this.props.children}
          <Footer />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
