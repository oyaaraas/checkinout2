import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import Profile from './Profile';
import Search from './Search';

const Root = ({store}) => (
  <Provider store={store}>
    <Router  history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Profile}/>
        <Route path="/search" component={Search}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
