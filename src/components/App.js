import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Immutable from 'immutable';
import AppReducer from '../reducers';
import AppWithNavigationState from './AppNavigator';

class App extends Component {
  store = createStore(AppReducer, Immutable.Map());

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
} 

export default App;
