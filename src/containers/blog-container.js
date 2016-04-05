import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import Header from '../components/layout/header.js';
import { initApp, updateStatus } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    status: state.reducers.status
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      initApp: initApp,
      updateStatus: updateStatus
    }, dispatch);
}

const Blog = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Blog;
