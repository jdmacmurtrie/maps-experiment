import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'
import changePosition from './reducers/changePosition'

const store = createStore(changePosition)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
