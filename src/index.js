import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';

import configureStore from './store/configureStore';
import { loadService } from './actions/serviceAction';
import { loadAuthors } from './actions/authorAction';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const store = configureStore();
store.dispatch(loadService());
store.dispatch(loadAuthors());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
