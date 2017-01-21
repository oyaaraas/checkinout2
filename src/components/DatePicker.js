import React from 'react';
import Moment from 'moment';
import {extendMoment} from 'moment-range';
import DateRangePicker from '../lib/react-daterange-picker';

const moment = extendMoment(Moment);

const stateDefinitions = {
  defaultState: {
    color: null,
    label: '',
  },
  unavailable: {
    selectable: false,
    color: '#5cb85c',
    label: 'Ledig',
  },
};

const onHighlightRange = (range) => {
  console.log(range);
};

const DatePicker = ({value, dates, onDateClick}) => {
  return(
    <DateRangePicker
      firstOfWeek={1}
      numberOfCalendars={2}
      selectionType="range"
      minimumDate={new Date()}
      stateDefinitions={stateDefinitions}
      dateStates={dates}
      defaultState="defaultState"
      showLegend
      value={value}
      onSelect={onDateClick}
      singleDateRange
      selectedLabel="Valgt dato"/>
  );
};

export default DatePicker;


