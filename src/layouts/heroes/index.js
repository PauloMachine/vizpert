import React from 'react';
import PropTypes from 'prop-types';

import { NAVBAR } from '../../container';

import { CONTAINER } from './styles';

export default function HeroesLayout({ children }) {
   return (
   <CONTAINER>
         <NAVBAR />
         {children}
      </CONTAINER>
   );
}

HeroesLayout.propTypes = {
   children: PropTypes.element.isRequired,
};
