import { connect } from 'react-redux';
import { addDate } from '../actions';

import DatePicker from './DatePicker';

const mapStateToProps = (state) => {
  return {
    dates: state.dates
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDateClick: (range) => {
      dispatch(addDate(range));
    },
  };
};

const VisibleDatePicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePicker);

export default VisibleDatePicker;
