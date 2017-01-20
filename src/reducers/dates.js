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

      //get index to add within state
      let index = state.findIndex((item) => {
        return item.range.start.isAfter(action.range.start);
      });

      if(index < 0) {
        index = state.length;
      }
      return [
        ...state.slice(0, index),
        addDate(undefined, action),
        ...state.slice(index),
      ];

    default:
      return state;
  }
};

export default dates;
