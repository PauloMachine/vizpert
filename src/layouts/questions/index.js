import React from 'react';
import PropTypes from 'prop-types';

import { CONTAINER } from './styles';

export default function QuestionsLayout({ children }) {
   return <CONTAINER>{children}</CONTAINER>;
}

QuestionsLayout.propTypes = {
   children: PropTypes.element.isRequired,
};
