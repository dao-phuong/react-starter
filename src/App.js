import React, { Component } from 'react';
import { Provider } from 'react-redux';
import history from './core/history';
import store from './core/store';
import Router from './routers';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history} />
      </Provider>
    )
  }
}

export default App;
