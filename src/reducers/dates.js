const addDate = (state, action) => {
  switch (action.type) {
    case 'ADD_DATE':
      return {
        id: action.id,
        state: 'unavailable',
        range: action.range,
      };
    default:
      return state;
  }
};

const dates = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DATE':
      const a = [
        ...state,
        addDate(undefined, action),
      ];
      return a;
    default:
      return state;
  }
};

export default dates;
