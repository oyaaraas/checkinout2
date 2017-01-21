import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root';

require('!style-loader!css-loader!./styles/datepicker.css');

const store = configureStore();

render(
  <Root store={store}/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
