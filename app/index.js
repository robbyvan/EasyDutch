import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import configureStore from './store';
import App from './containers/App';

const store = configureStore();

const EasyDutch = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('EasyDutch', () => EasyDutch);