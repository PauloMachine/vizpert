import React from 'react';
import PropTypes from 'prop-types';

import { NAVBAR, FOOTER } from '../../container';

import { CONTAINER } from './styles';

export default function HeroesLayout({ children }) {
   return (
      <CONTAINER>
         <NAVBAR />
         {children}
         <FOOTER />
      </CONTAINER>
   );
}

HeroesLayout.propTypes = {
   children: PropTypes.element.isRequired,
};
