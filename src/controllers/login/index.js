import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from './actions';

const Login = ({ auth, actions }) => {

  const handleLogin = () => {
    actions.loginRequest({ userId: 'phuongdd', password: 'e23e' });
  }

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
  actions: bindActionCreators({...actions}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)