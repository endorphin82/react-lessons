import { createStore } from 'redux';

import reducer from './reducers';

//import thunk from 'redux-thunk'

// const thunk = store => next => action =>
//     typeof action === 'function'
//     ? action(store.dispatch, store.getState)
//     : next(action)

export default createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
