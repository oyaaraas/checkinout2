import React from 'react';
import BemMixin from './utils/BemMixin';
import PureRenderMixin from 'react-addons-pure-render-mixin';


const PaginationArrow = React.createClass({

  propTypes: {
    disabled: React.PropTypes.bool,
    onTrigger: React.PropTypes.func,
    direction: React.PropTypes.oneOf(['next', 'previous']),
  },

  mixins: [BemMixin, PureRenderMixin],

  getDefaultProps() {
    return {
      disabled: false,
    };
  },

  render() {
    const {disabled, direction, onTrigger, ...props} = this.props;
    const modifiers = {[direction]: true};
    const states = {disabled};

    const elementOpts = {
      modifiers,
      states,
    };

    const iconOpts = {
      element: 'PaginationArrowIcon',
      modifiers,
      states,
    };

    return (
      <div className={this.cx(elementOpts)} {...props} onClick={onTrigger}>
        <div className={this.cx(iconOpts)} />
      </div>
    );
  },
});

export default PaginationArrow;
