import {createStore} from 'redux';
import todoApp from './reducers';
import {loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';

const configureStore = () => {
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

  return store;
};

export default configureStore;
