import React from 'react';
import history from './../core/history';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import NotMatch from './../controllers/notmatch';
import { default as login } from './pages/login';
import booking from './pages/booking';

const routes = [...login, ...booking];

export default connect(state => ({
  auth: state.auth
}))(({ auth }) => {
  return (
    <Router history={history} >
      <Switch>
        {
          routes.filter(route => route.protected).map((route, key) => (
            <Route 
              key={key}
              exact={route.exact}
              path={route.path}
              render={
                props => 
                  auth.isLogin ? React.createElement(route.component, { ...props }) : React.createElement(NotMatch)
              }
            />
          ))
        }
        {
          routes.filter(route => !route.protected).map((route, key) => (
            <Route 
              key={key}
              exact={route.exact}
              path={route.path}
              render={
                props => React.createElement(route.component, { ...props })
              }
            />
          ))
        }
        <Route component={NotMatch} />
      </Switch>
    </Router>
  )
})

export const reducer = (function() {
  let reducer = {};
  Array.prototype.forEach.call(routes, route => {
    if (route.reducer) {
      Object.assign(reducer, { [route.name]: route.reducer });
    }
  });
  return reducer;
})();

export const sagas = (function() {
  let sagas = [];
  Array.prototype.forEach.call(routes, route => {
    if (route.sagas) {
      sagas.push(route.sagas);
    }
  });

  console.log('sagas', sagas);
  return sagas;
})();