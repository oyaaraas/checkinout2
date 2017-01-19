import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <p>
    Vis:
    {' '}
    <FilterLink filter="SHOW_ALL">
      Alle
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Aktive
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Slettede
    </FilterLink>
  </p>
);

export default Footer;
