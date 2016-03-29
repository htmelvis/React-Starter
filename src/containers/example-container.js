import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import ExampleComponent from '../components/example-component';
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

const ExampleContainer = connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);

export default ExampleContainer;
