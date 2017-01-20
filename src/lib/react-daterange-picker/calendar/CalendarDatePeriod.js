import React from 'react';

import BemMixin from '../utils/BemMixin';
import PureRenderMixin from '../utils/PureRenderMixin';


const CalendarDatePeriod = React.createClass({

  propTypes: {
    color: React.PropTypes.string,
    period: React.PropTypes.string,
  },

  mixins: [BemMixin, PureRenderMixin],

  render() {
    const {color, period} = this.props;
    const modifiers = {[period]: true};
    let style;

    if (color) {
      style = {backgroundColor: color};
    }

    return (
      <div style={style} className={this.cx({modifiers})} />
    );
  },
});

export default CalendarDatePeriod;
