import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import todoApp from './reducers';
import App from './components/App';
import {loadState, saveState} from './localStorage';

import throttle from 'lodash/throttle';

require('!style-loader!css-loader!./styles/datepicker.css');

// const persistedState = {
//   todos: [{
//     id: '0',
//     text: 'Welcome back!',
//     completed: false,
//   }]
// };

const persistedState = loadState();

const store = createStore(
  todoApp,
  persistedState
);

console.log('initisl state', store.getState());

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
    dates: store.getState().dates,
  });
}, 1000));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
