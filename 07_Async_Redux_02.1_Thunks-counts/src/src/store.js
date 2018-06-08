import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducers';

const logger = createLogger();

// const thunk = store => next => action =>
//     typeof action === 'function'
//     ? action(store.dispatch, store.getState)
//     : next(action);

export default createStore(reducer,
  applyMiddleware(thunk, logger));
