import { createStore, combineReducers } from 'redux';

import rootReducer from '../reducers';

// const createStore = reducer => {
//     let state = state || 0;
//     let listeners = [];
//
//     const getState = () => state;
//
//     const dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach(listener => listener());
//     };
//
//     const subscribe = (listener) => {
//         listeners.push(listener);
//
//         return () => {
//             listeners = listeners.filter(l => l !== listener);
//         }
//     };
//
//     dispatch({});
//
//     return { getState, dispatch, subscribe };
// };

export default createStore(rootReducer);
