import React, { Component } from 'react';

// NOTA_ESTUDO: O Provider vai passar para todos os outros componentes dentro dele o estado do Redux
import { Provider } from 'react-redux';

import './config/reactotron';

import store from './store'; // NOTA_ESTUDO: Todo Provider precisa de um store

import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
