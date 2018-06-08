import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Counter from './Counter.jsx';

import store from './store';

function init() {
  Tabletop.init( {
      key: '1AiTohDpKzIGE_Avq_rWseStcHQRoNuncqPHPvjl9zRs',
      callback: function(data, tabletop) { console.log(data) },
      simpleSheet: true
  } );
}

setTimeout( () => init(), 3000 );

ReactDOM.render(
    <Provider store={store}>
        <Counter step={5} />
    </Provider>,
    document.getElementById('root')
);
