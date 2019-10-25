import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Router from './components/Router';
import { store, history } from './store';
import './app.global.css';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

render(
  <AppContainer>
    <Router store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);
