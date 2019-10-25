import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { hot } from 'react-hot-loader/root';
import routes from '../../constants/routes';
import Questions from '../../pages/Questions';

const Router = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={routes.HOME} component={Questions} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default hot(Router);
