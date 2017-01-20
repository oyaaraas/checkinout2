import React from 'react';

import BemMixin from './utils/BemMixin';

import PureRenderMixin from 'react-addons-pure-render-mixin';


const Legend = React.createClass({
  propTypes: {
    selectedLabel: React.PropTypes.string.isRequired,
    stateDefinitions: React.PropTypes.object.isRequired,
  },

  mixins: [BemMixin, PureRenderMixin],

  render() {
    const {selectedLabel, stateDefinitions} = this.props;
    const items = [];
    let name;
    let def;
    let style;

    for (name in stateDefinitions) {
      if (stateDefinitions.hasOwnProperty(name)) {
        def = stateDefinitions[name];
        if (def.label && def.color) {
          style = {
            backgroundColor: def.color,
          };
          items.push(
            <li className={this.cx({element: 'LegendItem'})} key={name}>
              <span className={this.cx({element: 'LegendItemColor'})} style={style}/>
              <span className={this.cx({element: 'LegendItemLabel'})}>{def.label}</span>
            </li>
          );
        }
      }
    }

    return (
      <ul className={this.cx()}>
        <li className={this.cx({element: 'LegendItem'})}>
          <span className={this.cx({element: 'LegendItemColor', modifiers: {'selection': true}})} />
          <span className={this.cx({element: 'LegendItemLabel'})}>{selectedLabel}</span>
        </li>
        {items}
      </ul>
    );
  },
});

export default Legend;
