import React from 'react';

import BemMixin from '../utils/BemMixin';
import PureRenderMixin from '../utils/PureRenderMixin';


const CalendarHighlight = React.createClass({

  propTypes: {
    modifier: React.PropTypes.string,
  },

  mixins: [BemMixin, PureRenderMixin],

  render() {
    const { modifier } = this.props;
    const modifiers = {[modifier]: true};
    const states = {};

    return (
      <div className={this.cx({states, modifiers})} />
    );
  },
});

export default CalendarHighlight;
