import React from 'react';

import BemMixin from '../utils/BemMixin';
import PureRenderMixin from '../utils/PureRenderMixin';


const CalendarSelection = React.createClass({

  propTypes: {
    modifier: React.PropTypes.string,
    pending: React.PropTypes.bool.isRequired,
  },

  mixins: [BemMixin, PureRenderMixin],

  render() {
    const {modifier, pending} = this.props;
    const modifiers = {[modifier]: true};
    const states = {
      pending,
    };

    return (
      <div className={this.cx({states, modifiers})} />
    );
  },
});

export default CalendarSelection;
