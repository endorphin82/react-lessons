import { createStore, combineReducers } from 'redux';

//import createLogger from 'redux-logger';

import rootReducer from '../reducers';

//const logger = createLogger();

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
