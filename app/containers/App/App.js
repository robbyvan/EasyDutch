import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Components
// import BootPage from '../../components/BootPage';
import Login from '../Login';
import Tabs from '../routes';
// Actions
import * as AppActions from './actions';

function mapStateToProps(store) {
  return {
    state: store.app,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch),
  };
}

@connect(mapStateToProps, matchDispatchToProps)
class App extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    // this.props.actions.asyncAppStatus();
    console.log(this.props.state);
    console.log(this.props.actions);
  }

  render() {
    const { state } = this.props;

    // if (!state.booted) {
    //   return <BootPage />;
    // }

    if (!state.userLoginStatus) {
      return <Login />;
    }

    return <Tabs />;
  }
}

export default App;