import moment from 'moment';
import {} from 'moment-range';
import isMomentRange from './isMomentRange';


export default {
  momentOrMomentRange(props, propName) {
    const val = props[propName];

    if (!val) {
      return null;
    } else if (moment.isMoment(val)) {
      return null;
    } else if (isMomentRange(val)) {
      return null;
    }
    return new Error(`'${propName}' must be a moment or a moment range`);
  },

  moment(props, propName) {
    const val = props[propName];

    if (!val) {
      return null;
    } else if (moment.isMoment(val)) {
      return null;
    }
    return new Error(`'${propName}' must be a moment`);
  },

  momentRange(props, propName) {
    const val = props[propName];

    if (!val) {
      return null;
    } else if (isMomentRange(val)) {
      return null;
    }
    return new Error(`'${propName}' must be a moment range`);
  },
};
