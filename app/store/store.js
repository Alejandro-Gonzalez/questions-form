import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../modules';

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);

const stateOnGlobal = store => next => action => {
	const result = next(action);
	window.reduxState = store.getState();
	return result;
};

const middlewares =
	process.env.NODE_ENV === 'development' ? [thunk, logger, router, stateOnGlobal] : [thunk, router];

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(...middlewares)));
