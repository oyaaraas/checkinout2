let nextTodoId = 0;
let nextDateId = 0;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: (nextTodoId++).toString(),
    text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id: id
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};

export const addDate = (range) => {
  return {
    type: 'ADD_DATE',
    id: (nextDateId++).toString(),
    range
  };
};
