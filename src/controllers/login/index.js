import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from './../../modules/auth/actions';

import store from './../../core/store';

const Login = ({ auth, loginActions }) => {

  const handleLogin = () => {
    loginActions.loginRequest({ userId: 'phuongdd', password: 'e23e' });
    // store.dispatch({ type: 'auth/LOGIN_REQUEST', payload: { userId: 'phuongdd', password: 'e23e'}});
  }

  console.log('store', store);

  return (
    <div>
      <button onClick={e => handleLogin()}>Login</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators({...actions}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)