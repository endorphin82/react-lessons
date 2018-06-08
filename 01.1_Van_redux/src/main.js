import React from 'react'

import ReactDOM from 'react-dom'

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import reducer from './reducers'

import Counter from './Counter'


const store = createStore(reducer)

// {
//    dispatch
//    getState
//    subscribe
// }




ReactDOM.render(
  <Provider store ={store}>
    <div>
      <Counter />
      <Counter />

    </div>
  </Provider>,
  document.getElementById('root'),
);
