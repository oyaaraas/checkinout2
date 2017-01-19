import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import dates from './dates';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  dates
});

export default todoApp;
