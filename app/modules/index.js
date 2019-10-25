import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

export default function createRootReducer(history) {
	return combineReducers({
		router: connectRouter(history),
		form: reduxFormReducer
	});
}
