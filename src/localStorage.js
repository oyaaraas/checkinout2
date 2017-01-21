import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }

    const parsedState =  JSON.parse(serializedState);

    if (parsedState.dates.length > 0 && typeof parsedState.dates[0].range.end === 'string') {
      parsedState.dates.map(item => {
        const end = new Date(item.range.end);
        const start = new Date(item.range.start);
        item.range = moment.range(start, end);
      });
    }

    return parsedState;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // ignore errors
    console.log('saveState error', err);
  }
};
