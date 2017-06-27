import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import AppReducer from '../reducers';

import AppWithNavigationState from './AppNavigator';
import configureStore from '../store/configureStore';

class App extends Component {
  store = configureStore(Immutable.Map());

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
} 

export default App;
